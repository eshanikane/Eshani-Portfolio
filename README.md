# Eshani Kane — Portfolio

A clean, modern, frontend-only personal portfolio website showcasing AI & Data Science background, experience, and skills. Built for engineering internships, AI/Data Science roles, cybersecurity teams, and motorsport recruiters.

## Tech Stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Backend:** None (static site)
- **Deployment:** Vercel or GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Sticky, translucent navigation
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # Profile summary & languages
│   ├── Section.jsx     # Reusable section wrapper
│   ├── Skills.jsx      # Technical & programming skills
│   ├── Experience.jsx  # Work & internship history
│   ├── Education.jsx   # Academic background
│   ├── CoCurriculars.jsx # Activities & hobbies
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Site footer
├── data/
│   └── portfolioData.js  # Verified CV data (single source of truth)
├── App.jsx
├── main.jsx
└── index.css
```

## Local Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deployment

### Vercel (Recommended)

1. Push the project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Import the repository and deploy. Vercel auto-detects Vite.

### GitHub Pages

1. In `vite.config.js`, set `base: '/your-repo-name/'` (e.g. `base: '/eshani-portfolio/'`).
2. Install the gh-pages package: `npm install -D gh-pages`
3. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy`
5. In GitHub repo Settings → Pages, set source to the `gh-pages` branch.

## Live Demo

*Add your live URL here after deployment.*

## License

Private portfolio. All rights reserved.
