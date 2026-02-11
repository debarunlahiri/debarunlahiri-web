'use client'

const Projects = () => {
  const projects = [
    {
      name: 'Vani AI - Speech To Text',
      description: 'Vani AI is an offline speech-to-text mobile app where users speak into the device. Python handles audio processing with automatic language detection using the Whisper model, then generates text and translations to English, Hindi, and Korean via ArgosTranslate. Node.js serves as a proxy for API calls, while a separate Python API focuses on audio and translation. The Node.js website allows viewing, playing recordings, and accessing translations—all processed locally without internet. (Tech Stack: Kotlin, Android, Python, NodeJs, Javascript)',
      techStack: ['Kotlin', 'Android', 'Python', 'NodeJs', 'Javascript']
    },
    {
      name: 'OTR - Operator Training Records',
      description: 'Led the design, development, and deployment of an Android application for Operator Training Records (OTR), aimed at providing operators with convenient access to their training records and compliance status. Enhanced usability based on user feedback, leading to increased user engagement.',
      techStack: ['Java', 'Kotlin', 'Spring Boot', 'Angular']
    },
    {
      name: 'Chat Bot',
      description: 'Designed conversational flows and integrated NLP models to enable the ChatBot to understand and respond to user inquiries effectively. Conducted A/B testing and collected user feedback to iterate on ChatBot features, resulting in a 40% reduction in customer response times and improved customer satisfaction scores.',
      techStack: ['Java', 'Android', 'Kotlin', 'NLP', 'Spring Boot', 'Oracle SQL']
    },
    {
      name: 'Motion Tracking',
      description: 'Developed an application to track the motion of objects/equipment on the production line and generate related graphs for analysis purposes. The results can be tracked through a mobile app or a Monitoring Portal for real-time insights.',
      techStack: ['Java', 'Android', 'Firebase', 'OpenCV', 'Spring Boot']
    },
    {
      name: 'e-VIS (Violation Information System)',
      description: 'Developed an Android application for the Manufacturing Department to manage violations committed by operators at the production line. Successfully implemented a record of violations within the system, allowing efficient tracking, reporting, and management of violations in multiple locations or departments.',
      techStack: ['Kotlin', 'Java', 'Spring MVC', 'Node.js', 'Oracle SQL']
    },
    {
      name: 'LMS - Learning Management System',
      description: 'Collaborated in a team of 7 developers to design, develop, and deploy a Learning Management System (LMS) for managing skills and training for Persons in Charge (PICs) and departments. Using technologies like Spring MVC to create interactive interfaces for course enrollment, content delivery, assessments, and progress tracking.',
      techStack: ['Spring Boot', 'Java', 'Oracle SQL', 'Angular', 'RxJS', 'Microservices', 'AWS', 'GCP', 'Kafka']
    },
    {
      name: 'HireMe Driver & Rider',
      description: 'Developed a cab booking app where users can book cabs and reach their destinations. Provided a platform for both riders and drivers to manage bookings. Worked on Backend for RestAPI.',
      techStack: ['Java', 'Kotlin', 'Android', 'Firebase', 'Google Maps API', 'WebSockets']
    },
    {
      name: 'TraqPayments',
      description: 'Built a payment and collection management system, with multi-channel communication tools for customers and optimized backend operations. Provided an Android app for customer access. Worked on Backend for RestAPI and web portal for managing payments.',
      techStack: ['Java', 'Android', 'Kotlin', 'Angular', 'Spring Boot', 'MySQL']
    },
    {
      name: 'PictureTime & Filamchi',
      description: 'Developed and maintained the PictureTime and Filamchi apps. Focused on mobile development and implemented back-end optimizations to improve response times and system reliability.',
      techStack: ['Java', 'Firebase', 'Microservices', 'Spring Boot']
    },
    {
      name: 'Masala Dish (Customer, Driver & Restaurant Manager)',
      description: 'Spearheaded the development of the Masala Dish Android application, providing a platform for customers, drivers, and restaurant managers in the food delivery ecosystem. Improved app performance with faster load times and smoother navigation. Worked on Backend for RestAPI and web portal.',
      techStack: ['Kotlin', 'Microservices', 'Spring Boot']
    },
    {
      name: 'OnDemand Services',
      description: 'Led the development of an On-Demand Services Android application, offering services to customers. Integrated real-time communication between customers and service providers to improve service delivery. Worked on Backend for RestAPI and web portal.',
      techStack: ['Java', 'Kotlin', 'Firebase', 'WebSockets', 'Angular', 'Spring Boot']
    }
  ]

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Projects
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {projects.map((project) => (
          <div key={project.name} className="mb-3 sm:mb-4 break-inside-avoid">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-2 leading-relaxed">
              {project.description}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs">
              <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
