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
- **Visitor Insights** - Logs page path, IP (when available), referrer, user agent, and coarse location for each visit in Supabase
- **Link Click Tracking** - Captures clicks on primary contact links (email, GitHub, phone, resume actions) for engagement analytics
- **YouTube Spotlight** - Displays the latest popular videos from the Debarun Lahiri YouTube channel with a horizontal scroll gallery

### Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://anzmatyxvjkguzzguwep.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
YOUTUBE_API_KEY=your_youtube_data_api_key
YOUTUBE_CHANNEL_ID=optional_channel_id
YOUTUBE_CHANNEL_HANDLE=DebarunLahiri

> ⚠️ **Security notice:** Never commit actual Supabase keys (especially the service role key) to source control. Store sensitive values only in `.env.local`, your deployment environment variables, or a secure secret manager.
```

### Supabase Setup

1. Create a table `page_views` with at least the following columns:
   - `id` (uuid) default `uuid_generate_v4()`
   - `created_at` (timestamp) default `now()`
   - `path` (text)
   - `ip_address` (text, nullable)
   - `user_agent` (text, nullable)
   - `referer` (text, nullable)
   - `country` (text, nullable)
   - `region` (text, nullable)
   - `city` (text, nullable)
2. Create a table `link_clicks` with columns:
   - `id` (uuid) default `uuid_generate_v4()`
   - `created_at` (timestamp) default `now()`
   - `path` (text)
   - `href` (text, nullable)
   - `label` (text, nullable)
   - `ip_address` (text, nullable)
   - `user_agent` (text, nullable)
   - `referer` (text, nullable)
   - `country` (text, nullable)
   - `region` (text, nullable)
   - `city` (text, nullable)
3. Deploy the project or run locally with the environment variables above.
4. Each page load sends a POST request to `/api/analytics/page-view`, inserting metadata into `page_views`.
5. Each monitored link click sends a POST request to `/api/analytics/link-click`, inserting metadata into `link_clicks`.
6. Configure YouTube Data API access:
   - Create a project in Google Cloud Console and enable the **YouTube Data API v3**.
   - Generate an API key and set it as `YOUTUBE_API_KEY`.
   - (Optional) Set `YOUTUBE_CHANNEL_ID`; if omitted, the app will resolve it using `YOUTUBE_CHANNEL_HANDLE`.
7. (Optional) Add indexes on `created_at`, `path`, or `href` for faster querying when the dataset grows.

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
│   ├── YouTubeGallery.tsx    # Popular videos gallery from YouTube channel
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

