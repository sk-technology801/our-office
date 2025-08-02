"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MapPin, Calendar, Award, Code2, Briefcase, Globe, Github, Linkedin, Twitter,
  Users, Brain, Zap, Shield, Rocket, Coffee, Heart, Star, TrendingUp, Target, BookOpen,
  Clock, ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX, Filter, Search, 
  Mail, Phone, MessageCircle, Video, ExternalLink, Download, Share2, Eye, ThumbsUp,
  Building, GraduationCap, Trophy, Lightbulb, Database, Cloud, Smartphone, Monitor,
  Server, Lock, Cpu, Layers, GitBranch, Terminal, Package, Settings, Activity,
  BarChart3, PieChart, LineChart, Workflow, Network, FileCode, TestTube, Wrench,
  MousePointer, CheckCircle, CircuitBoard, Fingerprint, Gauge, Palette, ShoppingCart,
  CreditCard, BarChart, TrendingDown, Infinity, Maximize, Minimize, Plus, Minus,
  RefreshCw, RotateCcw, Upload, FolderOpen, FileText, Archive, HardDrive, Wifi,
  Bluetooth, Battery, Signal, Compass, Camera, Mic, Speaker, Headphones, Radio
} from 'lucide-react';

export default function BuildNestProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedProject, setExpandedProject] = useState(null);
  const [showMetrics, setShowMetrics] = useState(false);
  const [activeTab, setActiveTab] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const projectCategories = [
    { id: 'all', name: 'All Projects', count: 47 },
    { id: 'enterprise', name: 'Enterprise Platform', count: 12 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'infrastructure', name: 'Infrastructure', count: 9 },
    { id: 'mobile', name: 'Mobile Applications', count: 6 },
    { id: 'security', name: 'Security & Compliance', count: 5 },
    { id: 'analytics', name: 'Analytics & BI', count: 4 },
    { id: 'opensource', name: 'Open Source', count: 3 }
  ];

  const projectStatuses = [
    { id: 'all', name: 'All Status', count: 47 },
    { id: 'production', name: 'Production', count: 28 },
    { id: 'beta', name: 'Beta Testing', count: 8 },
    { id: 'development', name: 'In Development', count: 7 },
    { id: 'planning', name: 'Planning', count: 4 }
  ];

  const techStacks = [
    { id: 'all', name: 'All Technologies', count: 47 },
    { id: 'react', name: 'React/Next.js', count: 18 },
    { id: 'node', name: 'Node.js', count: 15 },
    { id: 'python', name: 'Python/Django', count: 12 },
    { id: 'kubernetes', name: 'Kubernetes', count: 10 },
    { id: 'aws', name: 'AWS', count: 22 },
    { id: 'ai', name: 'AI/ML Stack', count: 8 }
  ];

  const projects = [
    // Enterprise Platform Projects
    {
      id: 1,
      name: "Enterprise Command Center",
      category: "enterprise",
      status: "production",
      techStack: ["react", "node", "kubernetes", "aws"],
      description: "Next-generation enterprise management platform with real-time analytics, AI-powered insights, and seamless workflow automation",
      longDescription: "The Enterprise Command Center represents the pinnacle of modern enterprise software design. Built from the ground up with microservices architecture, it provides organizations with unprecedented visibility into their operations. The platform leverages advanced AI algorithms to predict business outcomes, automate routine tasks, and provide actionable insights that drive decision-making at all organizational levels.",
      features: [
        "Real-time operational dashboard with 360° business view",
        "AI-powered predictive analytics and forecasting",
        "Automated workflow orchestration and task management",
        "Advanced role-based access control and security",
        "Multi-tenant architecture supporting 10,000+ users",
        "Custom integration APIs for legacy system connectivity",
        "Mobile-first responsive design with offline capabilities",
        "Advanced audit trails and compliance reporting"
      ],
      technologies: ["React 18", "Next.js 14", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "AWS EKS", "GraphQL", "TypeScript", "TensorFlow", "Docker"],
      metrics: {
        users: "50,000+",
        uptime: "99.99%",
        responseTime: "< 200ms",
        dataProcessed: "10TB/day",
        transactions: "1M+/day",
        savings: "$5M annually"
      },
      team: ["Sarah Chen", "Marcus Rodriguez", "Alex Zhang", "Maya Singh", "Jordan Martinez"],
      timeline: {
        started: "2022-01-15",
        launched: "2023-06-01",
        lastUpdate: "2024-12-15"
      },
      achievements: [
        "Reduced operational costs by 35% for enterprise clients",
        "Improved decision-making speed by 60%",
        "Winner of 2023 Enterprise Software Innovation Award",
        "Featured in Gartner Magic Quadrant for Enterprise Platforms",
        "SOC2 Type II and ISO 27001 certified",
        "99.99% uptime maintained for 18 consecutive months"
      ],
      clientTestimonials: [
        {
          quote: "The Enterprise Command Center transformed how we operate. We've seen a 40% improvement in operational efficiency.",
          author: "John Smith, CTO at Fortune 500 Company",
          company: "Global Manufacturing Corp"
        },
        {
          quote: "BuildNest's platform gave us insights we never had before. It's like having a crystal ball for our business.",
          author: "Maria Garcia, VP Operations",
          company: "TechFlow Industries"
        }
      ],
      architecture: {
        frontend: "React 18 with Next.js 14, TypeScript, Tailwind CSS",
        backend: "Node.js microservices, GraphQL API Gateway",
        database: "PostgreSQL with Redis caching layer",
        infrastructure: "Kubernetes on AWS EKS with auto-scaling",
        monitoring: "Prometheus, Grafana, ELK Stack",
        security: "OAuth 2.0, JWT tokens, WAF, encryption at rest"
      },
      caseStudies: [
        {
          title: "Global Retail Chain Transformation",
          challenge: "Manual processes causing 48-hour delays in inventory decisions",
          solution: "Automated real-time inventory tracking with predictive restocking",
          results: "Reduced inventory costs by $2.3M annually, 95% reduction in stockouts"
        },
        {
          title: "Manufacturing Optimization",
          challenge: "Production bottlenecks causing 15% efficiency loss",
          solution: "AI-powered production planning and resource allocation",
          results: "18% increase in production efficiency, $1.8M cost savings"
        }
      ],
      futureRoadmap: [
        "Advanced AI-powered automation engine (Q2 2025)",
        "Blockchain integration for supply chain transparency (Q3 2025)",
        "AR/VR interface for immersive data visualization (Q4 2025)",
        "Edge computing capabilities for IoT integration (Q1 2026)"
      ],
      awards: [
        "2023 Enterprise Software Innovation Award - TechCrunch",
        "Best Enterprise Platform - SaaS Awards 2023",
        "Innovation Excellence Award - Enterprise Tech Summit 2023"
      ]
    },
    {
      id: 2,
      name: "Quantum Analytics Engine",
      category: "ai-ml",
      status: "production",
      techStack: ["python", "ai", "kubernetes", "aws"],
      description: "Revolutionary AI-powered analytics platform that processes petabytes of data to deliver quantum-speed insights for enterprise decision making",
      longDescription: "The Quantum Analytics Engine represents a breakthrough in enterprise data processing and analysis. Utilizing cutting-edge machine learning algorithms and quantum-inspired computing principles, this platform can analyze massive datasets in real-time, identifying patterns and trends that would be impossible to detect through traditional methods. Built for the most demanding enterprise environments, it scales effortlessly from gigabytes to petabytes while maintaining lightning-fast query performance.",
      features: [
        "Quantum-inspired algorithms for pattern recognition",
        "Real-time processing of streaming data at petabyte scale",
        "Natural language query interface powered by GPT-4",
        "Automated anomaly detection and alerting systems",
        "Predictive modeling with 95%+ accuracy rates",
        "Custom ML model training and deployment pipeline",
        "Advanced data visualization with interactive dashboards",
        "Multi-dimensional correlation analysis across data sources"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Apache Kafka", "Elasticsearch", "ClickHouse", "Kubernetes", "Apache Spark", "CUDA", "OpenAI API"],
      metrics: {
        dataProcessed: "50PB+",
        querySpeed: "< 500ms",
        accuracy: "97.3%",
        models: "200+ active",
        predictions: "10M+/day",
        clients: "150+"
      },
      team: ["Dr. Yuki Tanaka", "Roberto Silva", "Hassan Al-Rashid", "Amanda Foster"],
      timeline: {
        started: "2021-09-01",
        launched: "2022-11-15",
        lastUpdate: "2024-12-20"
      },
      achievements: [
        "Processes 50+ petabytes of data daily across all clients",
        "Achieved 97.3% accuracy in predictive modeling",
        "Reduced analysis time from days to minutes",
        "Winner of 2022 AI Innovation Excellence Award",
        "Featured in MIT Technology Review's Breakthrough Technologies",
        "Saved clients over $50M through predictive insights"
      ],
      architecture: {
        mlPipeline: "TensorFlow/PyTorch with custom quantum algorithms",
        dataIngestion: "Apache Kafka with real-time streaming",
        processing: "Apache Spark on Kubernetes clusters",
        storage: "ClickHouse for analytics, S3 for data lake",
        serving: "TensorFlow Serving with GPU acceleration",
        monitoring: "MLflow, Weights & Biases, custom metrics"
      },
      caseStudies: [
        {
          title: "Financial Fraud Detection",
          challenge: "Traditional systems catching only 60% of fraudulent transactions",
          solution: "Real-time ML models analyzing transaction patterns",
          results: "99.2% fraud detection rate, $12M prevented losses annually"
        },
        {
          title: "Supply Chain Optimization",
          challenge: "Unpredictable demand causing $5M in excess inventory",
          solution: "Predictive demand forecasting with external data correlation",
          results: "32% inventory reduction, 95% demand prediction accuracy"
        }
      ]
    },
    {
      id: 3,
      name: "SecureVault Pro",
      category: "security",
      status: "production",
      techStack: ["node", "kubernetes", "aws"],
      description: "Military-grade security platform providing zero-trust architecture, advanced threat detection, and automated incident response for enterprise environments",
      longDescription: "SecureVault Pro is our flagship security platform designed for organizations that cannot afford a single security breach. Built with a zero-trust architecture at its core, every interaction is verified, encrypted, and logged. The platform combines traditional security measures with cutting-edge AI-powered threat detection, behavioral analysis, and automated response systems to provide comprehensive protection against modern cyber threats.",
      features: [
        "Zero-trust network architecture with micro-segmentation",
        "AI-powered behavioral analysis and anomaly detection",
        "Real-time threat intelligence integration",
        "Automated incident response and remediation",
        "Advanced encryption with quantum-resistant algorithms",
        "Comprehensive audit trails and forensic capabilities",
        "Multi-factor authentication with biometric support",
        "Continuous compliance monitoring and reporting"
      ],
      technologies: ["Node.js", "Go", "PostgreSQL", "Redis", "Vault", "Kubernetes", "Istio", "OpenTelemetry", "Falco", "Suricata"],
      metrics: {
        threatsBlocked: "10M+",
        responseTime: "< 100ms",
        uptime: "99.999%",
        falsePositives: "< 0.1%",
        clientsProtected: "500+",
        dataSecured: "100PB+"
      },
      team: ["David Thompson", "Amanda Foster", "Hassan Al-Rashid", "Marcus Rodriguez"],
      achievements: [
        "Zero successful breaches across all protected clients",
        "Blocks 10M+ threats daily with 99.9% accuracy",
        "Achieved FedRAMP High authorization",
        "Compliant with SOC2, ISO 27001, HIPAA, GDPR",
        "Winner of 2023 Cybersecurity Excellence Award"
      ]
    },
    {
      id: 4,
      name: "CloudScale Infrastructure",
      category: "infrastructure",
      status: "production",
      techStack: ["kubernetes", "aws"],
      description: "Auto-scaling cloud infrastructure platform that automatically provisions, manages, and optimizes resources across multi-cloud environments",
      longDescription: "CloudScale Infrastructure is our next-generation cloud management platform that eliminates the complexity of multi-cloud operations. Using advanced algorithms and machine learning, it automatically optimizes resource allocation, predicts scaling needs, and manages costs across AWS, Azure, and Google Cloud. The platform reduces infrastructure costs by an average of 40% while improving performance and reliability.",
      features: [
        "Intelligent auto-scaling with predictive algorithms",
        "Multi-cloud resource optimization and cost management",
        "Automated disaster recovery and backup systems",
        "Real-time performance monitoring and alerting",
        "Infrastructure as Code with GitOps workflows",
        "Advanced security and compliance automation",
        "Container orchestration with service mesh",
        "Edge computing and CDN optimization"
      ],
      technologies: ["Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana", "ArgoCD", "Istio", "Helm", "AWS", "Azure", "GCP"],
      metrics: {
        serversManaged: "50,000+",
        costSavings: "40% avg",
        uptime: "99.99%",
        deployments: "1000+/day",
        environments: "5000+",
        datacenters: "50+"
      },
      team: ["Hassan Al-Rashid", "Marcus Rodriguez", "Roberto Silva", "Alex Zhang"],
      achievements: [
        "Manages 50,000+ servers across 50+ data centers",
        "Achieved 40% average cost reduction for clients",
        "Zero-downtime deployments for 99.9% of releases",
        "Certified Kubernetes Service Provider (KCSP)",
        "AWS Advanced Tier Partner"
      ]
    },
    {
      id: 5,
      name: "MobileFirst Suite",
      category: "mobile",
      status: "production",
      techStack: ["react", "node"],
      description: "Comprehensive mobile application suite delivering native performance with cross-platform efficiency for enterprise mobility solutions",
      longDescription: "The MobileFirst Suite represents our commitment to mobile-first enterprise solutions. Built with React Native and enhanced with native modules, these applications deliver near-native performance while maintaining code efficiency across iOS and Android platforms. The suite includes productivity tools, collaboration platforms, and business intelligence applications that keep teams connected and productive wherever they work.",
      features: [
        "Native performance with cross-platform efficiency",
        "Offline-first architecture with intelligent sync",
        "Biometric authentication and advanced security",
        "Real-time collaboration and communication tools",
        "Integrated business intelligence and analytics",
        "Custom branding and white-label options",
        "Advanced push notifications and engagement",
        "Enterprise MDM and security policy compliance"
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Node.js", "Firebase", "AWS Mobile", "GraphQL", "Redux", "Realm"],
      metrics: {
        downloads: "2M+",
        rating: "4.8/5",
        retention: "85%",
        performance: "60fps",
        crashRate: "< 0.1%",
        countries: "100+"
      },
      team: ["Lisa Chen", "Maya Singh", "Jordan Martinez", "Priya Sharma"],
      achievements: [
        "2M+ downloads across app stores",
        "4.8/5 average rating with 50,000+ reviews",
        "85% user retention rate after 30 days",
        "Featured in App Store Business category",
        "Winner of 2023 Mobile Excellence Award"
      ]
    },
    {
      id: 6,
      name: "DataFlow Pipeline",
      category: "analytics",
      status: "beta",
      techStack: ["python", "kubernetes", "aws"],
      description: "Real-time data processing pipeline that ingests, transforms, and delivers actionable insights from diverse data sources at enterprise scale",
      longDescription: "DataFlow Pipeline is our cutting-edge data processing platform designed to handle the most complex data challenges faced by modern enterprises. It seamlessly ingests data from hundreds of sources, applies intelligent transformations, and delivers real-time insights to decision-makers. Built with event-driven architecture and powered by machine learning, it can process billions of events per day while maintaining data quality and governance standards.",
      features: [
        "Real-time data ingestion from 500+ source types",
        "Intelligent data quality monitoring and cleansing",
        "Automated schema evolution and data lineage tracking",
        "ML-powered data transformation and enrichment",
        "Stream and batch processing with unified APIs",
        "Advanced data governance and privacy controls",
        "Custom connector development framework",
        "Self-healing pipeline with automatic recovery"
      ],
      technologies: ["Apache Kafka", "Apache Spark", "Apache Airflow", "ClickHouse", "Elasticsearch", "Python", "Scala", "Kubernetes"],
      metrics: {
        eventsPerDay: "5B+",
        sources: "500+",
        latency: "< 100ms",
        accuracy: "99.5%",
        pipelines: "10,000+",
        throughput: "1M events/sec"
      },
      team: ["Dr. Yuki Tanaka", "Roberto Silva", "Alex Zhang", "Hassan Al-Rashid"],
      status: "beta",
      achievements: [
        "Processes 5B+ events daily with sub-100ms latency",
        "Supports 500+ different data source types",
        "99.5% data quality accuracy maintained",
        "Reduced data engineering time by 70%",
        "Selected for Apache Foundation incubation"
      ]
    },
    {
      id: 7,
      name: "DevOps Automation Hub",
      category: "infrastructure",
      status: "production",
      techStack: ["kubernetes", "node", "aws"],
      description: "Comprehensive DevOps automation platform that streamlines CI/CD, infrastructure management, and deployment orchestration across cloud environments",
      longDescription: "The DevOps Automation Hub is our answer to the growing complexity of modern software delivery. It provides a unified platform for managing the entire software development lifecycle, from code commit to production deployment. With advanced automation capabilities, intelligent testing frameworks, and comprehensive monitoring, teams can deliver high-quality software faster and more reliably than ever before.",
      features: [
        "Automated CI/CD pipelines with intelligent testing",
        "Infrastructure as Code with drift detection",
        "Progressive deployment strategies and rollback automation",
        "Comprehensive security scanning and compliance checks",
        "Multi-environment promotion workflows",
        "Advanced monitoring and observability integration",
        "Custom workflow orchestration engine",
        "Team collaboration and approval workflows"
      ],
      technologies: ["Jenkins", "GitLab CI", "ArgoCD", "Terraform", "Ansible", "Kubernetes", "Prometheus", "Grafana", "SonarQube"],
      metrics: {
        deployments: "10,000+/day",
        successRate: "99.8%",
        leadTime: "15 min avg",
        mttr: "5 min avg",
        teams: "200+",
        environments: "5000+"
      },
      team: ["Hassan Al-Rashid", "Marcus Rodriguez", "Alex Zhang", "Amanda Foster"],
      achievements: [
        "Handles 10,000+ deployments daily with 99.8% success rate",
        "Reduced deployment lead time from hours to minutes",
        "Zero critical production incidents in 12 months",
        "Adopted by 200+ development teams globally",
        "CNCF Silver Partner certification"
      ]
    },
    {
      id: 8,
      name: "AI Assistant Platform",
      category: "ai-ml",
      status: "development",
      techStack: ["python", "ai", "react", "node"],
      description: "Next-generation AI assistant platform leveraging GPT-4 and custom models to provide intelligent automation and decision support for enterprise workflows",
      longDescription: "The AI Assistant Platform represents the future of enterprise automation. By combining large language models with domain-specific knowledge and enterprise data, it creates intelligent assistants that can understand context, make decisions, and automate complex workflows. These AI assistants learn from user interactions and continuously improve their performance, becoming more valuable over time.",
      features: [
        "Custom AI models trained on enterprise data",
        "Natural language processing and generation",
        "Workflow automation with intelligent decision making",
        "Multi-modal interaction (text, voice, visual)",
        "Integration with existing enterprise systems",
        "Privacy-preserving federated learning",
        "Real-time learning and adaptation",
        "Advanced context awareness and memory"
      ],
      technologies: ["GPT-4", "LangChain", "Hugging Face", "PyTorch", "FastAPI", "React", "Node.js", "Vector Databases"],
      metrics: {
        assistants: "1000+",
        tasks: "50,000+/day",
        accuracy: "94%",
        timeSaved: "10hrs/user/week",
        satisfaction: "4.7/5",
        languages: "25+"
      },
      team: ["Dr. Yuki Tanaka", "Sarah Chen", "Maya Singh", "Jordan Martinez"],
      achievements: [
        "1000+ AI assistants deployed across enterprises",
        "94% task completion accuracy",
        "Saves 10+ hours per user per week",
        "Supports 25+ languages",
        "Featured in Harvard Business Review AI case study"
      ]
    }
  ];

  const overallMetrics = [
    { number: "47", label: "Active Projects", icon: <Rocket className="w-6 h-6" /> },
    { number: "28", label: "In Production", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "15M+", label: "Users Served", icon: <Users className="w-6 h-6" /> },
    { number: "99.99%", label: "Avg Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "$100M+", label: "Client Savings", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "150+", label: "Enterprise Clients", icon: <Building className="w-6 h-6" /> }
  ];

  const technologyShowcase = [
    {
      category: "Frontend Technologies",
      technologies: [
        { name: "React 18", projects: 18, expertise: "Advanced", color: "blue" },
        { name: "Next.js 14", projects: 12, expertise: "Expert", color: "purple" },
        { name: "TypeScript", projects: 25, expertise: "Expert", color: "blue" },
        { name: "Vue.js 3", projects: 8, expertise: "Advanced", color: "green" },
        { name: "Angular 17", projects: 6, expertise: "Intermediate", color: "red" },
        { name: "Svelte", projects: 4, expertise: "Intermediate", color: "orange" }
      ]
    },
    {
      category: "Backend & APIs",
      technologies: [
        { name: "Node.js", projects: 22, expertise: "Expert", color: "green" },
        { name: "Python", projects: 18, expertise: "Expert", color: "yellow" },
        { name: "Go", projects: 10, expertise: "Advanced", color: "cyan" },
        { name: "GraphQL", projects: 15, expertise: "Advanced", color: "pink" },
        { name: "REST APIs", projects: 35, expertise: "Expert", color: "blue" },
        { name: "gRPC", projects: 8, expertise: "Intermediate", color: "gray" }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      technologies: [
        { name: "AWS", projects: 30, expertise: "Expert", color: "orange" },
        { name: "Kubernetes", projects: 25, expertise: "Expert", color: "blue" },
        { name: "Docker", projects: 40, expertise: "Expert", color: "blue" },
        { name: "Terraform", projects: 20, expertise: "Advanced", color: "purple" },
        { name: "Azure", projects: 12, expertise: "Advanced", color: "blue" },
        { name: "GCP", projects: 8, expertise: "Intermediate", color: "green" }
      ]
    },
    {
      category: "AI & Machine Learning",
      technologies: [
        { name: "TensorFlow", projects: 12, expertise: "Expert", color: "orange" },
        { name: "PyTorch", projects: 10, expertise: "Advanced", color: "red" },
        { name: "GPT-4/OpenAI", projects: 8, expertise: "Advanced", color: "green" },
        { name: "Hugging Face", projects: 6, expertise: "Advanced", color: "yellow" },
        { name: "MLflow", projects: 8, expertise: "Intermediate", color: "blue" },
        { name: "Kubeflow", projects: 5, expertise: "Intermediate", color: "purple" }
      ]
    }
  ];

  const industryImpact = [
    {
      industry: "Financial Services",
      projects: 12,
      impact: "$25M saved annually",
      keyMetrics: ["99.2% fraud detection", "50% faster processing", "Zero security breaches"],
      clients: ["JPMorgan Chase", "Wells Fargo", "Bank of America"]
    },
    {
      industry: "Healthcare",
      projects: 8,
      impact: "2M patients served",
      keyMetrics: ["40% efficiency gain", "HIPAA compliant", "99.9% uptime"],
      clients: ["Mayo Clinic", "Johns Hopkins", "Kaiser Permanente"]
    },
    {
      industry: "Manufacturing",
      projects: 10,
      impact: "35% cost reduction",
      keyMetrics: ["18% efficiency boost", "Zero downtime", "Predictive maintenance"],
      clients: ["GE", "Siemens", "Toyota"]
    },
    {
      industry: "Retail & E-commerce",
      projects: 9,
      impact: "$50M revenue increase",
      keyMetrics: ["300% conversion boost", "Real-time analytics", "AI recommendations"],
      clients: ["Amazon", "Walmart", "Target"]
    },
    {
      industry: "Technology",
      projects: 8,
      impact: "100M+ users reached",
      keyMetrics: ["Sub-second response", "Global scale", "99.99% availability"],
      clients: ["Microsoft", "Google", "Oracle"]
    }
  ];

  const innovationLabs = [
    {
      name: "Quantum Computing Lab",
      description: "Exploring quantum algorithms for optimization and cryptography",
      focus: "Quantum-inspired machine learning and security protocols",
      team: 6,
      projects: 3,
      publications: 12,
      partnerships: ["IBM Quantum", "Google Quantum AI", "MIT"],
      timeline: "2024-2027",
      budget: "$2.5M",
      expectedImpact: "Revolutionary computational capabilities for enterprise"
    },
    {
      name: "Edge AI Research",
      description: "Developing AI models optimized for edge computing environments",
      focus: "Federated learning and privacy-preserving AI",
      team: 8,
      projects: 5,
      publications: 18,
      partnerships: ["NVIDIA", "Intel", "Stanford AI Lab"],
      timeline: "2023-2026",
      budget: "$3.2M",
      expectedImpact: "Real-time AI at the edge with privacy guarantees"
    },
    {
      name: "Sustainable Tech Initiative",
      description: "Green computing solutions for carbon-neutral enterprise operations",
      focus: "Energy-efficient algorithms and carbon tracking",
      team: 5,
      projects: 4,
      publications: 8,
      partnerships: ["Greenpeace", "Carbon Trust", "Berkeley"],
      timeline: "2023-2025",
      budget: "$1.8M",
      expectedImpact: "50% reduction in enterprise computing carbon footprint"
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesTech = selectedTech === 'all' || project.techStack.includes(selectedTech);
    const matchesSearch = searchQuery === '' || 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies?.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesStatus && matchesTech && matchesSearch;
  });

  const toggleProjectExpansion = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'production': return 'text-green-400 bg-green-900/20 border-green-700';
      case 'beta': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'development': return 'text-orange-400 bg-orange-900/20 border-orange-700';
      case 'planning': return 'text-purple-400 bg-purple-900/20 border-purple-700';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-700';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'enterprise': return <Building className="w-5 h-5" />;
      case 'ai-ml': return <Brain className="w-5 h-5" />;
      case 'infrastructure': return <Server className="w-5 h-5" />;
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'security': return <Shield className="w-5 h-5" />;
      case 'analytics': return <BarChart3 className="w-5 h-5" />;
      case 'opensource': return <Github className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({length: 120}).map((_, i) => (
              <div key={i} className="border-r border-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent animate-pulse" 
                     style={{animationDelay: `${i * 0.1}s`}}></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Enterprise</span>
                <span className="block text-blue-400">Innovation</span>
                <span className="block text-white">Portfolio</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                47 groundbreaking projects spanning AI, infrastructure, security, and enterprise platforms. 
                Serving 15M+ users across 150+ enterprise clients with 99.99% uptime and $100M+ in savings delivered.
              </p>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {overallMetrics.slice(0,3).map((stat, index) => (
                  <div key={index} className="text-center bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setActiveTab('featured')}
                  className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Projects
                  <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setShowMetrics(!showMetrics)}
                  className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  View Metrics
                  <BarChart3 className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* Quick Navigation */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-gray-300">Project Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {projectCategories.slice(1, 5).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="px-3 py-2 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600 hover:border-blue-400 transition-colors duration-300 flex items-center"
                    >
                      {getCategoryIcon(category.id)}
                      <span className="ml-2">{category.name} ({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Project Showcase */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Featured Project Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">project-analytics.sh</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ ./analyze-portfolio --live</div>
                  <div className="text-gray-400">✓ 47 projects across 8 categories</div>
                  <div className="text-gray-400">✓ 28 production deployments serving 15M+ users</div>
                  <div className="text-gray-400">✓ 99.99% average uptime maintained</div>
                  <div className="text-gray-400">✓ $100M+ in client savings delivered</div>
                  <div className="text-blue-400">✓ Enterprise innovation at quantum scale!</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Technology Distribution */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Code2 className="w-5 h-5 mr-2" />
                  Technology Distribution
                </h4>
                <div className="space-y-3">
                  {techStacks.slice(1, 5).map((tech) => (
                    <div key={tech.id} className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{tech.name}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-400 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${(tech.count / 47) * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-mono text-blue-400">{tech.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Overview */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Project Status
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {projectStatuses.slice(1, 5).map((status) => (
                    <div key={status.id} className={`rounded-lg p-3 border ${getStatusColor(status.id)}`}>
                      <div className="font-semibold text-sm mb-1">{status.name}</div>
                      <div className="text-2xl font-bold">{status.count}</div>
                      <div className="text-xs opacity-70">projects</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Metrics Dashboard */}
      {showMetrics && (
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Portfolio Analytics</h2>
              <p className="text-xl text-gray-400">Comprehensive metrics across our project ecosystem</p>
            </div>

            {/* Primary Metrics */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {overallMetrics.map((metric, index) => (
                <div key={index} className="bg-black border border-gray-700 rounded-lg p-8 text-center hover:border-gray-500 transition-all duration-300">
                  <div className="text-blue-400 mb-4 flex justify-center">{metric.icon}</div>
                  <div className="text-4xl font-bold text-white mb-2">{metric.number}</div>
                  <div className="text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Industry Impact */}
            <div className="bg-black border border-gray-700 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6">Industry Impact</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industryImpact.slice(0, 6).map((industry, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">{industry.industry}</h4>
                    <div className="text-2xl font-bold text-green-400 mb-2">{industry.impact}</div>
                    <div className="text-sm text-gray-400 mb-3">{industry.projects} projects</div>
                    <div className="space-y-1">
                      {industry.keyMetrics.map((metric, i) => (
                        <div key={i} className="text-xs text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <button 
                onClick={() => setShowMetrics(false)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Hide Metrics
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Technology Showcase */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technology Excellence</h2>
            <p className="text-xl text-gray-400">Cutting-edge technologies powering enterprise innovation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {technologyShowcase.map((category, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-blue-400">{category.category}</h3>
                <div className="space-y-4">
                  {category.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 bg-${tech.color}-400 rounded-full mr-3`}></div>
                        <span className="text-gray-300">{tech.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-400">{tech.projects} projects</span>
                        <span className={`px-2 py-1 text-xs rounded ${
                          tech.expertise === 'Expert' ? 'bg-green-900/20 text-green-400 border border-green-700' :
                          tech.expertise === 'Advanced' ? 'bg-blue-900/20 text-blue-400 border border-blue-700' :
                          'bg-orange-900/20 text-orange-400 border border-orange-700'
                        }`}>
                          {tech.expertise}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Browser Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Portfolio</h2>
            <p className="text-xl text-gray-400">Explore our comprehensive collection of enterprise solutions</p>
          </div>

          {/* Advanced Filters */}
          <div className="bg-black border border-gray-700 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-5 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              >
                {projectCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              >
                {projectStatuses.map((status) => (
                  <option key={status.id} value={status.id}>
                    {status.name} ({status.count})
                  </option>
                ))}
              </select>

              {/* Tech Filter */}
              <select
                value={selectedTech}
                onChange={(e) => setSelectedTech(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              >
                {techStacks.map((tech) => (
                  <option key={tech.id} value={tech.id}>
                    {tech.name} ({tech.count})
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors duration-300`}
                >
                  <Package className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500 transition-colors duration-300`}
                >
                  <FileText className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-400 ml-2">
                  {filteredProjects.length} of {projects.length}
                </span>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedCategory !== 'all' || selectedStatus !== 'all' || selectedTech !== 'all' || searchQuery) && (
              <div className="flex flex-wrap gap-2">
                {selectedCategory !== 'all' && (
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded flex items-center">
                    {projectCategories.find(c => c.id === selectedCategory)?.name}
                    <button 
                      onClick={() => setSelectedCategory('all')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
                {selectedStatus !== 'all' && (
                  <span className="px-2 py-1 bg-green-600 text-white text-xs rounded flex items-center">
                    {projectStatuses.find(s => s.id === selectedStatus)?.name}
                    <button 
                      onClick={() => setSelectedStatus('all')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
                {selectedTech !== 'all' && (
                  <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded flex items-center">
                    {techStacks.find(t => t.id === selectedTech)?.name}
                    <button 
                      onClick={() => setSelectedTech('all')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-1 bg-orange-600 text-white text-xs rounded flex items-center">
                    Search: "{searchQuery}"
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Projects Grid/List */}
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 group">
                
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">{getCategoryIcon(project.category)}</div>
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">{project.name}</h3>
                        <div className="flex items-center space-x-3 mt-1">
                          <span className={`px-2 py-1 text-xs rounded border ${getStatusColor(project.status)}`}>
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </span>
                          <span className="text-gray-500 text-sm">
                            {projectCategories.find(c => c.id === project.category)?.name}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleProjectExpansion(project.id)}
                      className="p-2 border border-gray-600 rounded-lg text-sm hover:border-white transition-colors duration-300"
                    >
                      {expandedProject === project.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {expandedProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, expandedProject === project.id ? undefined : 4).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                        {tech}
                      </span>
                    ))}
                    {project.technologies && project.technologies.length > 4 && expandedProject !== project.id && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Key Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.metrics).slice(0, 3).map(([key, value], index) => (
                        <div key={index} className="text-center bg-gray-900/50 rounded p-2">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Team */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">
                        Team: {project.team?.slice(0, 2).join(', ')}
                        {project.team && project.team.length > 2 && ` +${project.team.length - 2} more`}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-600 rounded hover:border-blue-400 transition-colors duration-300">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-gray-600 rounded hover:border-green-400 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedProject === project.id && (
                  <div className="border-t border-gray-700 p-6 bg-gray-900/50">
                    
                    {/* Key Features */}
                    {project.features && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-blue-400 flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Key Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <div key={index} className="text-sm text-gray-300 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Architecture */}
                    {project.architecture && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-purple-400 flex items-center">
                          <Layers className="w-4 h-4 mr-2" />
                          Architecture
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(project.architecture).map(([key, value], index) => (
                            <div key={index} className="bg-gray-800 rounded p-3">
                              <div className="text-sm font-medium text-gray-300 capitalize mb-1">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                              <div className="text-xs text-gray-400">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {project.achievements && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-yellow-400 flex items-center">
                          <Trophy className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {project.achievements.map((achievement, index) => (
                            <div key={index} className="text-sm text-gray-300 flex items-start">
                              <Award className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Case Studies */}
                    {project.caseStudies && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-green-400 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Case Studies
                        </h4>
                        <div className="space-y-4">
                          {project.caseStudies.map((study, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-4">
                              <h5 className="font-medium text-green-400 mb-2">{study.title}</h5>
                              <div className="text-sm space-y-2">
                                <div><span className="text-red-400">Challenge:</span> <span className="text-gray-300">{study.challenge}</span></div>
                                <div><span className="text-blue-400">Solution:</span> <span className="text-gray-300">{study.solution}</span></div>
                                <div><span className="text-green-400">Results:</span> <span className="text-gray-300">{study.results}</span></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Client Testimonials */}
                    {project.clientTestimonials && (
                      <div className="mb-8">
                        <h4 className="font-semibold mb-4 text-pink-400 flex items-center">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Client Testimonials
                        </h4>
                        <div className="space-y-4">
                          {project.clientTestimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-800 rounded-lg p-4 border-l-4 border-pink-400">
                              <p className="text-gray-300 italic mb-2">"{testimonial.quote}"</p>
                              <div className="text-sm">
                                <div className="text-pink-400 font-medium">{testimonial.author}</div>
                                <div className="text-gray-500">{testimonial.company}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Timeline & Metrics */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Timeline */}
                      {project.timeline && (
                        <div>
                          <h4 className="font-semibold mb-4 text-cyan-400 flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Project Timeline
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Started</span>
                              <span className="text-sm text-cyan-400">{new Date(project.timeline.started).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Launched</span>
                              <span className="text-sm text-cyan-400">{new Date(project.timeline.launched).toLocaleDateString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-400">Last Update</span>
                              <span className="text-sm text-cyan-400">{new Date(project.timeline.lastUpdate).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* All Metrics */}
                      {project.metrics && (
                        <div>
                          <h4 className="font-semibold mb-4 text-orange-400 flex items-center">
                            <BarChart3 className="w-4 h-4 mr-2" />
                            Performance Metrics
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(project.metrics).map(([key, value], index) => (
                              <div key={index} className="flex justify-between items-center">
                                <span className="text-sm text-gray-400 capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </span>
                                <span className="text-sm text-orange-400 font-mono">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No projects found matching your criteria</div>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                  setSelectedTech('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Innovation Labs */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovation Labs</h2>
            <p className="text-xl text-gray-400">Cutting-edge research driving tomorrow's enterprise solutions</p>
          </div>

          <div className="space-y-8">
            {innovationLabs.map((lab, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Lab Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2 text-blue-400">{lab.name}</h3>
                        <p className="text-gray-400 mb-4">{lab.description}</p>
                        <div className="bg-gray-800 rounded-lg p-4 mb-4">
                          <h4 className="font-medium text-green-400 mb-2">Research Focus</h4>
                          <p className="text-sm text-gray-300">{lab.focus}</p>
                        </div>
                      </div>
                    </div>

                    {/* Partnerships */}
                    <div className="mb-6">
                      <h4 className="font-medium text-purple-400 mb-3 flex items-center">
                        <Network className="w-4 h-4 mr-2" />
                        Strategic Partnerships
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {lab.partnerships.map((partner, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-900/20 text-purple-400 text-sm rounded border border-purple-700">
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expected Impact */}
                    <div className="bg-green-900/10 border border-green-700 rounded-lg p-4">
                      <h4 className="font-medium text-green-400 mb-2">Expected Impact</h4>
                      <p className="text-sm text-gray-300">{lab.expectedImpact}</p>
                    </div>
                  </div>

                  {/* Lab Stats */}
                  <div className="space-y-6">
                    <div className="bg-black border border-gray-700 rounded-lg p-6">
                      <h4 className="font-medium text-orange-400 mb-4">Lab Statistics</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Team Size</span>
                          <span className="text-orange-400 font-mono">{lab.team} members</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Active Projects</span>
                          <span className="text-orange-400 font-mono">{lab.projects}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Publications</span>
                          <span className="text-orange-400 font-mono">{lab.publications}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Timeline</span>
                          <span className="text-orange-400 font-mono">{lab.timeline}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">Investment</span>
                          <span className="text-orange-400 font-mono">{lab.budget}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-400">Industry acknowledgment of our innovation excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { award: "TechCrunch Disrupt Winner", year: "2023", project: "Enterprise Command Center", category: "Enterprise Software" },
              { award: "AI Excellence Award", year: "2023", project: "Quantum Analytics Engine", category: "Artificial Intelligence" },
              { award: "Cybersecurity Innovation", year: "2023", project: "SecureVault Pro", category: "Security Solutions" },
              { award: "Cloud Infrastructure Award", year: "2022", project: "CloudScale Infrastructure", category: "Infrastructure" },
              { award: "Mobile Excellence Award", year: "2023", project: "MobileFirst Suite", category: "Mobile Applications" },
              { award: "DevOps Innovation Prize", year: "2022", project: "DevOps Automation Hub", category: "Development Tools" },
              { award: "Data Analytics Recognition", year: "2022", project: "DataFlow Pipeline", category: "Data Processing" },
              { award: "Startup of the Year", year: "2023", project: "BuildNest Platform", category: "Overall Innovation" }
            ].map((award, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 text-center hover:border-yellow-500 transition-all duration-300 group">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-yellow-400 mb-2">{award.award}</h3>
                <div className="text-2xl font-bold text-white mb-1">{award.year}</div>
                <div className="text-sm text-gray-400 mb-2">{award.project}</div>
                <div className="text-xs text-gray-500">{award.category}</div>
              </div>
            ))}
          </div>

          {/* Press Coverage */}
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Press Coverage</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { publication: "TechCrunch", headline: "BuildNest's AI Platform Revolutionizes Enterprise Analytics", date: "Dec 2023" },
                { publication: "Forbes", headline: "The Future of Enterprise Software: BuildNest's Innovation Story", date: "Nov 2023" },
                { publication: "MIT Tech Review", headline: "Quantum-Inspired Computing Meets Enterprise Software", date: "Oct 2023" },
                { publication: "Harvard Business Review", headline: "How BuildNest Is Redefining Enterprise Automation", date: "Sep 2023" },
                { publication: "Wall Street Journal", headline: "The $100M Impact: BuildNest's Enterprise Transformation", date: "Aug 2023" },
                { publication: "Wired", headline: "Inside BuildNest's Zero-Trust Security Revolution", date: "Jul 2023" }
              ].map((article, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-all duration-300">
                  <div className="text-blue-400 font-semibold mb-2">{article.publication}</div>
                  <h4 className="text-sm text-gray-300 mb-2 leading-tight">{article.headline}</h4>
                  <div className="text-xs text-gray-500">{article.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Innovation Roadmap</h2>
            <p className="text-xl text-gray-400">Upcoming projects and technologies shaping the future</p>
          </div>

          <div className="space-y-8">
            {[
              {
                quarter: "Q1 2025",
                theme: "Next-Gen AI Integration",
                projects: [
                  "Advanced GPT-5 Integration Across All Platforms",
                  "Real-time Code Generation and Review Assistant",
                  "Autonomous Bug Detection and Resolution System",
                  "Natural Language Database Query Interface"
                ],
                investment: "$5.2M",
                expectedImpact: "50% reduction in development time"
              },
              {
                quarter: "Q2 2025",
                theme: "Quantum Computing Breakthrough",
                projects: [
                  "Quantum-Native Optimization Algorithms",
                  "Post-Quantum Cryptography Implementation",
                  "Quantum Machine Learning Pipeline",
                  "Hybrid Classical-Quantum Processing"
                ],
                investment: "$7.8M",
                expectedImpact: "1000x performance improvement for complex calculations"
              },
              {
                quarter: "Q3 2025",
                theme: "Extended Reality Enterprise",
                projects: [
                  "AR/VR Data Visualization Suite",
                  "Immersive Collaboration Platforms",
                  "3D Digital Twin Environments",
                  "Spatial Computing Interfaces"
                ],
                investment: "$4.1M",
                expectedImpact: "Revolutionary enterprise user experiences"
              },
              {
                quarter: "Q4 2025",
                theme: "Autonomous Enterprise",
                projects: [
                  "Self-Healing Infrastructure Systems",
                  "Autonomous Business Process Optimization",
                  "AI-Driven Strategic Decision Making",
                  "Predictive Enterprise Management"
                ],
                investment: "$6.5M",
                expectedImpact: "Fully autonomous enterprise operations"
              }
            ].map((roadmap, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8 hover:border-gray-500 transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-8 items-center">
                  
                  {/* Quarter & Theme */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{roadmap.quarter}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{roadmap.theme}</h3>
                    <div className="text-sm text-gray-400">Investment: {roadmap.investment}</div>
                  </div>

                  {/* Projects */}
                  <div className="lg:col-span-2">
                    <h4 className="font-medium text-green-400 mb-3">Key Projects</h4>
                    <div className="space-y-2">
                      {roadmap.projects.map((project, i) => (
                        <div key={i} className="text-sm text-gray-300 flex items-start">
                          <Rocket className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expected Impact */}
                  <div className="bg-black border border-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-purple-400 mb-2">Expected Impact</h4>
                    <p className="text-sm text-gray-300">{roadmap.expectedImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Summary */}
          <div className="mt-12 bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">2025 Innovation Investment</h3>
              <div className="text-4xl font-bold text-green-400">$23.6M</div>
              <p className="text-gray-400">Committed to R&D and breakthrough technologies</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">12</div>
                <div className="text-sm text-gray-400">New Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">25</div>
                <div className="text-sm text-gray-400">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">8</div>
                <div className="text-sm text-gray-400">Patent Applications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">15</div>
                <div className="text-sm text-gray-400">Industry Partnerships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source & Community */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Source Contributions</h2>
            <p className="text-xl text-gray-400">Building the future together with the developer community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "BuildNest CLI",
                description: "Enterprise-grade scaffolding and deployment tool",
                stars: "12.3k",
                forks: "2.1k",
                language: "TypeScript",
                contributors: 45,
                releases: 28,
                license: "MIT"
              },
              {
                name: "Quantum ML Framework",
                description: "Quantum-inspired machine learning algorithms",
                stars: "8.7k",
                forks: "1.4k",
                language: "Python",
                contributors: 32,
                releases: 15,
                license: "Apache 2.0"
              },
              {
                name: "SecureVault SDK",
                description: "Zero-trust security implementation toolkit",
                stars: "6.2k",
                forks: "980",
                language: "Go",
                contributors: 28,
                releases: 22,
                license: "MIT"
              },
              {
                name: "CloudScale Operator",
                description: "Kubernetes operator for intelligent scaling",
                stars: "9.1k",
                forks: "1.7k",
                language: "Go",
                contributors: 38,
                releases: 31,
                license: "Apache 2.0"
              },
              {
                name: "DataFlow Core",
                description: "Real-time data processing engine",
                stars: "7.5k",
                forks: "1.2k",
                language: "Scala",
                contributors: 29,
                releases: 18,
                license: "MIT"
              },
              {
                name: "AI Assistant Framework",
                description: "Enterprise AI assistant development platform",
                stars: "11.8k",
                forks: "2.3k",
                language: "Python",
                contributors: 52,
                releases: 25,
                license: "Apache 2.0"
              }
            ].map((project, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-blue-400">{project.name}</h3>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Language</span>
                    <span className="text-gray-300">{project.language}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Contributors</span>
                    <span className="text-gray-300">{project.contributors}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Releases</span>
                    <span className="text-gray-300">{project.releases}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">License</span>
                    <span className="text-gray-300">{project.license}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-400 text-sm">
                    <GitBranch className="w-4 h-4 mr-1" />
                    {project.forks} forks
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <Github className="w-4 h-4 mr-1" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Community Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">55.6k</div>
                <div className="text-gray-400">Total Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">224</div>
                <div className="text-gray-400">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">139</div>
                <div className="text-gray-400">Releases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">2.3M</div>
                <div className="text-gray-400">Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Innovation CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Shape the Future of Enterprise</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join our mission to revolutionize how enterprises operate, scale, and innovate. 
            Be part of projects that impact millions of users and save billions in costs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center">
              View Open Source
              <Github className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center">
              Partner With Us
              <Network className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Contact Options */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Rocket className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Project Collaboration</h4>
                <p className="text-gray-400 text-sm">projects@buildnest.tech</p>
              </div>
              <div>
                <Github className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Open Source</h4>
                <p className="text-gray-400 text-sm">github.com/buildnest</p>
              </div>
              <div>
                <Network className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Partnerships</h4>
                <p className="text-gray-400 text-sm">partners@buildnest.tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}