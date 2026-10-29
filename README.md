# 🎵 JK Music Academy

A modern, visually stunning web application for a music school built with Next.js, TypeScript, and Aceternity UI. This project features interactive animations, 3D card effects, and a fully responsive design to showcase music courses, professional instructors, and student testimonials.

## ✨ Features

- **Immersive Animations:** Utilizes Framer Motion and Aceternity UI for smooth, eye-catching effects (Spotlights, Wavy Backgrounds, Infinite Moving Cards, Sticky Scroll, Background Beams).
- **Course Catalog (`/courses`):** Browse available music courses rendered dynamically using 3D hover-effect cards.
- **Instructors & Webinars:** Engaging UI to showcase faculty with animated tooltips and upcoming webinars with hover-reveal cards.
- **Interactive Contact Page (`/contact`):** A beautiful contact form featuring deep-space meteor effects and dynamic background beams.
- **Modern Tech Stack:** Built on Next.js App Router, React 19, and Tailwind CSS v4.
- **Dark Theme:** Beautifully crafted dark-mode-first interface out of the box.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Aceternity UI](https://ui.aceternity.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://motion.dev/) & `tw-animate-css`

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js installed on your machine (v18.17.0 or higher is recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/jk-music-academy.git
   cd jk-music-academy
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router pages (Home, Courses, Contact)
│   │   ├── globals.css      # Global Tailwind and Shadcn CSS variables
│   │   ├── layout.tsx       # Root layout containing the Navbar
│   │   └── page.tsx         # Main landing page
│   ├── components/          # Reusable UI sections (Hero, Footer, Instructors)
│   │   └── ui/              # Base Aceternity/Framer Motion animated components
│   ├── data/                # JSON data for rendering courses
│   ├── lib/                 # Utility functions (e.g., class merging)
│   └── utils/               # Additional utilities
├── public/                  # Static assets (images, icons)
├── tailwind.config.ts       # Tailwind CSS configuration and custom plugins
└── next.config.ts           # Next.js configuration
```

## 📝 Available Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the app for production.
- `npm run start` - Starts the production server.
- `npm run lint` - Runs ESLint to check for code issues.

## 💡 Customization

- **Courses:** You can easily add, remove, or modify courses by editing the `src/data/music_courses.json` file.
- **Colors:** The dark-mode primary colors are defined in `src/app/globals.css`. You can tweak the `oklch` values to match your specific branding.

This project is built for educational and portfolio purposes. Feel free to use it and modify it for your own needs!
