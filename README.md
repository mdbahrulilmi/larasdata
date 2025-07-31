# 🌿 LarasData

LarasData is a modern, fullstack SaaS admin dashboard built with balance and clarity in mind.  
_"Laras"_ means in harmony in Javanese — just like how this platform helps you manage data and users with ease and structure.

---

## ✨ Features

- ✅ User Authentication (Email + Google OAuth)
- 📊 Dashboard Overview (real-time data display)
- 🧑‍💼 User Management (CRUD + role-based access)
- 💳 Subscription Plans (Free, Pro, Enterprise)
- 🔔 Notification system (toast + email)
- ⚙️ Profile & Settings
- 🌗 Light/Dark Mode toggle
- 📈 Analytics charts (Recharts)
- 🌐 Deployed & free to use

---

## 🛠️ Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- shadcn/ui
- React Query + Zustand
- Zod + React Hook Form

### Backend
- Next.js API Routes
- JWT Auth + Google OAuth via NextAuth
- Supabase (DB & Auth)
- Prisma ORM

### Deployment
- Frontend: Vercel
- Database: Supabase
- CI/CD: GitHub Actions

---

## 🧪 Getting Started

```bash
git clone https://github.com/username/larasdata.git
cd larasdata
pnpm install
cp .env.example .env.local