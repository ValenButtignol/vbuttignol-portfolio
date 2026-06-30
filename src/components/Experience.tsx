import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Oracle",
      "Azure",
    ],
    details: [
      "Designed and developed full-stack features.",
      "Implemented REST APIs for internal platforms.",
      "Improved application performance and maintainability.",
      "Worked in Agile teams with business stakeholders.",
    ],
  },
  {
    title: "Full-stack Developer",
    company: "CityPooling",
    period: "Apr 2024 - Dec 2025",
    shortDescription:
      "Developed new platform features and optimized backend services.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
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
    company: "Aceitera General Deheza",
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
    company: "UNRC",
    period: "Feb 2022 - Dec 2024",
    shortDescription:
      "Mentored students and collaborated in course development.",
    technologies: [
      "Java",
      "Algorithms",
      "Data Structures",
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
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-wrapper">

      <div className="section-title">
        <h2 className="lb-font bold">Experience</h2>
      </div>

      <div className="experience-container">

        {experiences.map((exp, index) => (
          <motion.div
            layout
            key={exp.company}
            className={`experience-card ${
              openIndex === index ? "active" : ""
            }`}
            transition={{
              layout: {
                duration: 0.35,
              },
            }}
          >
            <motion.div
              layout
              className="experience-header"
              onClick={() => toggleCard(index)}
            >
              <div className="experience-marker" />

              <div className="experience-main">

                <div className="experience-title-row">

                  <div>

                    <h3 className="lb-font">
                      {exp.title}
                    </h3>

                    <h4 className="smoothpurple-font">
                      {exp.company}
                    </h4>

                  </div>

                  <div className="experience-right">

                    <span className="timeline-period gray-font">
                      {exp.period}
                    </span>

                    <motion.div
                      animate={{
                        rotate:
                          openIndex === index
                            ? 180
                            : 0,
                      }}
                      transition={{
                        duration: 0.25,
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

            </motion.div>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  layout
                  className="experience-details"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="tech-stack"
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1,
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.ul
                    className="experience-list"
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                  >
                    {exp.details.map((detail) => (
                      <li key={detail}>
                        {detail}
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

      </div>

    </section>
  );
}