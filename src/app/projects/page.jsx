"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Smartphone, Globe, Database, Shield, Zap, Cloud, Cpu, Brain, Bot, Rocket, ExternalLink, Github, Calendar, Users, TrendingUp, Award, Filter, Search, ChevronDown, Star } from 'lucide-react';

export default function BuildNestProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Projects', count: 24 },
    { id: 'enterprise', name: 'Enterprise', count: 8 },
    { id: 'ai-ml', name: 'AI & ML', count: 6 },
    { id: 'mobile', name: 'Mobile', count: 5 },
    { id: 'web', name: 'Web Apps', count: 5 }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "FinTech Trading Platform",
      category: "enterprise",
      description: "Real-time trading platform handling 50M+ transactions daily with microsecond latency",
      image: "bg-gradient-to-br from-green-900 to-green-700",
      tech: ["React", "Node.js", "Redis", "PostgreSQL", "WebSocket"],
      metrics: { users: "2M+", uptime: "99.99%", latency: "0.3ms" },
      status: "Live",
      year: "2024",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      title: "AI-Powered Healthcare Analytics",
      category: "ai-ml",
      description: "Machine learning platform for predictive healthcare analytics and patient outcome optimization",
      image: "bg-gradient-to-br from-blue-900 to-blue-700",
      tech: ["Python", "TensorFlow", "Kubernetes", "FastAPI", "MongoDB"],
      metrics: { accuracy: "94.7%", patients: "500K+", hospitals: "150+" },
      status: "Live",
      year: "2024",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Global E-Commerce Platform",
      category: "web",
      description: "Multi-tenant e-commerce solution with AI-driven recommendations and dynamic pricing",
      image: "bg-gradient-to-br from-purple-900 to-purple-700",
      tech: ["Next.js", "GraphQL", "Microservices", "AWS", "Stripe"],
      metrics: { revenue: "$50M+", orders: "10M+", countries: "45" },
      status: "Live",
      year: "2023",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const allProjects = [
    {
      id: 4,
      title: "Smart City IoT Dashboard",
      category: "enterprise",
      description: "Real-time monitoring and analytics for smart city infrastructure with 10K+ sensors",
      tech: ["Vue.js", "InfluxDB", "Docker", "MQTT"],
      year: "2024",
      status: "Live",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking solution with biometric authentication and real-time notifications",
      tech: ["React Native", "Node.js", "PostgreSQL"],
      year: "2024",
      status: "Live",
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      id: 6,
      title: "Supply Chain Optimizer",
      category: "ai-ml",
      description: "AI-driven supply chain optimization reducing costs by 25% through predictive analytics",
      tech: ["Python", "Scikit-learn", "FastAPI", "Redis"],
      year: "2023",
      status: "Live",
      icon: <Bot className="w-5 h-5" />
    },
    {
      id: 7,
      title: "Cloud Migration Platform",
      category: "enterprise",
      description: "Automated cloud migration tool with zero-downtime deployment capabilities",
      tech: ["Go", "Terraform", "Kubernetes", "AWS"],
      year: "2023",
      status: "Live",
      icon: <Cloud className="w-5 h-5" />
    },
    {
      id: 8,
      title: "Social Media Analytics",
      category: "web",
      description: "Real-time social media monitoring and sentiment analysis for enterprise brands",
      tech: ["React", "Python", "Apache Kafka", "Elasticsearch"],
      year: "2023",
      status: "Live",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 9,
      title: "Fitness Tracking App",
      category: "mobile",
      description: "AI-powered fitness tracking with personalized workout recommendations",
      tech: ["Flutter", "Firebase", "TensorFlow Lite"],
      year: "2024",
      status: "Live",
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.9%", label: "Success Rate" },
    { number: "150+", label: "Happy Clients" },
    { number: "50+", label: "Industries Served" }
  ];

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Terminal & Stats */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              
              {/* Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">projects-showcase</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ buildnest --list-projects</div>
                  <div className="text-gray-400">✓ Scanning portfolio database...</div>
                  <div className="text-gray-400">✓ Found 500+ completed projects</div>
                  <div className="text-blue-400">✓ Loading featured showcases...</div>
                  <div className="text-purple-400">✓ Enterprise solutions: 8</div>
                  <div className="text-yellow-400">✓ AI/ML projects: 6</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
                <h4 className="text-sm font-semibold mb-3 text-gray-300">Technologies in Projects</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Python", "AWS", "Kubernetes", "TensorFlow", "GraphQL", "PostgreSQL"].map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Our Project
                  <span className="block text-blue-400">Portfolio</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Explore our collection of enterprise-grade software solutions that have transformed 
                  businesses across industries. From AI-powered platforms to scalable web applications.
                </p>
              </div>

              {/* Search & Filter */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:border-blue-400 focus:outline-none"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400">Showcase of our most impactful enterprise solutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 group">
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-black bg-opacity-60 text-white p-2 rounded-lg">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full">{project.status}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-gray-400 text-sm">{project.year}</span>
                  </div>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    {Object.entries(project.metrics).map(([key, value], index) => (
                      <div key={index}>
                        <div className="text-blue-400 font-semibold text-sm">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300 flex items-center justify-center">
                      View Details
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-all duration-300">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-xl text-gray-400">Comprehensive view of our development portfolio</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-blue-400">{project.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm">{project.year}</span>
                    <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full">{project.status}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center justify-center py-2 transition-colors duration-300">
                    View Project
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-500 mb-4">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl">No projects found</p>
                <p className="text-sm">Try adjusting your search or filter criteria</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-400">Cutting-edge tools and frameworks powering our projects</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Code2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">React, Next.js, Vue.js, TypeScript</p>
            </div>
            <div className="text-center">
              <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Node.js, Python, Go, PostgreSQL</p>
            </div>
            <div className="text-center">
              <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Cloud</h3>
              <p className="text-gray-400 text-sm">AWS, Azure, GCP, Kubernetes</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">AI/ML</h3>
              <p className="text-gray-400 text-sm">TensorFlow, PyTorch, OpenAI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's build something extraordinary together. Our team is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}