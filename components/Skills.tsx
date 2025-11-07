'use client'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'SQL', 'JavaScript', 'Angular']
    },
    {
      title: 'Mobile Development',
      skills: ['Android (Java, Kotlin)', 'Ionic']
    },
    {
      title: 'Backend Development',
      skills: ['Spring Boot', 'RESTful APIs', 'Microservices', 'Kafka']
    },
    {
      title: 'Cloud, Tools & AI',
      skills: ['Firebase', 'ML Kit', 'Google Cloud', 'NLP', 'Jetpack Compose', 'AWS']
    },
    {
      title: 'Databases',
      skills: ['RoomDB', 'MySQL', 'PostgreSQL', 'Oracle SQL']
    },
    {
      title: 'Soft Skills',
      skills: ['Leadership', 'Agile Methodologies', 'Problem Solving']
    }
  ]

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Key Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {skillCategories.map((category) => (
          <div key={category.title} className="mb-2 sm:mb-3">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">{category.title}:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              {category.skills.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

