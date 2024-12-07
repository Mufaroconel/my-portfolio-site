import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const projects = [
    {
      title: "AI Chatbot",
      description: "Developed an intelligent chatbot using Natural Language Processing and deep learning techniques. Implemented using Python, TensorFlow, and Flask.",
      tags: ["Python", "NLP", "TensorFlow", "Flask"],
      status: "In Progress",
      link: "#"
    },
    {
      title: "Data Pipeline",
      description: "Built a robust ETL pipeline for processing and analyzing large datasets. Utilized Apache Airflow for workflow management.",
      tags: ["Python", "Apache Airflow", "PostgreSQL", "Docker"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Web Scraper",
      description: "Created an automated web scraping tool for collecting and analyzing data from multiple sources. Features include scheduling and data validation.",
      tags: ["Python", "BeautifulSoup", "Selenium", "MongoDB"],
      status: "Completed",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a modern portfolio website using React and Tailwind CSS. Implemented smooth animations and responsive design.",
      tags: ["React", "Tailwind CSS", "GSAP", "Framer Motion"],
      status: "Active",
      link: "#"
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

    // Title animation
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
      id="projects" 
      className="py-20 px-8 min-h-screen relative overflow-hidden bg-gradient-to-b from-dark-primary to-dark-secondary"
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-6xl font-bold text-white mb-4 [text-shadow:_0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Exploring innovation through code. Here are some of my recent projects and experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a 
                href={project.link}
                className="block p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                         hover:border-accent/30 transition-all duration-500 transform hover:-translate-y-2
                         shadow-xl hover:shadow-accent/20"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Completed" ? "bg-green-500/20 text-green-300" :
                    project.status === "In Progress" ? "bg-yellow-500/20 text-yellow-300" :
                    "bg-blue-500/20 text-blue-300"
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-white/70 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/90
                               hover:bg-accent/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </motion.div>
          ))}
          
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 
                     bg-gradient-to-r from-accent to-blue-600
                     hover:from-blue-600 hover:to-accent
                     text-white font-bold rounded-xl
                     shadow-lg shadow-accent/25 hover:shadow-accent/40
                     transition-all duration-300 transform"
          >
            <span>View All Projects</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 animate-pulse" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6" 
              />
            </svg>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-white/60"
          >
            Showing 4 of 12 projects
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}