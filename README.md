# Debarun Lahiri - Portfolio

A modern, responsive portfolio website showcasing my professional experience, projects, and skills as a Senior Software Engineer.

## Live Demo

Visit the live portfolio: **[https://debarunlahiri-web.vercel.app/](https://debarunlahiri-web.vercel.app/)**

## Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Resume Sections**
  - Professional summary and contact information
  - Key technical skills organized by category
  - Detailed work experience timeline
  - Project portfolio with descriptions
  - Educational background
  - Personal GitHub projects with live cards
- **Resume Download** - Download PDF resume or save page as PDF
- **Print-Friendly** - Optimized CSS for printing/PDF generation
- **GitHub Integration** - Dynamic project cards with repository information
- **Modern UI/UX** - Clean, professional design with smooth transitions

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Sections

1. **Hero** - Name, title, contact information, and resume download buttons
2. **Skills** - Programming languages, frameworks, tools, and soft skills
3. **Experience** - 5+ years of professional experience across multiple companies
4. **Projects** - 10+ professional projects with detailed descriptions
5. **Education** - Academic qualifications and certifications
6. **Personal Projects** - GitHub repository cards with live demos
7. **Contact** - Multiple contact methods and social links

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/debarunlahiri/debarunlahiri-web.git
cd debarunlahiri-web
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
debarunlahiri-web/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with theme provider
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── Hero.tsx              # Header with name and download buttons
│   ├── Skills.tsx            # Skills section
│   ├── Experience.tsx        # Work experience timeline
│   ├── Projects.tsx          # Professional projects
│   ├── Education.tsx         # Educational background
│   ├── GitHubProjects.tsx    # Personal GitHub projects
│   ├── Contact.tsx           # Contact information
│   └── ThemeToggle.tsx       # Dark/Light mode toggle
├── contexts/
│   └── ThemeContext.tsx      # Theme context provider
├── public/
│   └── Debarun_Lahiri_Resume.pdf  # Resume PDF file
└── package.json
```

## Adding Your Resume PDF

To enable the resume download feature:

1. Save your resume as `Debarun_Lahiri_Resume.pdf`
2. Place it in the `/public` folder
3. The download button will work automatically

## Deployment

This portfolio is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy (no environment variables needed)

## Key Highlights

- **Senior Assistant Engineer** at Samsung Display Noida (Dec 2022 - Present)
- **Tech Lead** for OCR System Development using ML Kit
- **Expert** in Android Development (Java, Kotlin), Spring Boot, and Microservices
- **Full Stack Developer** with experience in Angular, React, and Next.js
- **10+ Professional Projects** including LMS, Chat Bot, Motion Tracking, and more
- **Open Source Contributor** with projects in AI, Image Processing, and Media Tools

## Technologies & Skills

**Programming:** Java, Kotlin, SQL, JavaScript, TypeScript, Angular

**Mobile:** Android (Java, Kotlin), Ionic, Jetpack Compose

**Backend:** Spring Boot, RESTful APIs, Microservices, Kafka, Node.js

**Cloud & AI:** Firebase, ML Kit, Google Cloud, NLP, AWS, GCP

**Databases:** RoomDB, MySQL, PostgreSQL, Oracle SQL

## Contact

- **Email:** [debarunlahiri2016@gmail.com](mailto:debarunlahiri2016@gmail.com)
- **GitHub:** [github.com/debarunlahiri](https://github.com/debarunlahiri)
- **Phone:** +91-9205225428

## License

This portfolio is personal and proprietary. All rights reserved.

---

Built with Next.js and deployed on Vercel

