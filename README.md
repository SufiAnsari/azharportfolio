# Azhar Hakim - Portfolio

Modern, responsive portfolio website for Azhar Hakim - IT Analyst & Software Developer.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, React 19, TypeScript
- **Stunning UI**: Dark neon theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: Skip navigation, semantic HTML, ARIA labels
- **Optimized**: Image optimization, font loading, performance tuning

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/azhar-portfolio.git
cd azhar-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── profile.png      # Profile photo
│   └── resume.pdf       # Downloadable resume
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles & design tokens
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, About, Skills, Experience, Contact
│   │   ├── providers/   # Theme provider
│   │   └── ui/          # Container, Section primitives
│   └── lib/             # Utilities (env validation)
└── package.json
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

### Netlify (Recommended)

The project includes `netlify.toml` for automatic configuration.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

**Manual deployment:**
```bash
npx netlify-cli deploy --prod
```

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Vercel
- AWS Amplify
- Railway

## 📄 License

© Azhar Hakim
