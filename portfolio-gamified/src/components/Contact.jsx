import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  // ... your existing state management ...
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const formRef = useRef(null);

  useEffect(() => {
    // Create a cool background animation
    gsap.to(".animated-bg", {
      backgroundPosition: "200% 50%",
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Floating animation for cards
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: "random(-20, 20)",
        duration: "random(2, 3)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.2
      });
    });

    // Text reveal animation
    const chars = titleRef.current.innerText.split('');
    titleRef.current.innerHTML = '';
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      titleRef.current.appendChild(span);
    });

    gsap.to(titleRef.current.children, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1,
      stagger: 0.05,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%"
      }
    });

    // Skill tags animation
    gsap.from(".skill-tag", {
      scale: 0,
      opacity: 0,
      rotation: "random(-180, 180)",
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".skill-tag",
        start: "top 90%"
      }
    });

    // Form fields animation
    const formFields = formRef.current.querySelectorAll('input, textarea');
    gsap.from(formFields, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Add these styles to your component
  const gradientBg = {
    background: 'linear-gradient(-45deg, #13233a, #1e3a8a, #1e40af, #1d4ed8)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite'
  };

  return (
    <div 
      ref={containerRef} 
      id="contact" 
      className="py-20 px-8 min-h-screen relative overflow-hidden"
      style={gradientBg}
    >
      {/* Animated background */}
      <div className="animated-bg absolute inset-0 opacity-10"
           style={{
             background: 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
             backgroundSize: '200% 200%'
           }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title section with character animation */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-6xl font-bold text-white mb-4 [text-shadow:_0_4px_12px_rgba(0,0,0,0.2)]">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Tech explorer navigating the vast landscape of modern technology. From full-stack to AI, 
            always ready to push boundaries and innovate.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards with floating animation */}
          <div className="space-y-8">
            {['info', 'expertise', 'exploring'].map((section, index) => (
              <div
                key={section}
                ref={el => cardsRef.current[index] = el}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {section === 'info' && (
                <>
                    <h3 className="text-2xl font-bold mb-6 text-white">Connect Directly</h3>
                    <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-white">nyakudyamufa2002@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-white">+263 776 681 617</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-white">69 Jiri Crescent, Mufakose, Harare</span>
                    </div>
                    </div>
                </>
                )}
                {section === 'expertise' && (
                <>
                    <h3 className="text-2xl font-bold mb-6 text-white">Technical Expertise</h3>
                    <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-accent mb-3">Development</h4>
                        <ul className="space-y-2 text-white">
                        <li>• Full-Stack Development</li>
                        <li>• React & Modern Frontend</li>
                        <li>• Django, Flask, FastAPI</li>
                        <li>• RESTful APIs</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-accent mb-3">Data & AI</h4>
                        <ul className="space-y-2 text-white">
                        <li>• Machine Learning</li>
                        <li>• Data Engineering</li>
                        <li>• Data Science</li>
                        <li>• AI Applications</li>
                        </ul>
                    </div>
                    </div>
                </>
                )}
                {section === 'exploring' && (
                  <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-6 text-white">Exploring</h3>
                    <div className="flex flex-wrap gap-3">
                      {['VR/AR', 'BlockChain', 'IoT', 'FinTech', 'AgriTech', 'Business Intelligence'].map((tech) => (
                        <span 
                          key={tech} 
                          className="inline-block px-4 py-2 bg-blue-500/20 
                                    text-white rounded-full text-sm font-medium 
                                    hover:bg-blue-500/40 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Form Section */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl"
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div className="form-group">
                <label className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-4 bg-slate-800 rounded-lg
                            border-2 border-white/20 
                            text-white placeholder-gray-400
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                            outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  }}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-4 bg-slate-800 rounded-lg
                            border-2 border-white/20 
                            text-white placeholder-gray-400
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                            outline-none transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  }}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 bg-slate-800 rounded-lg
                            border-2 border-white/20 
                            text-white placeholder-gray-400
                            focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                            outline-none transition-all duration-300
                            h-32 resize-none"
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  }}
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 
                          text-white font-bold py-4 px-6 rounded-lg 
                          transition-colors duration-300
                          disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </div>
          </form>
        </div>
        
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>
    </div>
  );
}