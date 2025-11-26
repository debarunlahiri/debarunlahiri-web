/* eslint-disable @next/next/no-img-element */
'use client'

interface ClientProject {
  name: string
  url: string
  description: string
  technologies: string[]
  role: string
  preview: string
}

const projects: ClientProject[] = [
  {
    name: 'LitConnect Agent Portal',
    url: 'https://agent.litconnect.net/',
    description:
      'An intelligent productivity suite for insurance agents featuring lead management, task automation, and real-time analytics delivered as a responsive Flutter web application.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
    role: 'Lead Flutter Engineer',
    preview:
      'https://api.microlink.io/?url=https://agent.litconnect.net/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1280&viewport.height=720'
  },
  {
    name: 'Kamkus College of Law',
    url: 'https://kamkus.org/',
    description:
      'CMS-driven website highlighting programs, admissions, and campus life for Kamkus College of Law with multilingual content and dynamic news publishing.',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'cPanel'],
    role: 'Full-Stack Developer',
    preview:
      'https://api.microlink.io/?url=https://kamkus.org/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1280&viewport.height=720'
  },
  {
    name: 'Kamkus Mobile App',
    url: 'https://play.google.com/store/apps/details?id=com.kamkuscollegeoflaw.android&hl=en_IN',
    description:
      'Cross-platform companion app for Kamkus College of Law providing student resources, notifications, and access to institutional services built with React Native.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Firebase'],
    role: 'Mobile App Developer',
    preview:
      'https://api.microlink.io/?url=https://play.google.com/store/apps/details?id=com.kamkuscollegeoflaw.android&hl=en_IN&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1280&viewport.height=720'
  },
  {
    name: 'Ashoka Rescue',
    url: 'https://ashokarescue.com/',
    description:
      'High-conversion marketing site for global air ambulance services with SEO-optimized content, lead capture workflows, and multilingual support built on WordPress.',
    technologies: ['WordPress', 'PHP', 'Elementor', 'Yoast SEO'],
    role: 'WordPress Specialist',
    preview:
      'https://api.microlink.io/?url=https://ashokarescue.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1280&viewport.height=720'
  },
  {
    name: 'SR Turbo Energy',
    url: 'https://www.srturboenergy.com/',
    description:
      'Corporate website for a power and energy services company with product catalogues, case studies, and contact automation built with modern React tooling.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    role: 'Frontend Architect',
    preview:
      'https://api.microlink.io/?url=https://www.srturboenergy.com/&screenshot=true&meta=false&embed=screenshot.url&colorScheme=dark&viewport.width=1280&viewport.height=720'
  }
]

const ClientProjects = () => {
  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Client Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="relative h-40 sm:h-44 bg-gray-100 dark:bg-gray-900/60">
              <img
                src={project.preview}
                alt={`Preview of ${project.name}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 leading-snug">
                  {project.name}
                </h3>
                <span className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {project.role}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ClientProjects
