# Therapist Website

This is a [Next.js](https://nextjs.org) project for Dr. Serena Blake, built by Gupi Debnath. It provides a modern, responsive therapist website with sections for services, testimonials, FAQs, and contact information.

## Project Structure

```
therapist-website/
├── app/
│   ├── components/        # React components (About, Contact, FAQ, Footer, Hero, Navbar, Services, Testimonial)
│   ├── data/              # Data files for services, site content, etc.
│   ├── services/          # Service logic (if any)
│   ├── favicon.ico
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── public/
│   ├── logo.jpg
│   └── images/            # Public images
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── .next/                 # Next.js build output (auto-generated)
└── types/                 # Type definitions (if any)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying [`app/page.js`](app/page.js). The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
