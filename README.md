
---

Portfolio Backend API

Node.js + Express backend for portfolio website using Supabase (PostgreSQL).

Tech Stack

Node.js

Express

Supabase (PostgreSQL)

JWT Authentication

Multer (file upload)


Core Features

Admin authentication (JWT)

Portfolio CRUD (Profile, Skills, Projects, Education, Services, Certificates)

Contact form API

File upload (images, resume)

Supabase Realtime support (live updates)


Prerequisites

Node.js (v14+)

Supabase account


Environment Variables

Create .env file:

SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_KEY=your_service_role_key
JWT_SECRET=your_jwt_secret
PASSWORD_RESET_SECRET=your_secret
PORT=5000

Install & Run

npm install
npm run dev

Server runs on:

http://localhost:5000

Database Setup

Create project in Supabase

Run supabase_schema.sql in Supabase SQL Editor

Tables: profiles, skills, projects, education, services, certificates, contacts, admins


Enable Supabase Realtime (Optional)

ALTER PUBLICATION supabase_realtime ADD TABLE profiles;
ALTER PUBLICATION supabase_realtime ADD TABLE skills;
ALTER PUBLICATION supabase_realtime ADD TABLE projects;
ALTER PUBLICATION supabase_realtime ADD TABLE education;
ALTER PUBLICATION supabase_realtime ADD TABLE services;
ALTER PUBLICATION supabase_realtime ADD TABLE certificates;
ALTER PUBLICATION supabase_realtime ADD TABLE contacts;

Project Structure

backend/
├── config/
├── middleware/
├── routes/
├── uploads/
├── server.js
├── package.json
├── supabase_schema.sql
└── .env.example

Important API Routes

Auth

POST /api/auth/register

POST /api/auth/login


Profile

GET /api/profile

PUT /api/profile


Projects / Skills / Education / Services / Certificates

Standard CRUD APIs


Contact

POST /api/contact

GET /api/contact (admin)


Deployment

Works on Render / Railway / Vercel

Build: npm install

Start: npm start



---

Agar chaho to:

aur bhi short (1-page) bana du

ya sirf recruiter-friendly README version

ya production-only README


Bas bolo 👍
