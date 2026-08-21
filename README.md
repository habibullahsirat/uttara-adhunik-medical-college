# Uttara Adhunik Medical College — Public site & Admin panel

A Next.js-based public website and admin panel for Uttara Adhunik Medical College: a React + Next (App Router) client site for visitors and an admin dashboard for site/content management that stores content in MongoDB and handles media via Cloudinary.

# Live demo
- Admin Panel: https://uamcedubd.vercel.app/
- Frontend: https://uamc-frontend.vercel.app/
  
Stack
- Language(s): JavaScript (primary), TypeScript (used in config/typing)
- Framework / runtime: Next.js (App Router) + React
- Notable libraries: Mongoose (MongoDB ODM), Cloudinary (media upload), Tailwind CSS (styling), SWR (data fetching), EmailJS (public contact form)

How it's organized
```
uttara-adhunik-medical-college-admin/    Next.js admin application (private: content management)
  package.json                          app scripts & dependencies (Next 16 + React 19)
  next.config.ts
  tsconfig.json
  app/                                   Next.js app router pages (admin area, student area, api)
    layout.tsx
    page.jsx
    admin/                                admin routes and layout (about, admission, gallery, site-setting, ...)
    student/                              student-facing admin pages (profile, login, ...)
  components/                             reusable admin components (ui, gallery, homepage, ...)
  public/
  lib/

uttara-adhunik-medical-college-public/   Next.js public website (visitor-facing)
  package.json
  next.config.ts
  tsconfig.json
  app/                                   Next.js app router pages (homepage, admissions, contact, gallery, ...)
    layout.tsx / page.jsx
  components/                             visitor-facing components
  public/
  lib/
```

How it fits together
- This repository contains two separate Next.js applications: the admin app (uttara-adhunik-medical-college-admin) for staff to manage content and media, and the public app (uttara-adhunik-medical-college-public) which visitors use. Both apps use React + the Next.js App Router and share similar dev tooling (Tailwind, ESLint, TypeScript configs).
- The admin app uses Mongoose to read/write site content into MongoDB and uses Cloudinary for uploading and serving images. The public app consumes those stored contents (via API routes or server-side rendering) and includes a client-side contact/email integration using EmailJS.

How to run it (local development)
- Prerequisites:
  - Node.js (v18+ recommended)
  - npm
  - A MongoDB connection (Atlas or local)
  - Cloudinary account (for admin media) — optional for read-only testing
  - EmailJS account/keys (for public site's contact form) — optional

- Start the admin app
```bash
# from repository root
cd uttara-adhunik-medical-college-admin
npm install

# provide env vars (example below), then:
npm run dev
# Optionally run on a different port if running both apps:
# PORT=3001 npm run dev
```

- Start the public app
```bash
cd ../uttara-adhunik-medical-college-public
npm install
npm run dev
# default port is 3000; run admin on a different port if needed
```

Common npm scripts (each app)
- npm run dev    # start dev server
- npm run build  # build for production
- npm run start  # start built app (after build)
- npm run lint   # run ESLint

Environment variables (example .env.local)
- Admin (.env.local in uttara-adhunik-medical-college-admin)
```
MONGODB_URI="mongodb+srv://<user>:<pass>@cluster0.mongodb.net/uttara?retryWrites=true&w=majority"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
NEXT_PUBLIC_BASE_URL="http://localhost:3001"   # optional, used for absolute URLs
```

- Public (.env.local in uttara-adhunik-medical-college-public)
```
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
# EmailJS (if used for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
```

Build & deploy
- Build each app and deploy separately (Vercel is a common choice for Next.js).
- Build steps:
```bash
# admin
cd uttara-adhunik-medical-college-admin
npm run build

# public
cd ../uttara-adhunik-medical-college-public
npm run build
```
- Ensure production environment variables (MongoDB, Cloudinary, EmailJS) are set in your hosting provider before starting the apps.

