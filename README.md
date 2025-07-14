# NutriCare Backend

A scalable, TypeScript-based Node.js backend for NutriCare — a nutrition-focused app with user onboarding, medical questionnaires, AI-powered nutrition plans, chat, notifications, and secure authentication.

---

## Features

- **User Authentication:** Email/password sign-up, login, OTP verification, forgot/reset password flows
- **User Onboarding:** Capture profile data and detailed medical/lifestyle questionnaire
- **AI Nutrition Plan:** Generate weekly personalized nutrition plans via OpenAI GPT
- **Blood Test Summary:** Upload blood test report text and get AI-generated human-friendly summaries
- **Chat Module:** Context-aware multi-session chat with GPT-powered nutrition assistant
- **Notifications:** Store user notifications and track read/unread status
- **Email Service:** Send OTP and notifications via configurable SMTP
- **Secure & Scalable:** JWT authentication, clean file structure, and database with Prisma ORM

---

## Tech Stack

- Node.js with Express.js
- TypeScript
- Prisma ORM with PostgreSQL (or your choice of DB)
- OpenAI API (GPT-4)
- Nodemailer for SMTP email
- JWT for authentication
- Cron jobs for scheduled tasks

---

## Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL or compatible DB
- OpenAI API key
- SMTP email credentials

### Installation

1. Clone the repo

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

Create a `.env` file in root with the help of `.env.example`

4. Setup database

```bash
npx prisma migrate dev --name init
```

5. Start development server

```bash
npm run dev
```

---

## Folder Structure

```
src/
├── controllers/         # Route handlers
├── middlewares/         # Auth, error handlers, etc.
├── routes/              # Express route definitions
├── services/            # Business logic and integrations (OpenAI, mailer)
├── prisma/              # Prisma schema & client
├── utils/               # Helpers (OpenAI client, mailer)
├── config/              # Environment config
├── cron/                # Cron job scripts
├── types/               # TypeScript types & interfaces
└── index.ts             # Server entry point
```

---

## Contributing

Feel free to submit issues and PRs! Please maintain consistent TypeScript style and write tests when adding features.

---
