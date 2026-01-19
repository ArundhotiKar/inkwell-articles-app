# Inkwell Articles App – A Next.js + Express Demo

A simple **Next.js (App Router) application** demonstrating public pages, mock authentication, and an Express API for managing articles. Perfect for learning **full-stack development** with Next.js and Express.

---
## Live Demo
[View Live Project](https://article-blog-client.vercel.app/)

## 🔹 Features
- Landing page with **7 content sections**
- Navbar with links to **Login** and **Articles**
- Mock authentication using **hardcoded credentials** (`pallobi@gmail.com` / `123456`) stored in cookies
- Articles list fetched from **Express API** (`GET /articles`)
- Dynamic **Article Details Page** (`/articles/[id]`)
- Protected **Add Article Form** (`POST /articles`) – accessible only after login
- **Toast notifications** using `react-hot-toast` for better UX

---

## ⚡ Setup

### 1️⃣ Start the Express API
```powershell
cd d:/Projects
node index.js
2️⃣ Start the Next.js App
powershell
Copy code
cd d:/Projects/inkwell-articles-app
pnpm install # or npm install
pnpm dev
🌐 Routes Overview
Route	Access	Description
/	Public	Landing page
/articles	Public	Articles list
/articles/[id]	Public	Article details page
/login	Public	Login page
/add-article	Protected	Add new article (requires login)

Notes:

Express API runs at http://localhost:5000

The app uses a simple cookie auth=true to track login state

🚀 Getting Started
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 in your browser.
