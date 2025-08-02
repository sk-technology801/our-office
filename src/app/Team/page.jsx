"use client";
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MapPin, Calendar, Award, Code2, Briefcase, Globe, Github, Linkedin, Twitter,
  Users, Brain, Zap, Shield, Rocket, Coffee, Heart, Star, TrendingUp, Target, BookOpen,
  Clock, ChevronDown, ChevronUp, Play, Pause, Volume2, VolumeX, Filter, Search, 
  Mail, Phone, MessageCircle, Video, ExternalLink, Download, Share2, Eye, ThumbsUp,
  Building, GraduationCap, Trophy, Lightbulb, Database, Cloud, Smartphone, Monitor,
  Server, Lock, Cpu, Layers, GitBranch, Terminal, Package, Settings, Activity,
  BarChart3, PieChart, LineChart, Workflow, Network, FileCode, TestTube, Wrench
} from 'lucide-react';

export default function BuildNestTeamPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMember, setExpandedMember] = useState(null);
  const [showTeamStats, setShowTeamStats] = useState(false);
  const [activeTab, setActiveTab] = useState('leadership');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const departments = [
    { id: 'all', name: 'All Teams', count: 52 },
    { id: 'leadership', name: 'Leadership', count: 6 },
    { id: 'engineering', name: 'Engineering', count: 18 },
    { id: 'product', name: 'Product & Design', count: 8 },
    { id: 'devops', name: 'DevOps & Infrastructure', count: 7 },
    { id: 'ai', name: 'AI & Machine Learning', count: 6 },
    { id: 'security', name: 'Security & Compliance', count: 4 },
    { id: 'operations', name: 'Operations', count: 3 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: 52 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 15 },
    { id: 'new-york', name: 'New York, NY', count: 12 },
    { id: 'austin', name: 'Austin, TX', count: 8 },
    { id: 'remote-us', name: 'Remote (US)', count: 10 },
    { id: 'london', name: 'London, UK', count: 4 },
    { id: 'remote-eu', name: 'Remote (EU)', count: 3 }
  ];

  const teamMembers = [
    // Leadership Team
    {
      id: 1,
      name: "Sarah Chen",
      role: "Chief Executive Officer & Founder",
      department: "leadership",
      location: "san-francisco",
      avatar: "SC",
      joinDate: "2019-01-15",
      yearsExp: 15,
      education: [
        { degree: "MBA", school: "Stanford Graduate School of Business", year: "2012" },
        { degree: "MS Computer Science", school: "MIT", year: "2008" }
      ],
      previousCompanies: ["Google", "Stripe", "Y Combinator"],
      specialties: ["Enterprise Strategy", "Product Vision", "Team Leadership", "Venture Capital"],
      achievements: [
        "Led BuildNest from startup to $50M ARR",
        "Named to Forbes 30 Under 30 (2020)",
        "Scaled team from 3 to 50+ employees",
        "Secured $25M Series A funding"
      ],
      bio: "Sarah founded BuildNest with a vision to democratize enterprise software development. With over 15 years of experience in tech leadership roles at Google and Stripe, she brings deep expertise in scaling technology companies. She's passionate about building inclusive teams and creating products that solve real business problems. Sarah holds an MBA from Stanford and MS in Computer Science from MIT.",
      expertise: ["Strategic Planning", "Product Management", "Team Building", "Fundraising"],
      languages: ["English", "Mandarin", "Spanish"],
      certifications: ["PMP", "AWS Solutions Architect"],
      socialLinks: {
        linkedin: "sarah-chen-buildnest",
        twitter: "sarahc_builds",
        github: "sarahchen"
      },
      personalInterests: ["Rock Climbing", "Sustainable Technology", "Mentoring Startups"],
      publicSpeaking: [
        "TechCrunch Disrupt 2023: The Future of Enterprise Software",
        "Web Summit 2022: Building Inclusive Tech Teams",
        "AWS re:Invent 2021: Scaling Cloud-Native Applications"
      ],
      publications: [
        "Harvard Business Review: The New Rules of Enterprise Software",
        "MIT Technology Review: AI in Enterprise Applications"
      ]
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      department: "leadership",
      location: "austin",
      avatar: "MR",
      joinDate: "2019-03-20",
      yearsExp: 18,
      education: [
        { degree: "PhD Computer Science", school: "Carnegie Mellon University", year: "2010" },
        { degree: "BS Software Engineering", school: "University of Texas at Austin", year: "2006" }
      ],
      previousCompanies: ["Netflix", "Amazon", "Microsoft"],
      specialties: ["Distributed Systems", "Cloud Architecture", "Engineering Leadership", "Performance Optimization"],
      achievements: [
        "Architected BuildNest's microservices platform",
        "Led engineering team through 10x scale growth",
        "Published 15+ papers on distributed systems",
        "Patent holder for cloud optimization algorithms"
      ],
      bio: "Marcus brings nearly two decades of experience building large-scale distributed systems. At Netflix, he led the team that rebuilt their recommendation engine, and at Amazon, he architected key components of AWS Lambda. His deep technical expertise and leadership philosophy center on empowering engineers to do their best work while maintaining the highest standards of system reliability and performance.",
      expertise: ["System Architecture", "Microservices", "Cloud Platforms", "Technical Leadership"],
      languages: ["English", "Spanish", "Portuguese"],
      certifications: ["AWS Solutions Architect Professional", "Kubernetes CKA", "Google Cloud Professional"],
      socialLinks: {
        linkedin: "marcus-rodriguez-cto",
        twitter: "mrodrigueztech",
        github: "marcusrod"
      },
      personalInterests: ["Salsa Dancing", "Open Source Contributing", "Teaching CS"],
      publicSpeaking: [
        "DockerCon 2023: Containerizing Enterprise Applications",
        "KubeCon 2022: Kubernetes at Scale",
        "Google Cloud Next 2021: Serverless Architecture Patterns"
      ],
      publications: [
        "ACM Computing Surveys: Modern Distributed System Patterns",
        "IEEE Software: Microservices Best Practices"
      ]
    },
    {
      id: 3,
      name: "Dr. Aisha Patel",
      role: "Chief Product Officer",
      department: "leadership",
      location: "new-york",
      avatar: "AP",
      joinDate: "2020-06-01",
      yearsExp: 12,
      education: [
        { degree: "PhD Human-Computer Interaction", school: "Stanford University", year: "2015" },
        { degree: "MS Design", school: "RISD", year: "2011" }
      ],
      previousCompanies: ["Apple", "IDEO", "Airbnb"],
      specialties: ["Product Strategy", "User Experience", "Design Thinking", "Product-Market Fit"],
      achievements: [
        "Led product strategy resulting in 300% user growth",
        "Designed award-winning UX for enterprise dashboard",
        "Built product team from 2 to 15 members",
        "Launched 5 major product lines"
      ],
      bio: "Dr. Patel is a product visionary with a unique blend of technical depth and design expertise. Her PhD research focused on enterprise software usability, and she's applied these insights throughout her career at Apple and Airbnb. She believes great products are born from deep user empathy combined with technical excellence. At BuildNest, she's responsible for product strategy, design, and ensuring we build solutions that truly solve customer problems.",
      expertise: ["Product Strategy", "UX Research", "Design Systems", "Customer Discovery"],
      languages: ["English", "Hindi", "Gujarati"],
      certifications: ["Certified Scrum Product Owner", "Design Thinking Certification"],
      socialLinks: {
        linkedin: "aisha-patel-cpo",
        twitter: "aishadesigns",
        github: "apatel"
      },
      personalInterests: ["Digital Art", "Mindfulness", "Social Impact Design"],
      publicSpeaking: [
        "Design + Research 2023: Enterprise UX at Scale",
        "ProductCon 2022: Building Products Users Love",
        "UX Week 2021: Research-Driven Product Decisions"
      ],
      publications: [
        "CHI 2020: Enterprise Software Usability Patterns",
        "UX Magazine: The Psychology of B2B User Interfaces"
      ]
    },
    {
      id: 4,
      name: "James Kim",
      role: "Chief Financial Officer",
      department: "leadership",
      location: "san-francisco",
      avatar: "JK",
      joinDate: "2021-09-15",
      yearsExp: 20,
      education: [
        { degree: "MBA Finance", school: "Wharton School", year: "2008" },
        { degree: "BS Economics", school: "UC Berkeley", year: "2004" }
      ],
      previousCompanies: ["Goldman Sachs", "Palantir", "Square"],
      specialties: ["Financial Strategy", "Venture Capital", "M&A", "Financial Modeling"],
      achievements: [
        "Led Series A and B funding rounds ($40M total)",
        "Implemented financial systems for 10x growth",
        "Reduced operational costs by 25%",
        "Built finance and operations team"
      ],
      bio: "James brings two decades of financial expertise from both Wall Street and Silicon Valley. At Goldman Sachs, he advised tech companies on major transactions, and at Palantir and Square, he helped scale operations through hypergrowth phases. His strategic approach to finance focuses on enabling sustainable growth while maintaining operational excellence. James is passionate about building financial foundations that support long-term success.",
      expertise: ["Financial Planning", "Investor Relations", "Risk Management", "Operations"],
      languages: ["English", "Korean", "Japanese"],
      certifications: ["CFA", "CPA"],
      socialLinks: {
        linkedin: "james-kim-cfo",
        twitter: "jamesfintech"
      },
      personalInterests: ["Golf", "Wine Collecting", "Financial Literacy Education"],
      publicSpeaking: [
        "SaaS Finance Summit 2023: Unit Economics at Scale",
        "CFO Forum 2022: Financial Planning for Tech Companies"
      ]
    },
    {
      id: 5,
      name: "Elena Vasquez",
      role: "Chief Marketing Officer",
      department: "leadership",
      location: "remote-us",
      avatar: "EV",
      joinDate: "2021-01-10",
      yearsExp: 14,
      education: [
        { degree: "MBA Marketing", school: "Northwestern Kellogg", year: "2013" },
        { degree: "BA Communications", school: "UCLA", year: "2009" }
      ],
      previousCompanies: ["HubSpot", "Salesforce", "Adobe"],
      specialties: ["B2B Marketing", "Content Strategy", "Brand Building", "Growth Marketing"],
      achievements: [
        "Grew brand awareness from 5% to 45% in target market",
        "Built marketing team of 12 specialists",
        "Launched successful thought leadership program",
        "Achieved 150% lead generation growth"
      ],
      bio: "Elena is a marketing strategist who specializes in building authentic brand connections in the enterprise software space. Her experience at HubSpot and Salesforce taught her how to create compelling narratives that resonate with technical buyers. She believes the best B2B marketing feels human and helpful, not pushy. At BuildNest, she's responsible for brand strategy, content marketing, and driving qualified pipeline for the sales team.",
      expertise: ["Brand Strategy", "Content Marketing", "Demand Generation", "Marketing Operations"],
      languages: ["English", "Spanish", "French"],
      certifications: ["Google Analytics", "HubSpot Inbound", "Salesforce Pardot"],
      socialLinks: {
        linkedin: "elena-vasquez-cmo",
        twitter: "elenamarkets"
      },
      personalInterests: ["Photography", "Travel", "Cooking"],
      publicSpeaking: [
        "MarketingProfs B2B Forum 2023: Authentic B2B Storytelling",
        "Content Marketing World 2022: Technical Content That Converts"
      ]
    },
    {
      id: 6,
      name: "David Thompson",
      role: "Chief Information Security Officer",
      department: "leadership",
      location: "london",
      avatar: "DT",
      joinDate: "2020-11-01",
      yearsExp: 16,
      education: [
        { degree: "MS Cybersecurity", school: "Oxford University", year: "2012" },
        { degree: "BS Computer Science", school: "Imperial College London", year: "2008" }
      ],
      previousCompanies: ["GCHQ", "Cloudflare", "CrowdStrike"],
      specialties: ["Enterprise Security", "Compliance", "Threat Intelligence", "Security Architecture"],
      achievements: [
        "Achieved SOC2 Type II and ISO 27001 certification",
        "Built zero-trust security architecture",
        "Reduced security incidents by 90%",
        "Led incident response for major security events"
      ],
      bio: "David brings extensive cybersecurity expertise from both government and private sector roles. His experience at GCHQ provided deep insights into advanced persistent threats, while his time at Cloudflare and CrowdStrike taught him how to scale security operations. He believes security should be built into every aspect of the business, not bolted on as an afterthought. At BuildNest, he ensures our enterprise clients can trust us with their most sensitive data.",
      expertise: ["Security Architecture", "Compliance Management", "Incident Response", "Risk Assessment"],
      languages: ["English", "French", "German"],
      certifications: ["CISSP", "CISM", "CEH", "AWS Security Specialty"],
      socialLinks: {
        linkedin: "david-thompson-ciso",
        twitter: "dthompsonsec"
      },
      personalInterests: ["Cycling", "Chess", "Privacy Advocacy"],
      publicSpeaking: [
        "RSA Conference 2023: Zero Trust for Enterprise Software",
        "BSides London 2022: Building Security Culture"
      ]
    },

    // Engineering Team
    {
      id: 7,
      name: "Alex Zhang",
      role: "Senior Staff Engineer",
      department: "engineering",
      location: "san-francisco",
      avatar: "AZ",
      joinDate: "2019-08-15",
      yearsExp: 12,
      education: [
        { degree: "MS Computer Science", school: "UC Berkeley", year: "2014" },
        { degree: "BS Software Engineering", school: "Tsinghua University", year: "2012" }
      ],
      previousCompanies: ["Google", "Uber"],
      specialties: ["Full-Stack Development", "System Design", "Mentoring", "Technical Architecture"],
      achievements: [
        "Designed core authentication system",
        "Mentored 15+ junior engineers",
        "Led migration to microservices architecture",
        "Reduced API response time by 60%"
      ],
      bio: "Alex is one of our most senior engineers and a key technical leader. His experience at Google and Uber gave him deep expertise in building systems at massive scale. He's passionate about clean code, mentoring junior developers, and solving complex technical challenges. Alex leads by example and is known for his thoughtful code reviews and architectural insights.",
      expertise: ["React", "Node.js", "Kubernetes", "System Design"],
      languages: ["English", "Mandarin"],
      certifications: ["AWS Solutions Architect", "Google Cloud Professional"],
      socialLinks: {
        linkedin: "alex-zhang-engineer",
        github: "alexzhang",
        twitter: "alexcodes"
      },
      personalInterests: ["Rock Climbing", "Photography", "Open Source"]
    },
    {
      id: 8,
      name: "Maya Singh",
      role: "Principal Frontend Engineer",
      department: "engineering",
      location: "new-york",
      avatar: "MS",
      joinDate: "2020-02-01",
      yearsExp: 10,
      education: [
        { degree: "MS Human-Computer Interaction", school: "Georgia Tech", year: "2016" },
        { degree: "BS Computer Science", school: "IIT Delhi", year: "2014" }
      ],
      previousCompanies: ["Facebook", "Airbnb"],
      specialties: ["Frontend Architecture", "React", "TypeScript", "Performance Optimization"],
      achievements: [
        "Built component library used across all products",
        "Improved frontend performance by 40%",
        "Led accessibility compliance initiative",
        "Spoke at 8 major conferences"
      ],
      bio: "Maya is our frontend architecture expert with a passion for creating delightful user experiences. Her background in HCI gives her unique insights into user behavior, which she applies to build interfaces that are both beautiful and functional. She's a strong advocate for accessibility and performance, ensuring our applications work well for everyone.",
      expertise: ["React", "TypeScript", "Accessibility", "Performance"],
      languages: ["English", "Hindi", "Punjabi"],
      certifications: ["Google UX Design", "AWS Developer"],
      socialLinks: {
        linkedin: "maya-singh-frontend",
        github: "mayasingh",
        twitter: "mayacodes"
      },
      personalInterests: ["Digital Art", "Yoga", "Teaching"]
    },
    {
      id: 9,
      name: "Roberto Silva",
      role: "Senior Backend Engineer",
      department: "engineering",
      location: "austin",
      avatar: "RS",
      joinDate: "2020-05-15",
      yearsExp: 8,
      education: [
        { degree: "MS Computer Science", school: "University of São Paulo", year: "2018" },
        { degree: "BS Software Engineering", school: "UNICAMP", year: "2016" }
      ],
      previousCompanies: ["Netflix", "Spotify"],
      specialties: ["Backend Development", "Database Design", "API Development", "Microservices"],
      achievements: [
        "Architected real-time data processing pipeline",
        "Optimized database queries reducing load by 50%",
        "Built GraphQL API serving 10M+ requests/day",
        "Led backend team of 6 engineers"
      ],
      bio: "Roberto brings expertise in building high-performance backend systems that can handle massive scale. His experience at Netflix and Spotify taught him how to build systems that never go down, even under extreme load. He's passionate about clean architecture, database optimization, and building APIs that developers love to use.",
      expertise: ["Node.js", "Python", "PostgreSQL", "GraphQL"],
      languages: ["Portuguese", "English", "Spanish"],
      certifications: ["AWS Solutions Architect", "MongoDB Certified"],
      socialLinks: {
        linkedin: "roberto-silva-backend",
        github: "robertosilva"
      },
      personalInterests: ["Football", "Music Production", "Brazilian Jiu-Jitsu"]
    },
    {
      id: 10,
      name: "Lisa Chen",
      role: "Mobile Development Lead",
      department: "engineering",
      location: "remote-us",
      avatar: "LC",
      joinDate: "2021-03-01",
      yearsExp: 9,
      education: [
        { degree: "MS Mobile Computing", school: "Stanford University", year: "2017" },
        { degree: "BS Computer Science", school: "UCLA", year: "2015" }
      ],
      previousCompanies: ["Instagram", "Snapchat"],
      specialties: ["iOS Development", "Android Development", "React Native", "Mobile Architecture"],
      achievements: [
        "Built mobile apps with 4.8+ App Store rating",
        "Led cross-platform mobile architecture",
        "Reduced app crash rate to <0.1%",
        "Mentored 5 mobile developers"
      ],
      bio: "Lisa leads our mobile development efforts with expertise in both native and cross-platform development. Her experience at Instagram and Snapchat gave her deep insights into building mobile apps that users love. She's passionate about creating smooth, intuitive mobile experiences that work perfectly across all devices.",
      expertise: ["Swift", "Kotlin", "React Native", "Mobile UX"],
      languages: ["English", "Mandarin"],
      certifications: ["iOS App Development", "Android Associate Developer"],
      socialLinks: {
        linkedin: "lisa-chen-mobile",
        github: "lisachen"
      },
      personalInterests: ["Surfing", "Mobile Photography", "UI Design"]
    },

    // Product & Design Team
    {
      id: 11,
      name: "Jordan Martinez",
      role: "Senior Product Manager",
      department: "product",
      location: "san-francisco",
      avatar: "JM",
      joinDate: "2020-07-01",
      yearsExp: 7,
      education: [
        { degree: "MBA Product Management", school: "Berkeley Haas", year: "2019" },
        { degree: "BS Industrial Engineering", school: "Stanford", year: "2017" }
      ],
      previousCompanies: ["Slack", "Zoom"],
      specialties: ["Product Strategy", "User Research", "A/B Testing", "Product Analytics"],
      achievements: [
        "Launched 3 major product features",
        "Increased user engagement by 200%",
        "Led product discovery for enterprise clients",
        "Built product roadmap for 2024-2025"
      ],
      bio: "Jordan is a strategic product thinker who excels at translating customer needs into product requirements. Their experience at Slack and Zoom taught them how to build products that scale to millions of users while maintaining simplicity. Jordan is passionate about data-driven product decisions and creating features that truly solve customer problems.",
      expertise: ["Product Strategy", "User Research", "Analytics", "Roadmapping"],
      languages: ["English", "Spanish"],
      certifications: ["Certified Scrum Product Owner", "Google Analytics"],
      socialLinks: {
        linkedin: "jordan-martinez-pm",
        twitter: "jordanpm"
      },
      personalInterests: ["Hiking", "Board Games", "Data Visualization"]
    },
    {
      id: 12,
      name: "Priya Sharma",
      role: "Senior UX Designer",
      department: "product",
      location: "new-york",
      avatar: "PS",
      joinDate: "2021-01-15",
      yearsExp: 6,
      education: [
        { degree: "MFA Interaction Design", school: "SVA", year: "2019" },
        { degree: "BFA Graphic Design", school: "RISD", year: "2017" }
      ],
      previousCompanies: ["Figma", "Adobe"],
      specialties: ["UX Design", "Design Systems", "Prototyping", "User Testing"],
      achievements: [
        "Redesigned entire admin dashboard",
        "Created comprehensive design system",
        "Improved user task completion by 45%",
        "Led design thinking workshops"
      ],
      bio: "Priya is a user-centered designer who believes great design is invisible - it just works. Her experience at Figma and Adobe taught her how to create design systems that scale across large organizations. She's passionate about accessibility, user research, and creating interfaces that feel intuitive from the first interaction.",
      expertise: ["Figma", "Design Systems", "Prototyping", "User Testing"],
      languages: ["English", "Hindi", "French"],
      certifications: ["Google UX Design", "Nielsen Norman UX"],
      socialLinks: {
        linkedin: "priya-sharma-ux",
        twitter: "priyauxdesign"
      },
      personalInterests: ["Painting", "Travel", "Sustainable Design"]
    },

    // DevOps & Infrastructure Team
    {
      id: 13,
      name: "Hassan Al-Rashid",
      role: "Principal DevOps Engineer",
      department: "devops",
      location: "remote-eu",
      avatar: "HR",
      joinDate: "2019-12-01",
      yearsExp: 11,
      education: [
        { degree: "MS Distributed Systems", school: "Technical University of Munich", year: "2015" },
        { degree: "BS Computer Engineering", school: "American University of Beirut", year: "2013" }
      ],
      previousCompanies: ["BMW", "SAP", "Zalando"],
      specialties: ["Kubernetes", "AWS", "CI/CD", "Infrastructure as Code"],
      achievements: [
        "Built auto-scaling infrastructure serving 10M+ users",
        "Reduced deployment time from 2 hours to 5 minutes",
        "Achieved 99.99% uptime SLA",
        "Led cloud migration for 50+ microservices"
      ],
      bio: "Hassan is our infrastructure expert who ensures our systems can handle anything our customers throw at them. His experience in the German automotive industry taught him the importance of reliability and precision. He's passionate about automation, monitoring, and building systems that scale effortlessly.",
      expertise: ["Kubernetes", "Docker", "Terraform", "Monitoring"],
      languages: ["Arabic", "English", "German"],
      certifications: ["CKA", "AWS Solutions Architect Professional", "Terraform Associate"],
      socialLinks: {
        linkedin: "hassan-alrashid-devops",
        github: "hassandevops"
      },
      personalInterests: ["Formula 1", "Mechanical Keyboards", "Home Automation"]
    },

    // AI & Machine Learning Team
    {
      id: 14,
      name: "Dr. Yuki Tanaka",
      role: "Principal ML Engineer",
      department: "ai",
      location: "san-francisco",
      avatar: "YT",
      joinDate: "2021-06-01",
      yearsExp: 8,
      education: [
        { degree: "PhD Machine Learning", school: "Tokyo University", year: "2018" },
        { degree: "MS Artificial Intelligence", school: "Kyoto University", year: "2016" }
      ],
      previousCompanies: ["DeepMind", "OpenAI"],
      specialties: ["Deep Learning", "NLP", "Computer Vision", "MLOps"],
      achievements: [
        "Published 20+ papers in top ML conferences",
        "Built ML platform processing 1B+ events daily",
        "Led team that won NIPS competition",
        "Patents in neural architecture search"
      ],
      bio: "Dr. Tanaka is a world-class ML researcher who brings cutting-edge AI capabilities to enterprise software. Their research at DeepMind and OpenAI focused on making AI systems more reliable and interpretable. They're passionate about responsible AI development and ensuring our ML models are fair, transparent, and beneficial.",
      expertise: ["TensorFlow", "PyTorch", "MLOps", "NLP"],
      languages: ["Japanese", "English"],
      certifications: ["Google Cloud ML Engineer", "AWS ML Specialty"],
      socialLinks: {
        linkedin: "yuki-tanaka-ml",
        github: "yukitanaka",
        twitter: "yukiml"
      },
      personalInterests: ["Go (board game)", "Robotics", "Philosophy of AI"]
    },

    // Security Team
    {
      id: 15,
      name: "Amanda Foster",
      role: "Senior Security Engineer",
      department: "security",
      location: "austin",
      avatar: "AF",
      joinDate: "2020-09-01",
      yearsExp: 9,
      education: [
        { degree: "MS Cybersecurity", school: "University of Texas at Austin", year: "2017" },
        { degree: "BS Computer Science", school: "Texas A&M", year: "2015" }
      ],
      previousCompanies: ["CrowdStrike", "Mandiant", "Rapid7"],
      specialties: ["Threat Detection", "Incident Response", "Penetration Testing", "Security Automation"],
      achievements: [
        "Detected and mitigated 200+ security threats",
        "Built automated threat detection system",
        "Led red team exercises",
        "Achieved zero successful breaches"
      ],
      bio: "Amanda is our security expert who thinks like an attacker to better defend our systems. Her experience at leading cybersecurity companies taught her how to stay ahead of evolving threats. She's passionate about building security that's both robust and usable, ensuring protection doesn't get in the way of productivity.",
      expertise: ["SIEM", "Threat Hunting", "Python", "Cloud Security"],
      languages: ["English"],
      certifications: ["CISSP", "CEH", "GCIH", "AWS Security"],
      socialLinks: {
        linkedin: "amanda-foster-security",
        github: "amandafoster",
        twitter: "amandasec"
      },
      personalInterests: ["Cybersec CTFs", "Motorcycles", "Rock Climbing"]
    }
  ];

  const companyStats = [
    { number: "52", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15", label: "Countries", icon: <Globe className="w-6 h-6" /> },
    { number: "8", label: "Departments", icon: <Building className="w-6 h-6" /> },
    { number: "4.9", label: "Glassdoor Rating", icon: <Star className="w-6 h-6" /> },
    { number: "95%", label: "Retention Rate", icon: <Heart className="w-6 h-6" /> },
    { number: "$5k", label: "Learning Budget", icon: <BookOpen className="w-6 h-6" /> }
  ];

  const teamValues = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Innovation Excellence",
      description: "We push the boundaries of what's possible in enterprise software",
      examples: ["15+ patents filed", "Cutting-edge AI integration", "Novel architecture patterns"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Culture",
      description: "Diverse perspectives create better solutions",
      examples: ["Cross-functional teams", "Open communication", "Inclusive decision making"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Move Fast, Build Right",
      description: "Rapid iteration without compromising quality",
      examples: ["Weekly deployments", "Automated testing", "Continuous feedback"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Obsession",
      description: "Every decision starts with customer impact",
      examples: ["Direct customer feedback", "Usage-driven features", "Success metrics focus"]
    }
  ];

  const diversityStats = [
    { metric: "Gender Diversity", value: "48% Women", trend: "+5% YoY" },
    { metric: "Ethnic Diversity", value: "65% Underrepresented", trend: "+8% YoY" },
    { metric: "Global Representation", value: "15 Countries", trend: "+3 countries" },
    { metric: "Leadership Diversity", value: "50% Women in Leadership", trend: "Stable" }
  ];

  const techExpertise = [
    {
      category: "Frontend Technologies",
      technologies: ["React", "Next.js", "TypeScript", "Vue.js", "Angular", "Svelte"],
      experts: 12,
      projects: 25
    },
    {
      category: "Backend Technologies", 
      technologies: ["Node.js", "Python", "Go", "Java", "Rust", "GraphQL"],
      experts: 15,
      projects: 30
    },
    {
      category: "Cloud Platforms",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      experts: 18,
      projects: 40
    },
    {
      category: "Databases",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB", "ClickHouse"],
      experts: 10,
      projects: 35
    },
    {
      category: "AI/ML Stack",
      technologies: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI API", "LangChain", "MLflow"],
      experts: 8,
      projects: 15
    },
    {
      category: "DevOps Tools",
      technologies: ["Jenkins", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "Datadog"],
      experts: 12,
      projects: 20
    }
  ];

  const teamAchievements = [
    {
      year: "2023",
      achievements: [
        "Scaled platform to serve 10M+ daily users",
        "Achieved SOC2 Type II certification",
        "Launched AI-powered analytics suite",
        "Expanded team by 40% across 5 new countries",
        "Published 25+ technical blog posts",
        "Spoke at 15+ major conferences"
      ]
    },
    {
      year: "2022", 
      achievements: [
        "Built microservices architecture serving 500+ enterprise clients",
        "Implemented zero-downtime deployment pipeline",
        "Achieved 99.99% uptime SLA",
        "Open-sourced 8 internal tools",
        "Won 3 industry awards for innovation",
        "Completed Series B funding ($25M)"
      ]
    },
    {
      year: "2021",
      achievements: [
        "Migrated entire infrastructure to Kubernetes",
        "Reduced infrastructure costs by 35%",
        "Launched mobile applications with 4.8+ rating",
        "Established European presence",
        "Filed 10 patents for core technologies",
        "Grew engineering team from 8 to 25"
      ]
    }
  ];

  const openSourceProjects = [
    {
      name: "BuildNest CLI",
      description: "Enterprise-grade scaffolding tool for modern web applications",
      stars: "2.3k",
      language: "TypeScript",
      maintainers: ["Alex Zhang", "Maya Singh"],
      lastUpdate: "2 days ago"
    },
    {
      name: "Microservice Monitor",
      description: "Real-time monitoring and alerting for distributed systems",
      stars: "1.8k", 
      language: "Go",
      maintainers: ["Hassan Al-Rashid", "Roberto Silva"],
      lastUpdate: "1 week ago"
    },
    {
      name: "Enterprise UI Kit",
      description: "React component library for enterprise applications",
      stars: "5.1k",
      language: "TypeScript",
      maintainers: ["Priya Sharma", "Maya Singh"],
      lastUpdate: "3 days ago"
    },
    {
      name: "ML Ops Pipeline",
      description: "End-to-end MLOps platform for enterprise AI deployments",
      stars: "890",
      language: "Python",
      maintainers: ["Dr. Yuki Tanaka"],
      lastUpdate: "5 days ago"
    }
  ];

  const learningInitiatives = [
    {
      program: "Tech Talk Fridays",
      description: "Weekly technical presentations by team members",
      frequency: "Weekly",
      participants: "All Engineering",
      recentTopics: ["WebAssembly in Production", "Advanced Kubernetes Patterns", "ML Model Optimization"]
    },
    {
      program: "Conference Sponsorship",
      description: "$5,000 annual budget per employee for conferences and training",
      frequency: "Annual",
      participants: "All Employees",
      recentEvents: ["AWS re:Invent", "DockerCon", "React Conf", "KubeCon"]
    },
    {
      program: "Internal Certification Program",
      description: "Company-sponsored certifications and learning paths",
      frequency: "Ongoing",
      participants: "All Technical Staff",
      certifications: ["AWS", "Google Cloud", "Kubernetes", "Security+"]
    },
    {
      program: "Mentorship Program",
      description: "Structured mentoring for career development",
      frequency: "Quarterly Cohorts",
      participants: "All Levels",
      outcomes: ["85% promotion rate", "90% satisfaction", "Strong retention"]
    }
  ];

  const workLifeBalance = [
    {
      policy: "Flexible Working Hours",
      description: "Core hours 10am-3pm, flexible outside that",
      satisfaction: "96%",
      usage: "98% of team"
    },
    {
      policy: "Unlimited PTO",
      description: "Trust-based time off with minimum 3 weeks encouraged",
      satisfaction: "94%", 
      usage: "Average 4.2 weeks taken"
    },
    {
      policy: "Remote-First Culture",
      description: "Work from anywhere with quarterly team gatherings",
      satisfaction: "92%",
      usage: "78% fully remote"
    },
    {
      policy: "Mental Health Support",
      description: "Therapy coverage and mental health days",
      satisfaction: "89%",
      usage: "65% have used"
    },
    {
      policy: "Learning Time",
      description: "20% time for learning and side projects",
      satisfaction: "91%",
      usage: "88% actively use"
    },
    {
      policy: "Home Office Stipend",
      description: "$2,000 annual budget for home office setup",
      satisfaction: "98%",
      usage: "95% utilized"
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === 'all' || member.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || member.location === selectedLocation;
    const matchesSearch = searchQuery === '' || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesDepartment && matchesLocation && matchesSearch;
  });

  const toggleMemberExpansion = (memberId) => {
    setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Meet the Minds Behind
                <span className="block text-blue-400">Enterprise Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our world-class team of 52 engineers, designers, and leaders from 15 countries, 
                united by a shared mission to revolutionize enterprise software development.
              </p>

              {/* Key Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {companyStats.slice(0,3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setActiveTab('leadership')}
                  className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
                >
                  Meet Leadership Team
                  <Users className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setShowTeamStats(!showTeamStats)}
                  className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  Team Analytics
                  <BarChart3 className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="font-semibold mb-4 text-gray-300">Quick Navigation</h4>
                <div className="flex flex-wrap gap-2">
                  {departments.slice(1, 5).map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600 hover:border-blue-400 transition-colors duration-300"
                    >
                      {dept.name} ({dept.count})
                    </button>
                  ))}
                </div>
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
                  <span className="text-gray-400 text-sm font-mono">team-analytics.sh</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ ./analyze-team --global</div>
                  <div className="text-gray-400">✓ 52 team members across 15 countries</div>
                  <div className="text-gray-400">✓ 48% women, 50% women in leadership</div>
                  <div className="text-gray-400">✓ 95% retention rate, 4.9/5 satisfaction</div>
                  <div className="text-gray-400">✓ 250+ years combined experience</div>
                  <div className="text-blue-400">✓ World-class talent density achieved!</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Department Breakdown */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Department Breakdown
                </h4>
                <div className="space-y-3">
                  {departments.slice(1, 5).map((dept) => (
                    <div key={dept.id} className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{dept.name}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-400 h-2 rounded-full" 
                            style={{width: `${(dept.count / 52) * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-mono text-blue-400">{dept.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Presence */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Global Presence
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {locations.slice(1, 5).map((location) => (
                    <div key={location.id} className="bg-gray-800 rounded-lg p-3">
                      <div className="font-semibold text-sm mb-1">{location.name.split(',')[0]}</div>
                      <div className="text-xs text-gray-400">{location.count} team members</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values & Culture */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values & Culture</h2>
            <p className="text-xl text-gray-400">The principles that guide how we work together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamValues.map((value, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <div className="text-blue-400 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{value.description}</p>
                <div className="space-y-1">
                  {value.examples.map((example, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-500">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Diversity & Inclusion Stats */}
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Diversity & Inclusion</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {diversityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300 mb-1">{stat.metric}</div>
                  <div className="text-xs text-green-400">{stat.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Browser Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">Explore profiles of our talented team members</p>
          </div>

          {/* Filters and Search */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4 mb-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search team members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
                />
              </div>

              {/* Department Filter */}
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm focus:border-blue-400 focus:outline-none"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name} ({location.count})
                  </option>
                ))}
              </select>

              {/* Results Count */}
              <div className="flex items-center justify-center text-sm text-gray-400">
                Showing {filteredMembers.length} of {teamMembers.length} members
              </div>
            </div>

            {/* Active Filters */}
            {(selectedDepartment !== 'all' || selectedLocation !== 'all' || searchQuery) && (
              <div className="flex flex-wrap gap-2">
                {selectedDepartment !== 'all' && (
                  <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded flex items-center">
                    {departments.find(d => d.id === selectedDepartment)?.name}
                    <button 
                      onClick={() => setSelectedDepartment('all')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
                {selectedLocation !== 'all' && (
                  <span className="px-2 py-1 bg-green-600 text-white text-xs rounded flex items-center">
                    {locations.find(l => l.id === selectedLocation)?.name}
                    <button 
                      onClick={() => setSelectedLocation('all')}
                      className="ml-1 hover:text-gray-300"
                    >×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded flex items-center">
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

          {/* Team Members Grid */}
          <div className="space-y-6">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      {/* Avatar */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {member.avatar}
                      </div>
                      
                      {/* Basic Info */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <div className="text-blue-400 font-medium mb-2">{member.role}</div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center">
                            <Building className="w-4 h-4 mr-1" />
                            {departments.find(d => d.id === member.department)?.name}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {locations.find(l => l.id === member.location)?.name}
                          </span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {member.yearsExp} years exp
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            Joined {new Date(member.joinDate).getFullYear()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {member.socialLinks && (
                        <div className="flex gap-2">
                          {member.socialLinks.linkedin && (
                            <button className="p-2 border border-gray-600 rounded-lg hover:border-blue-400 transition-colors duration-300">
                              <Linkedin className="w-4 h-4" />
                            </button>
                          )}
                          {member.socialLinks.github && (
                            <button className="p-2 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors duration-300">
                              <Github className="w-4 h-4" />
                            </button>
                          )}
                          {member.socialLinks.twitter && (
                            <button className="p-2 border border-gray-600 rounded-lg hover:border-blue-400 transition-colors duration-300">
                              <Twitter className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      )}
                      <button 
                        onClick={() => toggleMemberExpansion(member.id)}
                        className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:border-white transition-colors duration-300 flex items-center"
                      >
                        {expandedMember === member.id ? 'Less' : 'More'}
                        {expandedMember === member.id ? 
                          <ChevronUp className="w-4 h-4 ml-1" /> : 
                          <ChevronDown className="w-4 h-4 ml-1" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {member.specialties.slice(0, 4).map((specialty, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                          {specialty}
                        </span>
                      ))}
                      {member.specialties.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                          +{member.specialties.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bio Preview */}
                  <p className="text-gray-400 leading-relaxed">
                    {expandedMember === member.id ? member.bio : `${member.bio.substring(0, 200)}...`}
                  </p>
                  
                  {/* Expanded Content */}
                  {expandedMember === member.id && (
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* Education */}
                        <div>
                          <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2" />
                            Education
                          </h4>
                          <div className="space-y-2">
                            {member.education.map((edu, index) => (
                              <div key={index} className="text-sm">
                                <div className="font-medium text-gray-300">{edu.degree}</div>
                                <div className="text-gray-400">{edu.school}</div>
                                <div className="text-gray-500">{edu.year}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Experience */}
                        <div>
                          <h4 className="font-semibold mb-3 text-green-400 flex items-center">
                            <Briefcase className="w-4 h-4 mr-2" />
                            Previous Companies
                          </h4>
                          <div className="space-y-1">
                            {member.previousCompanies.map((company, index) => (
                              <div key={index} className="text-sm text-gray-300 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                {company}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold mb-3 text-purple-400 flex items-center">
                            <Trophy className="w-4 h-4 mr-2" />
                            Key Achievements
                          </h4>
                          <div className="space-y-1">
                            {member.achievements.slice(0, 4).map((achievement, index) => (
                              <div key={index} className="text-sm text-gray-300 flex items-start">
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technical Expertise */}
                        {member.expertise && (
                          <div>
                            <h4 className="font-semibold mb-3 text-orange-400 flex items-center">
                              <Code2 className="w-4 h-4 mr-2" />
                              Technical Expertise
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {member.expertise.map((skill, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Languages */}
                        {member.languages && (
                          <div>
                            <h4 className="font-semibold mb-3 text-cyan-400 flex items-center">
                              <Globe className="w-4 h-4 mr-2" />
                              Languages
                            </h4>
                            <div className="space-y-1">
                              {member.languages.map((language, index) => (
                                <div key={index} className="text-sm text-gray-300">{language}</div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Personal Interests */}
                        {member.personalInterests && (
                          <div>
                            <h4 className="font-semibold mb-3 text-pink-400 flex items-center">
                              <Heart className="w-4 h-4 mr-2" />
                              Personal Interests
                            </h4>
                            <div className="space-y-1">
                              {member.personalInterests.map((interest, index) => (
                                <div key={index} className="text-sm text-gray-300">{interest}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Speaking & Publications */}
                      {(member.publicSpeaking || member.publications) && (
                        <div className="mt-8 pt-6 border-t border-gray-700">
                          <div className="grid md:grid-cols-2 gap-8">
                            {member.publicSpeaking && (
                              <div>
                                <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                                  <Video className="w-4 h-4 mr-2" />
                                  Recent Speaking Engagements
                                </h4>
                                <div className="space-y-2">
                                  {member.publicSpeaking.map((event, index) => (
                                    <div key={index} className="text-sm text-gray-300 bg-gray-800 rounded p-2">
                                      {event}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {member.publications && (
                              <div>
                                <h4 className="font-semibold mb-3 text-green-400 flex items-center">
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  Publications & Research
                                </h4>
                                <div className="space-y-2">
                                  {member.publications.map((publication, index) => (
                                    <div key={index} className="text-sm text-gray-300 bg-gray-800 rounded p-2">
                                      {publication}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No team members found matching your criteria</div>
              <button 
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedLocation('all');
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

      {/* Technical Expertise Overview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-400">Our team's collective knowledge spans the entire tech stack</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techExpertise.map((category, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{category.experts}</div>
                    <div className="text-gray-400">Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{category.projects}</div>
                    <div className="text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Achievements Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Team Achievements</h2>
            <p className="text-xl text-gray-400">Major milestones and accomplishments over the years</p>
          </div>

          <div className="space-y-8">
            {teamAchievements.map((yearData, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-6">
                    {yearData.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Major Achievements</h3>
                    <p className="text-gray-400">Key milestones and breakthroughs</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {yearData.achievements.map((achievement, i) => (
                    <div key={i} className="bg-black border border-gray-700 rounded-lg p-4 hover:border-gray-500 transition-all duration-300">
                      <div className="flex items-start">
                        <Trophy className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <div className="text-sm text-gray-300">{achievement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Contributions */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Source Contributions</h2>
            <p className="text-xl text-gray-400">Projects our team maintains for the developer community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <Star className="w-4 h-4 mr-1" />
                    {project.stars}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-gray-400">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      {project.language}
                    </span>
                    <span className="text-gray-500">Updated {project.lastUpdate}</span>
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <Github className="w-4 h-4 mr-1" />
                    View
                  </button>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Maintainers:</span> {project.maintainers.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
              View All Projects
              <ExternalLink className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Learning & Development */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning & Development</h2>
            <p className="text-xl text-gray-400">How we invest in our team's continuous growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {learningInitiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{initiative.program}</h3>
                <p className="text-gray-400 text-sm mb-4">{initiative.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Frequency</div>
                    <div className="text-gray-300">{initiative.frequency}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Participants</div>
                    <div className="text-gray-300">{initiative.participants}</div>
                  </div>
                </div>

                {initiative.recentTopics && (
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Recent Topics:</div>
                    <div className="space-y-1">
                      {initiative.recentTopics.map((topic, i) => (
                        <div key={i} className="text-sm text-gray-300 flex items-center">
                          <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {initiative.recentEvents && (
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Recent Events:</div>
                    <div className="flex flex-wrap gap-1">
                      {initiative.recentEvents.map((event, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {initiative.certifications && (
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Popular Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {initiative.certifications.map((cert, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {initiative.outcomes && (
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Outcomes:</div>
                    <div className="space-y-1">
                      {initiative.outcomes.map((outcome, i) => (
                        <div key={i} className="text-sm text-green-400 flex items-center">
                          <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work-Life Balance */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work-Life Balance</h2>
            <p className="text-xl text-gray-400">Policies and benefits that support our team's well-being</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workLifeBalance.map((policy, index) => (
              <div key={index} className="bg-black border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">{policy.policy}</h3>
                <p className="text-gray-400 text-sm mb-4">{policy.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Satisfaction</span>
                    <span className="text-green-400 font-medium">{policy.satisfaction}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Usage</span>
                    <span className="text-blue-400 font-medium">{policy.usage}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Stats */}
          <div className="mt-16 bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Overall Team Satisfaction</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">4.9/5</div>
                <div className="text-gray-400">Overall Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                <div className="text-gray-400">Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                <div className="text-gray-400">Would Recommend</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">87%</div>
                <div className="text-gray-400">Work-Life Balance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats Dashboard */}
      {showTeamStats && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Team Analytics Dashboard</h2>
              <p className="text-xl text-gray-400">Deep dive into our team metrics and performance</p>
            </div>

            {/* Comprehensive Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-gray-500 transition-all duration-300">
                  <div className="text-blue-400 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Department Distribution Chart */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Department Distribution</h3>
              <div className="space-y-4">
                {departments.slice(1).map((dept, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 min-w-0 flex-1">{dept.name}</span>
                    <div className="flex items-center ml-4">
                      <div className="w-32 bg-gray-800 rounded-full h-3 mr-4">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000" 
                          style={{width: `${(dept.count / 52) * 100}%`}}
                        ></div>
                      </div>
                      <span className="text-blue-400 font-mono text-sm w-8">{dept.count}</span>
                      <span className="text-gray-500 text-sm ml-2">({Math.round((dept.count / 52) * 100)}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Geographic Distribution</h3>
                <div className="space-y-3">
                  {locations.slice(1).map((location, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">{location.name}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                          <div 
                            className="bg-green-400 h-2 rounded-full" 
                            style={{width: `${(location.count / 52) * 100}%`}}
                          ></div>
                        </div>
                        <span className="text-green-400 font-mono text-sm">{location.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-6">Experience Distribution</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">0-3 years</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-purple-400 font-mono text-sm">13</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">4-7 years</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '40%'}}></div>
                      </div>
                      <span className="text-purple-400 font-mono text-sm">21</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">8-12 years</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-purple-400 font-mono text-sm">13</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">13+ years</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-800 rounded-full h-2 mr-3">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                      <span className="text-purple-400 font-mono text-sm">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Team Performance Metrics</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">250+</div>
                  <div className="text-sm text-gray-400">Combined Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">45+</div>
                  <div className="text-sm text-gray-400">Certifications Held</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">120+</div>
                  <div className="text-sm text-gray-400">Conference Talks Given</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400 mb-1">15+</div>
                  <div className="text-sm text-gray-400">Patents Filed</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => setShowTeamStats(false)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Hide Analytics
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Join Our Team CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-400 mb-8">
            We're always looking for exceptional talent to join our mission of revolutionizing enterprise software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
              Submit General Application
            </button>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Mail className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Get in Touch</h4>
                <p className="text-gray-400 text-sm">team@buildnest.tech</p>
              </div>
              <div>
                <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Follow Our Journey</h4>
                <p className="text-gray-400 text-sm">@buildnest on social media</p>
              </div>
              <div>
                <Heart className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <h4 className="font-semibold mb-2">Culture Blog</h4>
                <p className="text-gray-400 text-sm">Read our team stories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}