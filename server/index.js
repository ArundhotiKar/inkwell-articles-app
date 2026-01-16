const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

/* -------------------------
   Dummy Article Data (6 articles)
-------------------------- */
const articles = [
  {
    id: "1",
    title: "Mindful Writing & Creative Flow",
    excerpt:
      "Creativity often emerges in quiet moments. Mindful writing helps us connect deeply with our inner voice.",
    content:
      "In the quiet moments between thoughts, creativity often finds its voice...",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    author: "Inkwell Editorial",
    date: "2025-01-16",
  },
  {
    id: "2",
    title: "Redefining Productivity in Tech",
    excerpt:
      "True productivity is not about working more, but creating meaningful impact.",
    content:
      "The tech industry celebrates hustle culture, but sustainable success requires balance...",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    author: "Jessica Park",
    date: "2025-01-12",
  },
  {
    id: "3",
    title: "Starting Your Machine Learning Journey",
    excerpt:
      "Machine learning may seem daunting, but anyone can start learning AI with the right approach.",
    content:
      "Machine learning might seem daunting, but with the right approach, anyone can start their AI journey.\n\nUnderstanding the Basics...\nChoosing Your Path...\nResources for Learning...\nEmbrace the journey and stay curious.",
    image:
      "https://i.ibb.co.com/Vc4cQBjY/images.jpg",
    author: "Inkwell Editorial",
    date: "2026-01-16",
  },
  {
    id: "4",
    title: "The Future of Remote Work",
    excerpt:
      "Remote work is transforming how we live and work. Learn how to thrive in this new normal.",
    content:
      "The global shift to remote work wasn't just a temporary adaptation—it was a revolution in how we think about work itself...",
    image:
      "https://i.ibb.co.com/0yvvtMt4/AI-Agent-Digital-Employee.webp",
    author: "Michael Torres",
    date: "2025-12-01",
  },
  {
    id: "5",
    title: "Redefining Productivity with Boundaries",
    excerpt:
      "True productivity comes from balance. Set boundaries and prioritize your well-being.",
    content:
      "The tech industry celebrates hustle culture, but sustainable success requires a different approach. After years of burnout cycles, I've discovered that work-life balance isn't a destination—it's a practice...",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    author: "Sarah Chen",
    date: "2025-11-20",
  },
  {
    id: "6",
    title: "Embracing Mindful Writing",
    excerpt:
      "Mindful writing cultivates awareness and nurtures creativity. Here's how to start your practice.",
    content:
      "Begin each writing session with a few deep breaths. Notice the weight of your body in the chair, the texture of the keyboard beneath your fingers...",
    image:
      "https://images.unsplash.com/photo-1518933165971-611dbc9c412d",
    author: "Inkwell Editorial",
    date: "2025-10-15",
  },
];

/* -------------------------
   Routes
-------------------------- */

// Root
app.get("/", (req, res) => {
  res.send("Article API is running 🚀");
});

// Get all articles
app.get("/articles", (req, res) => {
  res.json(articles);
});

// Get single article by ID
app.get("/articles/:id", (req, res) => {
  const article = articles.find((a) => a.id === req.params.id);

  if (!article) return res.status(404).json({ message: "Article not found" });

  res.json(article);
});

// Add article (optional)
app.post("/articles", (req, res) => {
  const newArticle = {
    id: Date.now().toString(),
    ...req.body,
  };

  articles.push(newArticle);
  res.status(201).json(newArticle);
});

/* -------------------------
   Server
-------------------------- */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
