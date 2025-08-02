


"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Smartphone, Globe, Database, Shield, Zap, Cloud, Cpu, Brain, Bot, Rocket } from 'lucide-react';

export default function BuildNestHomepage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const coreServices = [
    { icon: <Code2 className="w-6 h-6" />, name: "Full-Stack Development", desc: "End-to-end solutions" },
    { icon: <Smartphone className="w-6 h-6" />, name: "Mobile Applications", desc: "iOS & Android native" },
    { icon: <Globe className="w-6 h-6" />, name: "Web Applications", desc: "Modern & responsive" },
    { icon: <Database className="w-6 h-6" />, name: "Database Architecture", desc: "Scalable data solutions" }
  ];

  const advancedFeatures = [
    { icon: <Brain className="w-8 h-8" />, title: "AI & Machine Learning", desc: "Intelligent automation and predictive analytics powered by cutting-edge AI algorithms" },
    { icon: <Cloud className="w-8 h-8" />, title: "Cloud Infrastructure", desc: "AWS, Azure, and Google Cloud deployment with auto-scaling and load balancing" },
    { icon: <Shield className="w-8 h-8" />, title: "Enterprise Security", desc: "Advanced cybersecurity with encryption, OAuth, and compliance standards (SOC2, GDPR)" },
    { icon: <Bot className="w-8 h-8" />, title: "DevOps & Automation", desc: "CI/CD pipelines, containerization with Docker/Kubernetes, and automated testing" },
    { icon: <Cpu className="w-8 h-8" />, title: "Microservices Architecture", desc: "Scalable, maintainable systems with API-first design and service mesh integration" },
    { icon: <Rocket className="w-8 h-8" />, title: "Performance Optimization", desc: "Sub-second load times, CDN integration, and advanced caching strategies" }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50ms", label: "Avg Response Time" },
    { number: "24/7", label: "Expert Support" }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "GraphQL", 
    "MongoDB", "PostgreSQL", "Redis", "Kubernetes", "Docker", "AWS"
  ];

  return (
    <div className="bg-black text-white pt-24"> {/* Added pt-24 to account for navbar height */}
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-6rem)] flex items-center relative overflow-hidden">
        {/* Pure Black Background */}
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Tech Showcase */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              
              {/* Main Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">buildnest-cli</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ buildnest --init-project</div>
                  <div className="text-gray-400">✓ Setting up enterprise architecture...</div>
                  <div className="text-gray-400">✓ Configuring microservices...</div>
                  <div className="text-gray-400">✓ Implementing security protocols...</div>
                  <div className="text-blue-400">✓ Project ready for deployment!</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Core Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {coreServices.map((service, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-all duration-300">
                    <div className="text-blue-400 mb-2">{service.icon}</div>
                    <div className="font-semibold text-sm mb-1">{service.name}</div>
                    <div className="text-gray-400 text-xs">{service.desc}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Enterprise-Grade
                  <span className="block text-blue-400">Software Solutions</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We build scalable, secure, and high-performance software solutions for modern businesses. 
                  From AI-powered applications to cloud-native architectures.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>

              {/* Contact */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold mb-1">Ready to Scale Your Business?</h3>
                    <p className="text-gray-400 text-sm">Let's discuss your enterprise requirements</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-blue-400 font-mono">hello@buildnest.tech</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-400">Enterprise-level features that set us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-all duration-300">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Built for Enterprise Scale</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">High Performance Architecture</h3>
                    <p className="text-gray-400">Built to handle millions of requests with sub-second response times and 99.9% uptime SLA.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Enterprise Security</h3>
                    <p className="text-gray-400">SOC2 compliant with advanced encryption, OAuth 2.0, and comprehensive audit trails.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Scalable Infrastructure</h3>
                    <p className="text-gray-400">Auto-scaling microservices architecture that grows with your business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Enterprise Package Includes:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Custom software development</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Cloud infrastructure setup</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>DevOps & CI/CD pipelines</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>24/7 monitoring & support</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Security compliance audit</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Something Extraordinary?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join 500+ companies that trust BuildNest Technology for their critical software infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              Get Enterprise Quote
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}