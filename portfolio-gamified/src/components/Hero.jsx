import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  const roles = [
    "Data Science Student",
    "AI Engineer",
    "ML Enthusiast",
    "Computer Vision Developer",
    "Full Stack Developer"
  ];

  useEffect(() => {
    // Particle animation
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

    // Text reveal animation
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      id="hero" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"
    >
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
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

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            ref={titleRef}
            className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 
                       bg-clip-text text-transparent [text-shadow:_0_4px_12px_rgba(0,0,0,0.2)]"
          >
            Mufaro Conel Nyakudya
          </h1>

          <p className="text-2xl font-semibold text-blue-300 mb-4">
            @codeconel
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {roles.map((role, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="role px-4 py-2 rounded-full text-sm 
                         bg-white/5 backdrop-blur-lg border border-white/10
                         text-blue-200 hover:bg-blue-500/10 hover:border-blue-500/30
                         transition-all duration-300"
              >
                {role}
              </motion.span>
            ))}
          </div>

          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto mb-6">
            3rd Year Data Science Student at the University of Zimbabwe
          </p>
          
          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto mb-12">
            Passionate about AI, Machine Learning, and building innovative solutions. 
            Currently seeking attachment opportunities to apply and enhance my skills.
          </p>

          <div className="flex justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400
                         text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30
                         transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white/5 backdrop-blur-lg
                         border border-white/10 text-white font-semibold
                         hover:bg-blue-500/10 hover:border-blue-500/30
                         transition-all duration-300"
            >
              Download CV
            </motion.button>
          </div>

          {/* Optional: Add social links */}
          <div className="mt-8 flex justify-center gap-4">
            <motion.a
              href="https://github.com/codeconel" // Update with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/codeconel" // Update with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;