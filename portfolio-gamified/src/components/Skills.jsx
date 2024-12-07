import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const skills = [
    {
      category: "Data Analysis",
      icon: "📊",
      level: 92,
      description: "Advanced data analysis and statistical modeling",
      items: [
        { 
          name: "Pandas", 
          proficiency: "Advanced", 
          details: "Complex data manipulation, time series analysis, and data cleaning" 
        },
        { 
          name: "NumPy", 
          proficiency: "Advanced", 
          details: "Scientific computing and numerical analysis" 
        },
        { 
          name: "SciPy", 
          proficiency: "Advanced", 
          details: "Statistical analysis and scientific computations" 
        }
      ],
      status: "Production Expert"
    },
    {
      category: "Data Visualization",
      icon: "🎨",
      level: 88,
      description: "Creating impactful visual data stories",
      items: [
        { 
          name: "Plotly", 
          proficiency: "Advanced", 
          details: "Interactive and web-based visualizations" 
        },
        { 
          name: "Seaborn", 
          proficiency: "Advanced", 
          details: "Statistical data visualization" 
        },
        { 
          name: "D3.js", 
          proficiency: "Intermediate", 
          details: "Custom web-based data visualizations" 
        }
      ],
      status: "Actively Creating"
    },
    
    {
      category: "Computer Vision",
      icon: "👁️",
      level: 90,
      description: "Developing advanced computer vision and image processing solutions",
      items: [
        { 
          name: "OpenCV", 
          proficiency: "Advanced", 
          details: "Real-time image processing, object tracking, and video analysis" 
        },
        { 
          name: "MediaPipe", 
          proficiency: "Advanced", 
          details: "Face mesh, pose estimation, and gesture recognition" 
        },
        { 
          name: "YOLO", 
          proficiency: "Advanced", 
          details: "Real-time object detection and custom model training" 
        }
      ],
      status: "Production Ready"
    },
    {
      category: "Advanced Analytics",
      icon: "🎯",
      level: 85,
      description: "Predictive analytics and optimization",
      items: [
        { 
          name: "Time Series", 
          proficiency: "Advanced", 
          details: "Forecasting and temporal pattern analysis" 
        },
        { 
          name: "A/B Testing", 
          proficiency: "Advanced", 
          details: "Experiment design and statistical testing" 
        },
        { 
          name: "Optimization", 
          proficiency: "Advanced", 
          details: "Linear programming and optimization models" 
        }
      ],
      status: "Production Ready"
    },
    {
      category: "AI & Language Models",
      icon: "🧠",
      level: 90,
      description: "Developing advanced NLP solutions and LLM applications",
      items: [
        { 
          name: "LangChain", 
          proficiency: "Advanced", 
          details: "Building AI agents, RAG systems, and custom LLM chains" 
        },
        { 
          name: "OpenAI API", 
          proficiency: "Advanced", 
          details: "GPT-4 integration, fine-tuning, and prompt engineering" 
        },
        { 
          name: "Hugging Face", 
          proficiency: "Advanced", 
          details: "Transformer models, BERT, T5, and custom model deployment" 
        }
      ],
      status: "Actively Developing"
    },
    { 
      category: "AI/ML", 
      icon: "�",
      level: 90, 
      description: "Building intelligent systems and machine learning models",
      items: [
        { name: "TensorFlow", proficiency: "Advanced", details: "Deep Learning & Neural Networks" },
        { name: "PyTorch", proficiency: "Intermediate", details: "Computer Vision & NLP" },
        { name: "Scikit-learn", proficiency: "Advanced", details: "ML Algorithms & Data Analysis" }
      ],
      status: "Active Learning"
    },
    { 
      category: "Data Engineering", 
      icon: "📊",
      level: 85, 
      description: "Designing and implementing data pipelines and analytics",
      items: [
        { name: "Apache Spark", proficiency: "Intermediate", details: "Big Data Processing" },
        { name: "Hadoop", proficiency: "Intermediate", details: "Distributed Computing" },
        { name: "SQL", proficiency: "Advanced", details: "Database Management" }
      ],
      status: "In Progress"
    },
    { 
      category: "Backend", 
      icon: "⚙️",
      level: 88, 
      description: "Server-side development and API design",
      items: [
        { name: "Python", proficiency: "Advanced", details: "Flask, FastAPI & Django" },
        { name: "Node.js", proficiency: "Intermediate", details: "Express & REST APIs" },
        { name: "Django", proficiency: "Advanced", details: "Full-stack Web Development" }
      ],
      status: "Active"
    },
    { 
      category: "Frontend", 
      icon: "🎨",
      level: 82, 
      description: "Creating responsive and modern user interfaces",
      items: [
        { name: "React", proficiency: "Advanced", details: "Modern UI Development" },
        { name: "Next.js", proficiency: "Intermediate", details: "SSR & Static Sites" },
        { name: "Tailwind CSS", proficiency: "Advanced", details: "Responsive Design" }
      ],
      status: "Growing"
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

    // Create floating animation for particles
    gsap.to(".particle", {
      y: "random(-100, 100)",
      x: "random(-100, 100)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "none",
      stagger: {
        amount: 2,
        from: "random"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);
  return (
    <div 
      ref={containerRef}
      id="skills" 
      className="py-20 px-8 min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              ref={titleRef}
              className="text-6xl font-bold text-white mb-4 [text-shadow:_0_4px_12px_rgba(0,0,0,0.2)]"
            >
              Technical Arsenal
            </h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and continuous learning journey
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                           hover:border-blue-500/30 transition-all duration-500 shadow-xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{skill.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {skill.category}
                    </h3>
                    <p className="text-blue-200/60">{skill.description}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mb-6">
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    {skill.status}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-200/80">Proficiency</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-blue-900/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {skill.items.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 bg-blue-900/10 rounded-lg hover:bg-blue-500/10 
                               transition-colors duration-300 border border-white/5"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.proficiency === "Advanced" 
                            ? "bg-green-500/20 text-green-300" 
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}>
                          {item.proficiency}
                        </span>
                      </div>
                      <p className="text-sm text-blue-200/60">{item.details}</p>
                    </div>
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

export default Skills;