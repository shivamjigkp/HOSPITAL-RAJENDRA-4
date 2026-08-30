# Rajendra Hospital Website

> **Center of Advanced URO & Gyane Laparoscopy & Stone Management**  
> Production-grade hospital website — Next.js 15, TypeScript, Tailwind CSS, Prisma, Payload CMS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend + Admin + API | Next.js 15 (TypeScript, App Router) |
| Database | PostgreSQL (Neon for dev, Railway for production) |
| ORM | Prisma |
| CMS | Payload CMS v3 |
| UI | Tailwind CSS |
| Storage | Cloudflare R2 |
| Deployment (dev) | Vercel + Neon (free) |
| Deployment (prod) | Railway |

---

## Getting Started (Local Development)

### Prerequisites

- Node.js 20+ (LTS)
- npm 10+
- A [Neon](https://neon.tech) account (free) for the database

### 1. Clone & Install

```bash
# Clone the repo
git clone <your-repo-url>
cd rajendra-hospital

# Install dependencies
npm install
```

### 2. Set Up Environment Variables

```bash
# Copy the template
cp .env.example .env.local

# Open .env.local and fill in your values:
# - DATABASE_URL  → your Neon connection string
# - PAYLOAD_SECRET → generate: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
# - R2_* vars → your Cloudflare R2 bucket details
```

### 3. Set Up Database

```bash
# Push schema to Neon (dev)
npm run db:push

# Seed initial data (departments, doctor placeholders, site settings)
npm run db:seed

# (Optional) Open Prisma Studio to view data
npm run db:studio
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## Project Structure

```
rajendra-hospital/
├── app/                          ← Next.js App Router pages + API routes
│   ├── page.tsx                  ← Homepage
│   ├── about/page.tsx            ← About page
│   ├── departments/              ← Departments list + [slug] detail pages
│   ├── doctors/page.tsx          ← Doctors page
│   ├── gallery/page.tsx          ← Gallery (coming soon)
│   ├── appointments/page.tsx     ← Appointment booking form
│   ├── contact/page.tsx          ← Contact form + info
│   ├── privacy-policy/page.tsx   ← Privacy policy (pending legal review)
│   ├── api/appointments/         ← POST /api/appointments
│   ├── api/contact/              ← POST /api/contact
│   ├── layout.tsx                ← Root layout (Header + Footer)
│   ├── globals.css               ← Tailwind + global styles
│   └── not-found.tsx             ← Custom 404
├── components/
│   ├── Header.tsx                ← Responsive sticky header
│   ├── Footer.tsx                ← Footer
│   └── ui/                       ← Reusable UI components (Button, Badge, etc.)
├── lib/
│   ├── utils.ts                  ← cn() utility
│   └── data/
│       ├── departments.ts        ← Static department data (10 depts)
│       └── doctors.ts            ← Static doctor data (5 doctors, pending confirmation)
├── prisma/
│   ├── schema.prisma             ← Full database schema
│   └── seed.ts                   ← Seed script
├── types/
│   └── index.ts                  ← Shared TypeScript types
├── .env.example                  ← Environment variable template (no secrets)
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Content Rules (IMPORTANT)

> These rules come from the blueprint (`rajendra-hospital-new-website-blueprint.md`).

1. **Never invent** doctor qualifications, experience, certifications, statistics, or contact details.
2. All doctor details are `[CLIENT CONFIRMATION REQUIRED]` — they are seeded as **DRAFT** in the database.
3. **Pathology** department is `DRAFT` until the content mismatch (Anaesthesia content on Pathology page in old site) is resolved by the client.
4. **Gallery** is empty — verified empty on the old site. Do not add placeholder/stock images.
5. The appointment form submission creates a **PENDING** record — it never auto-confirms.
6. Contact details (phone, email) need client approval before going live.

---

## Deployment

### Phase 1: Local Development
- Run `npm run dev` locally.
- Use Prisma Studio (`npm run db:studio`) to manage content.

### Phase 2: Vercel + Neon (Dev Preview)
- Push code to GitHub.
- Connect repo to Vercel.
- Add all `.env.local` vars to Vercel environment settings.
- Vercel auto-deploys on push. **Hobby tier is for development only — not production.**

### Phase 3: Railway (Production)
- Create a Railway project.
- Add Next.js + Postgres services.
- Migrate DB: `pg_dump neon-url > backup.sql && psql railway-url < backup.sql`
- Update `DATABASE_URL` to Railway Postgres.
- Set all env vars in Railway settings.

See `rajendra-hospital-new-website-blueprint.md` Section 30 for full deployment details.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push Prisma schema to DB |
| `npm run db:migrate` | Run Prisma migrations |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:seed` | Seed initial data |
| `npm run db:generate` | Regenerate Prisma client |

---

## Security Checklist (Before Launch)

Run the 5 security audit prompts from blueprint Section 38 before going live:

1. Secret Leak Prevention
2. Personal Data Flow Audit
3. Pre-Deploy Production Audit
4. Deep Security Audit for Complex Logic
5. Attacker's Perspective Review

---

## Work Log

See `work.md` in the `ANTIGAME/` folder for session-by-session progress tracking.
