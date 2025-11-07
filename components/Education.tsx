'use client'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Institute of Management and Studies, Ghaziabad',
      location: 'Ghaziabad, India',
      period: '2016 – 2019'
    },
    {
      degree: 'Class 12th (C.B.S.E. Board)',
      institution: 'D.D.M. Public School',
      location: 'Ghaziabad, India',
      period: '2015'
    },
    {
      degree: 'Class 10th (C.B.S.E. Board)',
      institution: 'D.D.M. Public School',
      location: 'Ghaziabad, India',
      period: '2013'
    }
  ]

  return (
    <section className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100 border-b-2 border-gray-900 dark:border-gray-100 pb-2">
        Education
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="break-inside-avoid">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-0">
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{edu.institution}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{edu.location}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
