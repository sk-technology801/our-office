"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Smartphone, Globe, Database, Shield, Zap, Cloud, Cpu, Brain, Bot, Rocket, Server, Lock, BarChart, Workflow, Palette, Wrench, Sparkles, Monitor, Globe2, CircuitBoard, Eye, Network, Cpu as Quantum } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [metrics, setMetrics] = useState({ projects: 750, uptime: 99.95, responseTime: 45, clients: 300 });
  const [arMode, setArMode] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setMetrics(prev => ({
        projects: prev.projects + Math.floor(Math.random() * 15),
        uptime: 99.9 + Math.random() * 0.09,
        responseTime: 45 - Math.random() * 5,
        clients: prev.clients + Math.floor(Math.random() * 10)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r={Math.random() * 3 + 1}
              fill="url(#neonGradient)"
              className="animate-float"
            />
          ))}
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  };

  const services = [
    {
      icon: <Code2 className="w-14 h-14" />,
      title: "Full-Stack Development",
      desc: "Hyper-optimized end-to-end solutions with micro-frontends and AI-driven SSR for unparalleled performance.",
      details: [
        "Next.js, React, and Node.js at scale",
        "Federated GraphQL APIs",
        "Real-time data orchestration",
        "AI-powered code optimization"
      ],
      highlight: "Neural network-driven SSR",
      color: "from-blue-800 to-cyan-600"
    },
    {
      icon: <Smartphone className="w-14 h-14" />,
      title: "Mobile Applications",
      desc: "Immersive mobile apps with AR/VR integrations, AI personalization, and edge computing.",
      details: [
        "React Native and Flutter ecosystems",
        "AR/VR with WebXR",
        "Edge-based offline processing",
        "AI-driven user behavior analytics"
      ],
      highlight: "Holographic UI interfaces",
      color: "from-purple-800 to-pink-600"
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: "Web Applications",
      desc: "Next-gen web apps with real-time collaboration, edge delivery, and Web3 integrations.",
      details: [
        "PWAs with global edge caching",
        "WebSocket-driven collaboration",
        "Web3 and decentralized storage",
        "AI-optimized SEO"
      ],
      highlight: "Decentralized edge computing",
      color: "from-indigo-800 to-blue-600"
    },
    {
      icon: <Database className="w-14 h-14" />,
      title: "Database Architecture",
      desc: "Quantum-ready, AI-optimized databases for exabyte-scale data processing and real-time analytics.",
      details: [
        "MongoDB, PostgreSQL, and Redis clusters",
        "Quantum-inspired data sharding",
        "Real-time ETL pipelines",
        "AI-driven data indexing"
      ],
      highlight: "Exabyte-scale data lakes",
      color: "from-green-800 to-teal-600"
    },
    {
      icon: <Brain className="w-14 h-14" />,
      title: "AI & Machine Learning",
      desc: "Cutting-edge AI with generative models, quantum ML, and real-time NLP for transformative outcomes.",
      details: [
        "Custom LLMs with TensorFlow",
        "Generative AI for automation",
        "Quantum ML algorithms",
        "Federated learning ecosystems"
      ],
      highlight: "Quantum AI pipelines",
      color: "from-red-800 to-orange-600"
    },
    {
      icon: <Cloud className="w-14 h-14" />,
      title: "Cloud Infrastructure",
      desc: "Multi-cloud, serverless architectures with AI-driven optimization and zero-downtime deployments.",
      details: [
        "AWS, Azure, GCP orchestration",
        "Serverless with Lambda and Fargate",
        "AI-driven resource allocation",
        "Global multi-region redundancy"
      ],
      highlight: "AI-orchestrated cloud",
      color: "from-cyan-800 to-blue-600"
    },
    {
      icon: <Server className="w-14 h-14" />,
      title: "Backend Engineering",
      desc: "Event-driven microservices with Kubernetes, GraphQL Federation, and AI-optimized APIs.",
      details: [
        "Kubernetes with service mesh",
        "Event-sourcing with Kafka",
        "GraphQL Federation at scale",
        "AI-driven API optimization"
      ],
      highlight: "AI-optimized microservices",
      color: "from-teal-800 to-green-600"
    },
    {
      icon: <Lock className="w-14 h-14" />,
      title: "Cybersecurity Solutions",
      desc: "Quantum-resistant security with zero-trust architectures and AI-driven threat detection.",
      details: [
        "Post-quantum cryptography",
        "Zero-trust with OAuth 2.1",
        "AI-powered intrusion detection",
        "Blockchain-based audit trails"
      ],
      highlight: "Quantum-secure protocols",
      color: "from-purple-800 to-blue-600"
    },
    {
      icon: <BarChart className="w-14 h-14" />,
      title: "Data Analytics & BI",
      desc: "AI-driven analytics with immersive 3D visualizations and real-time data streaming.",
      details: [
        "Apache Spark and Snowflake",
        "3D holographic dashboards",
        "Real-time data pipelines",
        "AI-powered predictive models"
      ],
      highlight: "Holographic BI visualizations",
      color: "from-orange-800 to-yellow-600"
    },
    {
      icon: <Workflow className="w-14 h-14" />,
      title: "DevOps & Automation",
      desc: "AI-driven GitOps pipelines, containerized deployments, and automated infrastructure scaling.",
      details: [
        "Terraform and ArgoCD automation",
        "Kubernetes with auto-scaling",
        "AI-optimized CI/CD pipelines",
        "Prometheus monitoring"
      ],
      highlight: "AI-driven GitOps",
      color: "from-blue-800 to-indigo-600"
    },
    {
      icon: <Monitor className="w-14 h-14" />,
      title: "IoT Solutions",
      desc: "Connected ecosystems with edge AI, real-time IoT analytics, and secure device orchestration.",
      details: [
        "MQTT and CoAP protocols",
        "Edge AI with TensorRT",
        "Real-time IoT dashboards",
        "Zero-trust device security"
      ],
      highlight: "Edge AI orchestration",
      color: "from-teal-800 to-cyan-600"
    },
    {
      icon: <Globe2 className="w-14 h-14" />,
      title: "Blockchain Development",
      desc: "Decentralized apps with smart contracts, Web3 integrations, and secure tokenization.",
      details: [
        "Ethereum, Solana, and Hyperledger",
        "Smart contract auditing",
        "Decentralized identity systems",
        "NFT and DeFi solutions"
      ],
      highlight: "Web3-native applications",
      color: "from-purple-800 to-pink-600"
    },
    {
      icon: <Quantum className="w-14 h-14" />,
      title: "Quantum Computing",
      desc: "Quantum-ready algorithms and hybrid classical-quantum systems for next-gen computing.",
      details: [
        "Qiskit and Cirq frameworks",
        "Hybrid quantum pipelines",
        "Quantum cryptography",
        "AI-accelerated quantum simulations"
      ],
      highlight: "Quantum algorithm design",
      color: "from-blue-800 to-purple-600"
    }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "Python", "TypeScript", "GraphQL", "MongoDB",
    "PostgreSQL", "Redis", "Kubernetes", "Docker", "AWS", "Azure", "TensorFlow",
    "PyTorch", "ElasticSearch", "Apache Spark", "Terraform", "Snowflake", "Hyperledger",
    "Qiskit", "Solana", "WebXR"
  ];

  const processSteps = [
    { step: "Discovery", desc: "AI-driven analysis of business needs.", icon: <Wrench className="w-10 h-10" /> },
    { step: "Architecture", desc: "Quantum-ready system design.", icon: <Palette className="w-10 h-10" /> },
    { step: "Development", desc: "Agile, AI-optimized coding.", icon: <Code2 className="w-10 h-10" /> },
    { step: "Testing", desc: "AI-driven stress testing.", icon: <Shield className="w-10 h-10" /> },
    { step: "Deployment", desc: "Zero-downtime global rollout.", icon: <Rocket className="w-10 h-10" /> },
    { step: "Optimization", desc: "AI-powered performance tuning.", icon: <Zap className="w-10 h-10" /> }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-mono relative overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 0.4; }
          100% { transform: translateY(0); opacity: 0.2; }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
          animation-delay: ${Math.random() * 2}s;
        }
      `}</style>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(#noiseFilter)'/%3E%3C/svg%3E")`
          }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          <svg className="w-full h-full">
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r={Math.random() * 4 + 2}
                fill="url(#neonHeroGradient)"
                className="animate-float"
              />
            ))}
            <defs>
              <linearGradient id="neonHeroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
              </linearGradient>
            </defs>
        </svg>
        </motion.div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="flex items-center justify-center space-x-6 mb-10"
              animate={arMode ? { rotate: 5 } : {}}
            >
              <motion.div
                className="w-28 h-28 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/50"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-black font-bold text-4xl">BN</span>
              </motion.div>
              <motion.h2
                className="text-4xl font-bold text-white"
                style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.7)' }}
              >
                BuildNest Technology
              </motion.h2>
            </motion.div>
           
            <motion.p
              className="text-xl text-gray-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              Power your enterprise with AI-accelerated, quantum-ready solutions for unmatched innovation.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <motion.button
                className="relative bg-gradient-to-r from-blue-700 to-cyan-700 text-black px-12 py-6 rounded-2xl font-semibold flex items-center justify-center shadow-2xl shadow-blue-500/50 overflow-hidden"
                whileHover={{ scale: 1.15, boxShadow: "0 0 40px rgba(59, 130, 246, 0.7)" }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Start Your Transformation
                <ArrowRight className="ml-3 w-6 h-6" />
              </motion.button>
              <motion.button
                className="border border-gray-500 px-12 py-6 rounded-2xl font-semibold hover:border-blue-400 hover:text-blue-400"
                whileHover={{ scale: 1.15, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.9 }}
              >
                Explore Our Solutions
              </motion.button>
              <motion.button
                className="relative bg-gradient-to-r from-purple-700 to-pink-700 text-white px-12 py-6 rounded-2xl font-semibold flex items-center justify-center shadow-2xl shadow-purple-500/50 overflow-hidden"
                whileHover={{ scale: 1.15, boxShadow: "0 0 40px rgba(168, 85, 247, 0.7)" }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setArMode(!arMode)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {arMode ? "Exit AR Mode" : "Enter AR Mode"}
                <Eye className="ml-3 w-6 h-6" />
              </motion.button>
            </motion.div>
            <motion.div
              className="mt-12 flex justify-center gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <div className="flex items-center">
                <CircuitBoard className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-blue-400 font-mono">hello@buildnest.tech</span>
              </div>
              <div className="flex items-center">
                <Network className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-gray-100">+1 (555) 123-4567</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Live Metrics Dashboard */}
      <section className="py-20 bg-gray-950 relative">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.4)_0%,_rgba(0,0,0,0)_70%)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Real-Time Impact Metrics
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              AI-driven insights into our enterprise-grade performance.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {[
              { label: "Projects Delivered", value: metrics.projects, unit: "+" },
              { label: "Uptime SLA", value: metrics.uptime.toFixed(2), unit: "%" },
              { label: "Avg Response Time", value: metrics.responseTime.toFixed(0), unit: "ms" },
              { label: "Satisfied Clients", value: metrics.clients, unit: "+" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 text-center shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                animate={arMode ? { rotate: 5 } : {}}
              >
                <motion.div
                  className="text-4xl font-bold text-blue-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {metric.value}{metric.unit}
                </motion.div>
                <div className="text-sm text-gray-100">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3D Holographic Service Carousel */}
      <section className="py-20 bg-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:80px_80px] opacity-15"
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Holographic Service Matrix
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Interact with our cutting-edge solutions in a 3D holographic interface.
            </p>
          </motion.div>
          <div className="relative">
            <motion.div
              className="flex justify-center gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className={`relative bg-gray-900/70 backdrop-blur-lg border border-gray-700 rounded-3xl p-10 cursor-pointer transition-all duration-700 shadow-lg ${
                    selectedService === index ? 'scale-110 shadow-blue-500/50 z-10' : 'scale-90 opacity-60'
                  }`}
                  whileHover={{ scale: selectedService === index ? 1.1 : 0.95, rotate: arMode ? 5 : 0 }}
                  animate={arMode ? { rotate: index * 5 } : {}}
                  onClick={() => setSelectedService(index)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 hover:opacity-40 rounded-3xl transition-opacity duration-700`}></div>
                  <motion.div
                    className="text-blue-400 mb-6"
                    animate={{ rotate: selectedService === index ? 360 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-100 mb-6">{service.desc}</p>
                  <AnimatePresence>
                    {selectedService === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ul className="space-y-4 text-gray-100 text-sm mb-6">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center">
                              <Sparkles className="w-5 h-5 text-blue-400 mr-3" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <p className="text-blue-400 font-semibold">{service.highlight}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center mt-10 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-4 h-4 rounded-full ${selectedService === index ? 'bg-blue-400 shadow-lg shadow-blue-500/50' : 'bg-gray-600'}`}
                  whileHover={{ scale: 1.5 }}
                  onClick={() => setSelectedService(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-950 relative">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.4)_0%,_rgba(0,0,0,0)_70%)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Quantum Innovation Pipeline
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              A precision-engineered process for next-gen enterprise solutions.
            </p>
          </motion.div>
          <div className="relative">
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-400 to-cyan-400 shadow-lg shadow-blue-500/50"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="w-1/2 px-8">
                  <motion.div
                    className="bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 shadow-lg shadow-blue-500/20"
                    whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" }}
                    animate={arMode ? { rotate: 5 } : {}}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="text-blue-400 mr-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {step.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold">{step.step}</h3>
                    </div>
                    <p className="text-gray-100">{step.desc}</p>
                  </motion.div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-black relative">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:80px_80px] opacity-15"
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Our Quantum Tech Arsenal
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Powered by the most advanced tools for futuristic enterprise solutions.
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-3xl p-12 shadow-lg shadow-blue-500/20"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={arMode ? { rotate: 5 } : {}}
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-gray-800/70 text-gray-100 text-sm rounded-full border border-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent shadow-sm"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  animate={arMode ? { rotate: Math.random() * 10 - 5 } : {}}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-950 relative">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.4)_0%,_rgba(0,0,0,0)_70%)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 relative">
          <motion.h2
            className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
            initial={{ scale: 0.7 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Engineer the Future with BuildNest
          </motion.h2>
          <p className="text-xl text-gray-100 mb-12">
            Join us to create quantum-ready, AI-driven solutions that redefine enterprise technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              className="bg-gradient-to-r from-blue-700 to-cyan-700 text-black px-12 py-6 rounded-2xl font-semibold shadow-lg shadow-blue-500/50"
              whileHover={{ scale: 1.15, boxShadow: "0 0 40px rgba(59, 130, 246, 0.7)" }}
              whileTap={{ scale: 0.9 }}
            >
              Get Your Quantum Quote
            </motion.button>
            <motion.button
              className="border border-gray-500 px-12 py-6 rounded-2xl font-semibold hover:border-blue-400 hover:text-blue-400"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              Book a Consultation
            </motion.button>
          </div>
          <motion.div
            className="mt-12 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-blue-400 font-mono text-lg">hello@buildnest.tech</div>
            <div className="text-gray-100">+1 (555) 123-4567</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}