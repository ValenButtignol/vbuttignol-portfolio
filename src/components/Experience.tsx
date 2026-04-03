import '../styles/experience.css';
import '../index.css'

const Experience = () => {
  const experiences = [
    {
      title: "Full-stack Developer",
      period: "Dec 2025 - Present",
      company: "ExxonMobil",
      description: "Building scalable web applications with modern tech stack"
    },
    {
      title: "Full-stack Developer",
      period: "Apr 2024 - Dec 2025",
      company: "CityPooling",
      description: "Developed carpooling platform features and optimized backend performance"
    },
    {
      title: "IT Support Intern",
      period: "Sep 2023 - Apr 2024",
      company: "Aceitera General Deheza",
      description: "Provided technical support and managed IT infrastructure"
    },
    {
      title: "Teaching Assistant",
      period: "Feb 2022 - Dec 2024",
      company: "Universidad Nacional de Río Cuarto (UNRC)",
      description: "Mentored students and assisted with course development"
    }
  ];

  return (
    <section className='section-wrapper'>
      <div className='section-title'>
        <h2 className='lb-font bold'>Experience</h2>
      </div>
      <div className='experience-container'>
        <div className='timeline'>
          {experiences.map((exp, index) => (
            <div key={index} className='timeline-item'>
              <div className='timeline-dot'></div>
              <div className='timeline-content'>
                <div className='timeline-header'>
                  <h3 className='lb-font'>{exp.title}</h3>
                  <span className='timeline-period gray-font'>{exp.period}</span>
                </div>
                <h4 className='timeline-company smoothpurple-font'>{exp.company}</h4>
                <p className='timeline-description gray-font'>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;