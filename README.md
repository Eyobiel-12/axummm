# Axum Restaurant 🇪🇹

An upscale, modern web application for **Axum — Ethiopian Fine Dining** in Amsterdam, celebrating the heritage and culinary traditions of the ancient Aksumite kingdom.

## Features

- **Refined Aesthetics**: Deep espresso and Aksumite gold design palette with smooth typography and responsive layouts.
- **Interactive Menu**: Categorized menu with dietary filters (Vegan, Vegetarian, Spicy, Signature) and live search.
- **Reservation System**: Direct table booking powered by **EmailJS** sending reservation alerts directly to the restaurant team.
- **About & Heritage**: The story of Axum, traditional coffee ceremony showcase, and visitor details.
- **SEO & Structured Data**: Built-in JSON-LD restaurant schema, OpenGraph metadata, and accessibility-first markup.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: TypeScript & React 19
- **Styling**: Tailwind CSS v4 & PostCSS
- **Components**: Radix UI / Shadcn primitives & Lucide Icons
- **Email Service**: EmailJS

## Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/Eyobiel-12/axummm.git
cd axummm
pnpm install
```

### 2. Environment Variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Run Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
pnpm build
pnpm start
```
