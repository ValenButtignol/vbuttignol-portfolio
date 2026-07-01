import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Element } from "react-scroll";

import "../styles/experience.css";
import "../index.css";

const experiences = [
  {
    title: "Full-stack Developer",
    company: "ExxonMobil",
    period: "Dec 2025 - Present",
    shortDescription:
      "Building scalable internal applications for enterprise systems.",
    technologies: [
      "C#",
      ".NET Framework",
      "Azure",
      "React",
      "Angular",
      "TypeScript",
      "Node.js",
    ],
    details: [
      "Designing and developing full-stack features.",
      "Implementing REST APIs for internal platforms.",
      "Improving application performance and maintainability.",
      "Working in Agile teams with business stakeholders.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "CityPooling",
    period: "Apr 2024 - Dec 2025",
    shortDescription:
      "Developed new platform features and optimized backend services.",
    technologies: [
      "Dart",
      "Flutter",
      "Google Cloud Platform",
      "Node.js",
    ],
    details: [
      "Developed new product features.",
      "Optimized database queries.",
      "Implemented authentication flows.",
      "Collaborated closely with designers.",
    ],
  },
  {
    title: "IT Support Intern",
    company: "Aceitera General Deheza (AGD)",
    period: "Sep 2023 - Apr 2024",
    shortDescription:
      "Provided IT support and maintained enterprise infrastructure.",
    technologies: [
      "Windows Server",
      "Networking",
      "Active Directory",
    ],
    details: [
      "Provided first and second level support.",
      "Configured hardware and software.",
      "Managed Active Directory users.",
      "Resolved networking incidents.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "National Univerity of Rio Cuarto",
    period: "Feb 2022 - Dec 2024",
    shortDescription:
      "Mentored students and collaborated in course development.",
    technologies: [
      "Python",
      "Flask",
      "SQLite",
      "Java",
      "Oracle",
    ],
    details: [
      "Mentored undergraduate students.",
      "Prepared course material.",
      "Reviewed assignments.",
      "Assisted professors during lectures.",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <Element name="experience">
      <section className="section-wrapper">
        <div className="section-title">
          <h2 className="lb-font bold">Experience</h2>
        </div>

        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`experience-card ${
                openIndex === index ? "active" : ""
              }`}
            >
              <div
                className="experience-header"
                onClick={() => toggleCard(index)}
              >
                <div className="experience-marker" />

                <div className="experience-main">
                  <div className="experience-title-row">
                    <div>
                      <h3 className="lb-font">{exp.title}</h3>
                      <h4 className="smoothpurple-font">{exp.company}</h4>
                    </div>

                    <div className="experience-right">
                      <span className="timeline-period gray-font">
                        {exp.period}
                      </span>

                      <motion.div
                        animate={{
                          rotate: openIndex === index ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>

                  <p className="timeline-description gray-font">
                    {exp.shortDescription}
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="experience-details"
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: "auto",
                    }}
                    exit={{
                      height: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      className="experience-content"
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.22,
                      }}
                    >
                      <div className="tech-stack">
                        {exp.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <ul className="experience-list">
                        {exp.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
}