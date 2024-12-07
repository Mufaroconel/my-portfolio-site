import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const experiences = [
    {
      role: "Self-Taught Developer",
      type: "Personal Growth",
      duration: "2022 - Present",
      description: "Mastering full-stack development through hands-on projects and continuous learning.",
      skills: ["React", "Node.js", "Python", "Django"],
      highlights: [
        "Built responsive web applications using modern frameworks",
        "Developed RESTful APIs and backend services",
        "Implemented database solutions using SQL and NoSQL",
        "Practiced clean code and software design patterns"
      ]
    },
    {
      role: "Freelance Developer",
      type: "Independent Work",
      duration: "2023 - Present",
      description: "Creating custom solutions for clients while building real-world experience.",
      skills: ["Web Development", "UI/UX", "API Integration", "Database Design"],
      highlights: [
        "Delivered custom websites for local businesses",
        "Collaborated with clients to meet project requirements",
        "Managed project timelines and deliverables",
        "Provided technical support and maintenance"
      ]
    },
    {
      role: "Open Source Contributor",
      type: "Community Involvement",
      duration: "2023 - Present",
      description: "Contributing to open-source projects and learning from the developer community.",
      skills: ["Git", "Collaboration", "Code Review", "Documentation"],
      highlights: [
        "Contributed to various open-source projects",
        "Participated in code reviews and discussions",
        "Improved documentation and fixed bugs",
        "Learned from experienced developers"
      ]
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "back.out(1.7)"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id="experience" 
      className="py-20 px-8 min-h-screen relative overflow-hidden bg-gradient-to-b from-dark-secondary to-dark-primary"
    >
      {/* Background particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 bg-accent/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s linear infinite`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-6xl font-bold text-white mb-4 [text-shadow:_0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Journey So Far
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A self-driven path of continuous learning and practical experience in software development.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                            hover:border-accent/30 transition-all duration-500 shadow-xl hover:shadow-accent/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-white/70 mt-1">{exp.type}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-4 py-1 bg-accent/20 rounded-full text-accent text-sm">
                    {exp.duration}
                  </span>
                </div>

                <p className="text-white/80 mb-6">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start space-x-2 text-white/70">
                        <span className="text-accent">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90
                               hover:bg-accent/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;