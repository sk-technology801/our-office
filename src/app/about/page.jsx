"use client"
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
  const [theme, setTheme] = useState('dark');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  const testimonials = [
    { name: 'Alice Brown', role: 'CTO, InnovateCorp', quote: 'TechBit delivered an exceptional app that transformed our business operations.' },
    { name: 'Bob Wilson', role: 'Founder, StartUpX', quote: 'Their team’s expertise and dedication exceeded our expectations.' },
    { name: 'Clara Lee', role: 'CEO, TechTrend', quote: 'The solutions provided by TechBit were both innovative and reliable.' },
  ];

  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', img: '/team1.jpg', bio: 'John has over 15 years of experience leading tech innovations.', skills: ['Strategy', 'Leadership', 'Cloud'] },
    { name: 'Jane Smith', role: 'Lead Developer', img: '/team2.jpg', bio: 'Jane specializes in full-stack development and scalable systems.', skills: ['React', 'Node.js', 'AWS'] },
    { name: 'Mike Johnson', role: 'UI/UX Designer', img: '/team3.jpg', bio: 'Mike crafts intuitive and beautiful user interfaces.', skills: ['Figma', 'UI Design', 'Prototyping'] },
  ];

  const faqs = [
    { question: 'What services does TechBit offer?', answer: 'We provide web, mobile, and cloud-based solutions tailored to your business needs.' },
    { question: 'How long does a project take?', answer: 'Project timelines vary, but we aim for efficiency without compromising quality.' },
    { question: 'Can you handle large-scale projects?', answer: 'Yes, our team is equipped to manage projects of any size with precision.' },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-950 to-black text-white' : 'bg-gradient-to-br from-white via-gray-100 to-white text-gray-900'} relative overflow-hidden`}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-600/50 z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Subtle SVG Pattern Background */}
      <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%25233b82f6%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zm0-30V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-10 pointer-events-none z-0`}></div>

      

      {/* Hero/About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto py-24 px-6 relative z-10"
      >
        <div className={`transform -skew-y-3 ${theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-100/20'} p-12 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)]`}>
          <h2 className={`text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent ${theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-blue-800'}`}>
            About TechBit
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} max-w-3xl mx-auto text-center leading-relaxed`}>
            TechBit is at the forefront of innovation, crafting bespoke software solutions that empower businesses to excel. From cutting-edge web and mobile apps to robust cloud systems, our team blends creativity and precision to deliver unparalleled results.
          </p>
        </div>
      </motion.section>

      {/* Mission and Vision Section */}
      <motion.section
        id="mission"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${theme === 'dark' ? 'bg-black/50' : 'bg-gray-100/50'} py-24 relative z-10`}
      >
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Our Mission',
                description: 'To empower businesses with innovative software solutions that drive growth and efficiency.',
                icon: '🚀',
              },
              {
                title: 'Our Vision',
                description: 'To be the global leader in transformative technology, shaping the future of digital experiences.',
                icon: '🌍',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.5)' }}
                className={`${theme === 'dark' ? 'bg-gray-900/30 border-blue-800' : 'bg-white/30 border-blue-200'} border rounded-2xl p-8 text-center`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>{item.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        id="team"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Our Visionary Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(59, 130, 246, 0.7)' }}
                onClick={() => setSelectedMember(member)}
                className={`${theme === 'dark' ? 'bg-gray-900/30 border-blue-800' : 'bg-white/30 border-blue-200'} border rounded-2xl p-8 text-center cursor-pointer`}
              >
                <div className={`w-36 h-36 mx-auto mb-6 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-blue-400' : 'bg-gray-200 text-blue-600'} flex items-center justify-center text-4xl overflow-hidden relative group`}>
                  {member.img ? (
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    member.name[0]
                  )}
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}></div>
                </div>
                <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{member.name}</h3>
                <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mt-2`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} p-8 rounded-2xl max-w-md w-full mx-4`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>{selectedMember.name}</h3>
              <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} mb-4`}>{selectedMember.role}</p>
              <p className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} mb-4`}>{selectedMember.bio}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedMember.skills.map((skill, index) => (
                  <span key={index} className={`${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-800'} px-3 py-1 rounded-full text-sm`}>
                    {skill}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                className={`${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-200 hover:bg-blue-300'} text-white px-4 py-2 rounded-full`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`${theme === 'dark' ? 'bg-gray-900/30 border-blue-800' : 'bg-white/30 border-blue-200'} border rounded-2xl mb-4 overflow-hidden`}
                onClick={() => toggleFAQ(index)}
              >
                <button className={`w-full text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'} font-semibold flex justify-between items-center`}>
                  {faq.question}
                  <span>{activeFAQ === index ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} p-4 bg-blue-900/10`}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            What Our Clients Say
          </h2>
          <div className={`relative ${theme === 'dark' ? 'bg-gray-900/30 border-blue-800' : 'bg-white/30 border-blue-200'} border rounded-2xl p-8 max-w-2xl mx-auto`}>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} italic mb-4`}>"{testimonials[currentTestimonial].quote}"</p>
              <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{testimonials[currentTestimonial].name}</h3>
              <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{testimonials[currentTestimonial].role}</p>
            </motion.div>
            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}
              >
                ← Prev
              </button>
              <button
                onClick={nextTestimonial}
                className={`${theme === 'dark' ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300`}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        id="cta"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="py-24 relative z-10"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-4xl font-extrabold mb-6 bg-clip-text text-transparent ${theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-blue-800'}`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} max-w-2xl mx-auto mb-8`}>
            Partner with TechBit to unlock innovative solutions tailored to your needs.
          </p>
          <Link
            href="/contact"
            className={`inline-block ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-800'} text-white px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
          >
            Get in Touch
          </Link>
        </div>
      </motion.section>

      
    </div>
  );
}
