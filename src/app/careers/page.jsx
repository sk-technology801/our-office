"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Code2, Briefcase, Award, Coffee, Laptop, Heart, Zap, Globe, Brain, Shield, Rocket, ChevronDown, ChevronUp } from 'lucide-react';

export default function BuildNestCareers() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    { icon: <DollarSign className="w-6 h-6" />, title: "Competitive Salary", desc: "Market-leading compensation packages with equity options" },
    { icon: <Laptop className="w-6 h-6" />, title: "Remote-First", desc: "Work from anywhere with flexible hours and home office stipend" },
    { icon: <Heart className="w-6 h-6" />, title: "Health & Wellness", desc: "Premium healthcare, dental, mental health support" },
    { icon: <Coffee className="w-6 h-6" />, title: "Learning Budget", desc: "$5,000 annual budget for courses, conferences, and certifications" },
    { icon: <Award className="w-6 h-6" />, title: "Stock Options", desc: "Equity participation in our growing technology company" },
    { icon: <Globe className="w-6 h-6" />, title: "Global Team", desc: "Collaborate with talent from 15+ countries worldwide" }
  ];

  const companyValues = [
    { icon: <Brain className="w-8 h-8" />, title: "Innovation First", desc: "We push boundaries and embrace cutting-edge technologies" },
    { icon: <Users className="w-8 h-8" />, title: "Team Excellence", desc: "Collaborative culture where everyone's voice matters" },
    { icon: <Zap className="w-8 h-8" />, title: "Move Fast", desc: "Rapid iteration and deployment without compromising quality" },
    { icon: <Shield className="w-8 h-8" />, title: "Integrity", desc: "Transparency, honesty, and ethical practices in everything we do" }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$140k - $180k",
      description: "Lead development of enterprise-grade applications using React, Node.js, and cloud technologies. Work on microservices architecture and mentor junior developers.",
      requirements: [
        "5+ years of full-stack development experience",
        "Expert in React, Node.js, TypeScript",
        "Experience with AWS/Azure cloud platforms",
        "Strong understanding of microservices architecture",
        "Experience with containerization (Docker/Kubernetes)"
      ],
      responsibilities: [
        "Design and implement scalable web applications",
        "Collaborate with product and design teams",
        "Mentor junior developers and conduct code reviews",
        "Optimize application performance and security",
        "Participate in architecture decisions"
      ]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Build and maintain CI/CD pipelines, manage cloud infrastructure, and ensure 99.9% uptime for our enterprise clients.",
      requirements: [
        "3+ years of DevOps/Infrastructure experience",
        "Expert in AWS, Docker, Kubernetes",
        "Strong scripting skills (Python, Bash)",
        "Experience with Terraform/CloudFormation",
        "Knowledge of monitoring tools (Datadog, New Relic)"
      ],
      responsibilities: [
        "Design and maintain CI/CD pipelines",
        "Manage cloud infrastructure and deployments",
        "Implement monitoring and alerting systems",
        "Optimize infrastructure costs and performance",
        "Ensure security compliance and best practices"
      ]
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      department: "Innovation",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$150k - $200k",
      description: "Develop AI-powered features and machine learning models for our enterprise clients. Work with LLMs, computer vision, and predictive analytics.",
      requirements: [
        "4+ years of ML/AI development experience",
        "Expert in Python, TensorFlow/PyTorch",
        "Experience with LLMs and NLP",
        "Strong mathematical background in statistics",
        "Experience deploying ML models at scale"
      ],
      responsibilities: [
        "Design and implement ML models and algorithms",
        "Integrate AI capabilities into existing applications",
        "Optimize model performance and scalability",
        "Research and evaluate new AI technologies",
        "Collaborate with engineering teams on AI features"
      ]
    },
    {
      id: 4,
      title: "Product Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Create intuitive user experiences for enterprise software. Lead design systems and collaborate closely with engineering teams.",
      requirements: [
        "4+ years of product design experience",
        "Expert in Figma, design systems",
        "Experience with enterprise software design",
        "Strong user research and testing skills",
        "Understanding of front-end development"
      ],
      responsibilities: [
        "Design user interfaces for web and mobile apps",
        "Conduct user research and usability testing",
        "Maintain and evolve design systems",
        "Collaborate with engineers on implementation",
        "Present design concepts to stakeholders"
      ]
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15", label: "Countries" },
    { number: "4.9/5", label: "Glassdoor Rating" },
    { number: "95%", label: "Employee Retention" }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "GraphQL", 
    "MongoDB", "PostgreSQL", "Redis", "Kubernetes", "Docker", "AWS",
    "TensorFlow", "PyTorch", "Figma", "Terraform"
  ];

  const toggleJobExpansion = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Join the Future of
                <span className="block text-blue-400">Enterprise Software</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Build cutting-edge solutions alongside world-class engineers. Shape the future of enterprise technology while growing your career.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
                  Meet the Team
                </button>
              </div>
            </div>

            {/* Right Side - Team Showcase */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Team Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">team-stats.sh</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ ./get-team-info</div>
                  <div className="text-gray-400">✓ 50+ world-class engineers</div>
                  <div className="text-gray-400">✓ 15 countries represented</div>
                  <div className="text-gray-400">✓ 95% employee satisfaction</div>
                  <div className="text-blue-400">✓ Always hiring great talent!</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Code2 className="w-5 h-5 mr-2" />
                  Our Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600 hover:border-blue-400 transition-colors duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Culture Highlight */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Why BuildNest?</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Rocket className="w-4 h-4 text-blue-400 mr-3" />
                    <span>Work on cutting-edge enterprise solutions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="w-4 h-4 text-green-400 mr-3" />
                    <span>Remote-first with global collaboration</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Award className="w-4 h-4 text-purple-400 mr-3" />
                    <span>Equity participation & career growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300 mb-4">
                  <div className="text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-400">We invest in our team's success and well-being</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-400">Join our team and help build the future</p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => toggleJobExpansion(job.id)}
                        className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:border-white transition-colors duration-300 flex items-center"
                      >
                        Details
                        {expandedJob === job.id ? <ChevronUp className="w-4 h-4 ml-1" /> : <ChevronDown className="w-4 h-4 ml-1" />}
                      </button>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">{job.description}</p>
                  
                  {expandedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-400">Requirements</h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 text-green-400">Responsibilities</h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index} className="flex items-start">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Don't See Your Role?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for exceptional talent. Send us your resume and let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300">
              Send General Application
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
              Follow Us for Updates
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-semibold mb-2">Careers Team</h4>
                <p className="text-gray-400 text-sm">careers@buildnest.tech</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Hiring Process</h4>
                <p className="text-gray-400 text-sm">2-3 weeks average</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-gray-400 text-sm">Within 48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}