# 🚀 Personal Portfolio (Full Stack + Automation)

A modern, production-ready **developer portfolio** built with React and Vite, featuring **project showcase, blog section, and automated contact system using n8n + Resend API**.

---

## 🌐 Live Demo

🔗 https://personal-portfolio-zeta-ten-12.vercel.app/

---

## ✨ Features

* 🎨 Modern UI with clean glassmorphism design
* ⚡ Fast performance using Vite
* 📱 Fully responsive layout
* 📩 Contact form with real email automation
* 📝 Blog page (content showcase / writing)
* 📂 GitHub projects page (dynamic project display)
* 🤖 Workflow automation using n8n
* 📧 Email integration via Resend API

---

## 🧠 Architecture

```text id="jv2t5l"
User → Portfolio (Vercel)
     → API Route (/api/contact)
     → n8n Webhook (Render)
     → Resend API
     → Email delivered 📧
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* CSS (custom styling)
* Lucide Icons

### Backend / Automation

* n8n (workflow automation)
* Webhooks

### Email Service

* Resend API

### Deployment

* Vercel (Frontend + API routes)
* Render (n8n backend)

---

## 📂 Pages Overview

### 🏠 Home

* Intro, skills, and highlights

### 💼 Projects / GitHub Page

* Showcases repositories from GitHub
* Demonstrates real work and code

### 📝 Blog Page

* Displays articles / content
* Used for sharing knowledge & ideas

### 📩 Contact Page

* Functional contact form
* Sends real-time email using backend automation

---

## 📩 Contact Flow

* User submits form
* Request hits `/api/contact`
* Forwarded to n8n webhook
* n8n triggers Resend API
* Email sent instantly

---

## 📦 Installation

```bash id="c8jjxk"
git clone https://github.com/pratikshmalik05/personal-portfolio.git
cd personal-portfolio
npm install
npm run dev
```

---

## ⚙️ API Route Setup

```js id="3s9hch"
export default async function handler(req, res) {
  try {
    await fetch("https://n8n-portfolio-n7ar.onrender.com/webhook/portfolio-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
}
```

---

## ⚠️ Notes

* CORS handled using Vercel API route
* Resend free tier allows sending emails only to your own email
* n8n is deployed on Render

---

## 🧠 Key Learnings

* Handling CORS in production apps
* Building API proxy with Vercel
* Integrating external APIs (Resend)
* Workflow automation using n8n
* Debugging real deployment issues

---

## 🔮 Future Improvements

* Add database for storing messages
* Add authentication system
* Blog CMS integration
* Auto-reply emails
* Analytics dashboard

---

## 👨‍💻 Author

**Pratiksh Malik**

* GitHub: https://github.com/pratikshmalik05
* LinkedIn: https://www.linkedin.com/in/pratiksh-malik-91984b367/
* Twitter: https://x.com/PratikshM60725

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 🤝 Connect with me

---

## 📄 License

MIT License
