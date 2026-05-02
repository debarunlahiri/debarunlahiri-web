'use client'

const Projects = () => {
  const projects = [
    {
      name: 'Warehouse Floor Map',
      description: 'Built an interactive warehouse visualization system to track pallet locations, bin details, quantity, and aging status with dynamic color coding.',
      techStack: ['Angular', 'Java', 'Spring', 'Oracle SQL']
    },
    {
      name: 'Vani AI - Speech To Text',
      description: 'Built an offline speech-to-text mobile app where users can speak into the device. Handled audio processing in Python with automatic language detection and translation support. Developed supporting APIs and a web interface to access recordings and translations locally.',
      techStack: ['Kotlin', 'Android', 'Python', 'Node.js', 'JavaScript']
    },
    {
      name: 'OTR - Operator Training Records',
      description: 'Worked on designing and developing an Android application to manage operator training records and compliance. Focused on improving usability based on user feedback.',
      techStack: ['Java', 'Android', 'Kotlin', 'Spring Boot', 'Angular']
    },
    {
      name: 'Chat Bot',
      description: 'Developed a chatbot with NLP capabilities to handle user queries and provide automated responses. Improved conversational flow through testing and feedback.',
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
      description: 'Worked with a team to build a Learning Management System for managing training and skills. Contributed to features like course management, assessments, and tracking progress.',
      techStack: ['Spring Boot', 'Java', 'Oracle SQL', 'Angular', 'RxJS', 'Microservices', 'AWS', 'Kafka']
    },
    {
      name: 'HireMe Driver & Rider',
      description: 'Developed a cab booking application for riders and drivers. Worked on backend APIs and real-time features.',
      techStack: ['Java', 'Kotlin', 'Android', 'Firebase', 'Google Maps API', 'iOS', 'React Native', 'WebSockets']
    },
    {
      name: 'TraqPayments',
      description: 'Built a payment and collection system with customer communication features. Worked on backend APIs and web portal for managing transactions.',
      techStack: ['Java', 'Android', 'Kotlin', 'Angular', 'Spring Boot', 'iOS', 'React Native', 'MySQL']
    },
    {
      name: 'PictureTime & Filamchi',
      description: 'Worked on development and maintenance of mobile applications with focus on performance and backend improvements.',
      techStack: ['React Native', 'Java', 'Firebase', 'Microservices', 'Spring Boot', 'iOS']
    },
    {
      name: 'Masala Dish (Customer, Driver & Restaurant Manager)',
      description: 'Developed a food delivery application supporting customers, drivers, and restaurant managers. Worked on backend APIs and web portal.',
      techStack: ['Kotlin', 'Microservices', 'Android', 'iOS', 'React Native', 'Spring Boot']
    },
    {
      name: 'OnDemand Services',
      description: 'Built an on-demand services application with real-time communication between users and service providers. Worked on backend APIs and web portal.',
      techStack: ['Java', 'Kotlin', 'Firebase', 'WebSockets', 'Angular', 'Android', 'iOS', 'React Native', 'Spring Boot']
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
