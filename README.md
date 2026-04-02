# StockPro Academy — Share Market Training Website

A modern, production-ready stock market training website built with React + Vite + Tailwind CSS.

## Tech Stack
- React 19 + Vite 8
- Tailwind CSS v4
- React Router DOM v7
- React Hook Form + Framer Motion + Lucide React
- Supabase (optional) / localStorage fallback
- GitHub Pages deployment

## Quick Start
`bash
npm install
npm run dev
`

## Deploy to GitHub Pages
1. Update ase in vite.config.js to your repo name
2. Update homepage in package.json
3. Run: 
pm run deploy

## Admin Panel
Visit /admin — Default password: **admin123**
Change in src/pages/Admin.jsx ? ADMIN_PASS

## Pages
- / Home | /courses Courses | /courses/:id Detail
- /about About | /batches Batches | /testimonials
- /blog Blog | /blog/:slug Article
- /contact Contact | /faq FAQ | /admin Admin

## Customization
Edit src/data/mockData.js for all content and SITE_CONFIG.

See full README for Supabase setup, folder structure, and deployment guide.
