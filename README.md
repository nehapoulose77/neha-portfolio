# Neha Poulose K — Personal Portfolio Website

A modern, premium, professional, and fully responsive personal portfolio website built with **React.js**, **Vite**, **Framer Motion**, and **Lucide React** for **Neha Poulose K**, a Bachelor of Technology graduate in Information Technology from Rajagiri School of Engineering & Technology (Autonomous), Kochi.

Designed specifically to appeal to recruiters and engineering managers for roles such as **Junior QA Engineer**, **Software Tester**, **QA Automation Engineer**, **Junior Developer**, and **Information Technology Graduate**.

---

## 🎨 Design & Colour Palette

- **Dark Navy Background**: `#070B14`, `#0B0F19`, `#0F172A`
- **Deep Purple & Violet Gradients**: `#3B0764`, `#4C1D95`, `#7C3AED`, `#A78BFA`
- **Yellow Accent Details**: `#FACC15`, `#FDE047`, `#EAB308`
- **Typography**: `Outfit` (headings), `Plus Jakarta Sans` (body), `JetBrains Mono` (badges/code)
- **Glassmorphism Panels**: Frosted glass panels with subtle borders, glowing active tabs, and responsive grid layouts.

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── assets/
│   │   ├── Neha-Poulose-K-Resume.pdf    # Uploaded verified resume PDF
│   │   └── neha-profile.png             # Uploaded professional photograph
│   └── favicon.svg                      # Custom glowing yellow 'N' brand icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                   # Sticky navbar, active scrollspy, mobile drawer
│   │   ├── Hero.jsx                     # Hero section with portrait, glowing effects & CTAs
│   │   ├── About.jsx                    # Verified About Me intro, pillars, languages, interests
│   │   ├── Experience.jsx               # Interactive timeline cards for QA & ML internships
│   │   ├── Education.jsx                # Rajagiri B.Tech, St. Vincent 12th, CMI 10th
│   │   ├── Projects.jsx                 # HIRE AI, Calorease, Heart Disease Prediction
│   │   ├── Skills.jsx                   # Categorized skills (Programming, Web, Testing, Tools)
│   │   ├── Achievements.jsx             # Filterable milestones, AI Fellowship, IC3SIS 2026 paper
│   │   ├── Extracurricular.jsx          # Confluence 2.0 volunteer, Smart Hackathon participant
│   │   ├── ResumeSection.jsx            # Prominent Download My Resume button & in-browser preview
│   │   ├── Contact.jsx                  # Email, phone, LinkedIn, GitHub with 1-click copy & form
│   │   ├── Footer.jsx                   # Designed & Developed by Neha Poulose K & smooth Back to Top
│   │   ├── ScrollToTop.jsx              # Floating back-to-top button
│   │   └── SectionHeading.jsx           # Reusable animated section heading
│   ├── data/
│   │   └── portfolioData.js             # Centralized configuration & verified resume data
│   ├── styles.css                       # Complete CSS design system with custom properties
│   ├── App.jsx                          # Main application layout
│   └── main.jsx                         # React 18 DOM mount point
├── index.html                           # SEO meta tags, Google Fonts & viewport config
├── vite.config.js                       # Vite build configuration
└── package.json                         # Scripts & dependency definitions
```

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (version 18 or later recommended; Node 24+ supported)
- npm (version 9 or later)

### Installation
1. Clone or open the repository folder in terminal:
   ```bash
   cd Portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the Vite development server:
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:5173`).

### Production Build
To create an optimized production build:
```bash
npm run build
```
The compiled files will be created in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Updating Personal Information & URLs

All personal details, URLs, and copy are cleanly decoupled in:
📁 `src/data/portfolioData.js`

### 1. Update Contact Information & Links
In `src/data/portfolioData.js`:
```javascript
export const PROFILE = {
  name: "Neha Poulose K",
  email: "nehapoulose77@gmail.com",
  phone: "+91 73566 37602",
  github: "https://github.com/nehapoulose77",
  linkedin: "https://linkedin.com/in/neha-poulose-k",
  ...
};
```

### 2. Configure GitHub-Hosted Resume PDF
By default, the portfolio downloads the local PDF bundled in `public/assets/Neha-Poulose-K-Resume.pdf`.
To host your resume on GitHub:
1. Upload `Neha-Poulose-K-Resume.pdf` to your public GitHub repository.
2. In GitHub, open the uploaded PDF file and click **Raw** (or copy its permalink).
3. Paste the URL into `src/data/portfolioData.js`:
   ```javascript
   resumeGithubUrl: "https://raw.githubusercontent.com/nehapoulose77/YOUR_REPO/main/public/assets/Neha-Poulose-K-Resume.pdf",
   ```
4. Save and redeploy. The "Download My Resume" button will automatically synchronize with your GitHub-hosted file.

---

## 🐙 GitHub Repository Setup & Push

To initialize a new Git repository and push your portfolio to GitHub:

```bash
# 1. Initialize git
git init

# 2. Add all project files
git add .

# 3. Commit changes
git commit -m "Initial commit: Neha Poulose K modern portfolio website"

# 4. Set default branch to main
git branch -M main

# 5. Add remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/nehapoulose77/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

---

## ⚡ Step-by-Step Vercel Deployment

Deploying your Vite React portfolio to Vercel takes less than 2 minutes:

1. **Push your code to GitHub** following the steps above.
2. Visit **[vercel.com](https://vercel.com)** and log in with your GitHub account.
3. On the Vercel dashboard, click **Add New...** → **Project**.
4. Locate your `portfolio` repository from the GitHub list and click **Import**.
5. Configure the build settings (Vercel automatically detects Vite):
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.
7. Vercel will build and assign you a fast, global HTTPS domain (e.g., `https://neha-poulose-portfolio.vercel.app`).
8. Whenever you push new commits to your `main` branch on GitHub, Vercel will automatically trigger a new deployment.

---

## 📄 License & Attribution

Designed & Developed for **Neha Poulose K**.
All personal, academic, and professional experience information verified against uploaded documentation.
