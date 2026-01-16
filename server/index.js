// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); // ✅ import missing

const app = express();

// -------------------------
// Middleware
// -------------------------
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true,
}));
app.use(express.json()); // ✅ only once
app.use(cookieParser()); // ✅ parse cookies

// -------------------------
// Dummy Article Data
// -------------------------
const articles = [
  {
    id: "1",
    title: "Mindful Writing & Creative Flow",
    excerpt: "Creativity often emerges in quiet moments...",
    content: "In the quiet moments between thoughts...",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    author: "Inkwell Editorial",
    date: "2025-01-16",
  },
  {
    id: "2",
    title: "Redefining Productivity in Tech",
    excerpt: "True productivity is not about working more...",
    content: "The tech industry celebrates hustle culture...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "Jessica Park",
    date: "2025-01-12",
  },
  {
    id: "3",
    title: "Starting Your Machine Learning Journey",
    excerpt: "Machine learning may seem daunting...",
    content: "Machine learning might seem daunting, but anyone can start...",
    image: "https://i.ibb.co/Vc4cQBjY/images.jpg",
    author: "Inkwell Editorial",
    date: "2026-01-16",
  },
  {
    id: "4",
    title: "The Future of Remote Work",
    excerpt: "Remote work is transforming how we live and work...",
    content: "The global shift to remote work wasn't just a temporary adaptation...",
    image: "https://i.ibb.co/0yvvtMt4/AI-Agent-Digital-Employee.webp",
    author: "Michael Torres",
    date: "2025-12-01",
  },
  {
    id: "5",
    title: "Redefining Productivity with Boundaries",
    excerpt: "True productivity comes from balance...",
    content: "The tech industry celebrates hustle culture, but sustainable success requires balance...",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    author: "Sarah Chen",
    date: "2025-11-20",
  },
  {
    id: "6",
    title: "Embracing Mindful Writing",
    excerpt: "Mindful writing cultivates awareness...",
    content: "Begin each writing session with a few deep breaths...",
    image: "https://images.unsplash.com/photo-1518933165971-611dbc9c412d",
    author: "Inkwell Editorial",
    date: "2025-10-15",
  },
];

// -------------------------
// Routes
// -------------------------
app.get("/", (req, res) => {
  res.send("Article API is running 🚀");
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.get("/articles/:id", (req, res) => {
  const article = articles.find(a => a.id === req.params.id);
  if (!article) return res.status(404).json({ message: "Article not found" });
  res.json(article);
});

app.post("/articles", (req, res) => {
  const newArticle = { id: Date.now().toString(), ...req.body };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

// -------------------------
// Mock Authentication
// -------------------------
app.post("/api/auth/mock", (req, res) => {
  const { email, password } = req.body;
  if (email === "pallobi@gmail.com" && password === "123456") {
    res.cookie("auth", "true", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.json({ success: true });
  }
  res.status(401).json({ message: "Invalid credentials" });
});

app.get("/api/auth/status", (req, res) => {
  const auth = req.cookies.auth;
  res.json({ auth: auth === "true" });
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("auth");
  res.json({ success: true });
});

// -------------------------
// Start Server
// -------------------------
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
