# Md. Mahfuzur Rahman | Portfolio

A personal portfolio website built with Next.js 16, React, Tailwind CSS, and a custom design system for a full-stack MERN developer profile.

## Overview

This project is a portfolio website for Md. Mahfuzur Rahman, showcasing:

- professional introduction and services
- technology stack and skills
- featured project work
- project case study pages and project listing
- contact page with EmailJS-powered form integration
- downloadable resume

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- @emailjs/browser
- ESLint

## Project Structure

```text
my-portfolio/
├── public/
│   ├── images/
│   ├── resume/
│   └── Profile_photo.png
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── lib/
│   └── types/
├── package.json
├── next.config.ts
└── tailwind.config.ts
```

## Routes

The app uses the Next.js App Router:

- `/` — home page
- `/about` — biography and professional details
- `/projects` — project gallery
- `/projects/[slug]` — individual project detail pages
- `/contact` — contact form and direct contact links

## Features

- Responsive dark portfolio UI
- Project card and project detail data-driven rendering
- Featured project section and project card components
- Contact form with input validation and EmailJS integration
- Metadata and SEO configuration through Next.js metadata exports
- Resume download link

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Live Demo

https://mahfuzrk.vercel.app

## Deployment

The site is ready to deploy to platforms such as Vercel or any platform that supports Next.js.

Update the `BASE_URL` environment variable for your deployed domain before building or deploying.

## License

This project is private and intended for the portfolio owner.
