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
  Bluetooth, Battery, Signal, Compass, Camera, Mic, Speaker, Headphones, Radio,
  Send, User, Building2, Calendar as CalendarIcon, AlertCircle, CheckCircle2,
  Navigation, Headset, MessageSquare, Briefcase as BriefcaseIcon, Globe2
} from 'lucide-react';

export default function BuildNestContactPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedContactType, setSelectedContactType] = useState('general');
  const [selectedOffice, setSelectedOffice] = useState('headquarters');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general',
    budget: '',
    timeline: '',
    projectType: ''
  });
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [showScheduler, setShowScheduler] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'bot', message: 'Hi! I\'m Alex, your BuildNest assistant. How can I help you today?', time: '10:30 AM' }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contactTypes = [
    { 
      id: 'general', 
      name: 'General Inquiry', 
      icon: <MessageCircle className="w-5 h-5" />,
      description: 'Questions about our services and solutions',
      responseTime: '< 2 hours',
      team: 'Customer Success'
    },
    { 
      id: 'enterprise', 
      name: 'Enterprise Solutions', 
      icon: <Building className="w-5 h-5" />,
      description: 'Custom enterprise platform development',
      responseTime: '< 1 hour',
      team: 'Enterprise Sales'
    },
    { 
      id: 'technical', 
      name: 'Technical Support', 
      icon: <Settings className="w-5 h-5" />,
      description: 'Technical assistance and troubleshooting',
      responseTime: '< 30 minutes',
      team: 'Technical Support'
    },
    { 
      id: 'partnership', 
      name: 'Partnerships', 
      icon: <Network className="w-5 h-5" />,
      description: 'Strategic partnerships and integrations',
      responseTime: '< 4 hours',
      team: 'Business Development'
    },
    { 
      id: 'careers', 
      name: 'Careers', 
      icon: <Users className="w-5 h-5" />,
      description: 'Join our innovative team',
      responseTime: '< 24 hours',
      team: 'Human Resources'
    },
    { 
      id: 'media', 
      name: 'Media & Press', 
      icon: <Camera className="w-5 h-5" />,
      description: 'Press inquiries and media relations',
      responseTime: '< 6 hours',
      team: 'Marketing'
    }
  ];

  const offices = [
    {
      id: 'headquarters',
      name: 'San Francisco Headquarters',
      address: '1 Market Street, Suite 3600, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@buildnest.tech',
      timezone: 'PST (UTC-8)',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
      size: '250+ employees',
      specialties: ['AI/ML Research', 'Enterprise Solutions', 'Product Development'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 37.7749, lng: -122.4194 },
      description: 'Our flagship office houses our main R&D operations, enterprise sales team, and executive leadership.',
      facilities: ['Innovation Labs', 'Executive Briefing Center', 'Client Meeting Rooms', 'Rooftop Terrace'],
      transportation: ['BART: Embarcadero Station (2 min walk)', 'Muni: Multiple lines', 'Parking: Available'],
      nearbyLandmarks: ['Ferry Building', 'Bay Bridge', 'Financial District']
    },
    {
      id: 'newyork',
      name: 'New York City Office',
      address: '45 Rockefeller Plaza, 20th Floor, New York, NY 10111',
      phone: '+1 (212) 555-0456',
      email: 'ny@buildnest.tech',
      timezone: 'EST (UTC-5)',
      hours: 'Mon-Fri: 9:00 AM - 7:00 PM',
      size: '180+ employees',
      specialties: ['Financial Services', 'Enterprise Sales', 'Customer Success'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 40.7589, lng: -73.9851 },
      description: 'Strategic location for serving our East Coast enterprise clients and financial services sector.',
      facilities: ['Client Experience Center', 'Trading Floor Simulation', 'Executive Suites', 'Sky Lounge'],
      transportation: ['Subway: B, D, F, M to 47-50 Sts', 'Walking distance to Times Square', 'Valet parking'],
      nearbyLandmarks: ['Rockefeller Center', 'Times Square', 'Central Park']
    },
    {
      id: 'london',
      name: 'London Office',
      address: '1 Canada Square, Level 42, Canary Wharf, London E14 5AB',
      phone: '+44 20 7946 0958',
      email: 'london@buildnest.tech',
      timezone: 'GMT (UTC+0)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      size: '120+ employees',
      specialties: ['EMEA Operations', 'Financial Technology', 'Regulatory Compliance'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 51.5049, lng: -0.0197 },
      description: 'European headquarters serving EMEA markets with focus on fintech and regulatory compliance.',
      facilities: ['GDPR Compliance Center', 'European Data Center', 'Client Showcase', 'Thames View Lounge'],
      transportation: ['DLR: Canary Wharf Station', 'Jubilee Line', 'Thames Clipper'],
      nearbyLandmarks: ['Canary Wharf', 'Thames River', 'O2 Arena']
    },
    {
      id: 'singapore',
      name: 'Singapore Office',
      address: '1 Raffles Place, Level 58, Singapore 048616',
      phone: '+65 6789 1234',
      email: 'singapore@buildnest.tech',
      timezone: 'SGT (UTC+8)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      size: '95+ employees',
      specialties: ['APAC Operations', 'Manufacturing Solutions', 'Supply Chain'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 1.2841, lng: 103.8514 },
      description: 'Asia-Pacific hub focusing on manufacturing, supply chain optimization, and regional partnerships.',
      facilities: ['APAC Innovation Lab', 'Manufacturing Showcase', 'Partner Meeting Rooms', 'Marina Bay Views'],
      transportation: ['MRT: Raffles Place Station', 'Multiple bus routes', 'Marina Bay area'],
      nearbyLandmarks: ['Marina Bay Sands', 'Singapore River', 'Central Business District']
    },
    {
      id: 'toronto',
      name: 'Toronto Office',
      address: '181 Bay Street, Suite 4000, Toronto, ON M5J 2T3',
      phone: '+1 (416) 555-7890',
      email: 'toronto@buildnest.tech',
      timezone: 'EST (UTC-5)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      size: '75+ employees',
      specialties: ['AI Research', 'Healthcare Solutions', 'Government Relations'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 43.6532, lng: -79.3832 },
      description: 'Canadian operations center with strong focus on healthcare technology and government partnerships.',
      facilities: ['AI Research Lab', 'Healthcare Simulation Center', 'Government Briefing Rooms', 'CN Tower Views'],
      transportation: ['TTC: Union Station', 'GO Transit Hub', 'PATH Underground Network'],
      nearbyLandmarks: ['CN Tower', 'Rogers Centre', 'Financial District']
    },
    {
      id: 'austin',
      name: 'Austin Development Center',
      address: '301 Congress Avenue, Suite 1900, Austin, TX 78701',
      phone: '+1 (512) 555-3456',
      email: 'austin@buildnest.tech',
      timezone: 'CST (UTC-6)',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      size: '140+ employees',
      specialties: ['Cloud Infrastructure', 'DevOps', 'Open Source'],
      image: '/api/placeholder/600/400',
      coordinates: { lat: 30.2672, lng: -97.7431 },
      description: 'Development powerhouse focusing on cloud infrastructure, DevOps tools, and open source initiatives.',
      facilities: ['Cloud Command Center', 'DevOps Labs', 'Open Source Collaboration Space', 'Lady Bird Lake Views'],
      transportation: ['Multiple bus routes', 'Bike-friendly', 'Downtown parking'],
      nearbyLandmarks: ['State Capitol', 'Lady Bird Lake', 'South by Southwest venues']
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      department: 'Executive',
      email: 'sarah.chen@buildnest.tech',
      phone: '+1 (415) 555-0100',
      location: 'San Francisco',
      bio: 'Visionary leader with 15+ years in enterprise software. Former VP at Salesforce, MBA from Stanford.',
      expertise: ['Strategic Planning', 'Enterprise Sales', 'Product Vision', 'Team Leadership'],
      availability: 'By appointment only',
      languages: ['English', 'Mandarin', 'Spanish'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen_ceo'
      },
      achievements: ['Built 3 unicorn companies', 'Forbes 40 Under 40', 'MIT Tech Review Innovator'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Dr. Yuki Tanaka',
      role: 'Chief Technology Officer',
      department: 'Engineering',
      email: 'yuki.tanaka@buildnest.tech',
      phone: '+1 (415) 555-0101',
      location: 'San Francisco',
      bio: 'AI/ML pioneer with PhD from MIT. Former Principal Scientist at Google Research.',
      expertise: ['Artificial Intelligence', 'Machine Learning', 'Quantum Computing', 'Research'],
      availability: 'Tuesdays & Thursdays, 2-5 PM PST',
      languages: ['English', 'Japanese', 'Python'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/yukitanaka',
        github: 'https://github.com/ytanaka'
      },
      achievements: ['50+ published papers', 'Google AI Researcher of the Year', 'IEEE Fellow'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'VP of Enterprise Sales',
      department: 'Sales',
      email: 'marcus.rodriguez@buildnest.tech',
      phone: '+1 (415) 555-0102',
      location: 'New York',
      bio: 'Enterprise sales expert with $500M+ in closed deals. Former Director at Oracle.',
      expertise: ['Enterprise Sales', 'Strategic Partnerships', 'Customer Relations', 'Revenue Growth'],
      availability: 'Monday-Friday, 9 AM-6 PM EST',
      languages: ['English', 'Spanish', 'Portuguese'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/marcusrodriguez',
        twitter: 'https://twitter.com/marcus_sells'
      },
      achievements: ['#1 Sales Rep Oracle 2019-2021', 'President\'s Club 5 years running'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Amanda Foster',
      role: 'Chief Security Officer',
      department: 'Security',
      email: 'amanda.foster@buildnest.tech',
      phone: '+1 (415) 555-0103',
      location: 'San Francisco',
      bio: 'Cybersecurity veteran with 20+ years protecting enterprise systems. Former NSA.',
      expertise: ['Cybersecurity', 'Zero Trust Architecture', 'Compliance', 'Risk Management'],
      availability: 'By appointment, urgent security matters 24/7',
      languages: ['English', 'German'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/amandafoster'
      },
      achievements: ['CISSP Certified', 'DEF CON Speaker', 'Security Innovation Award'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Hassan Al-Rashid',
      role: 'VP of Engineering',
      department: 'Engineering',
      email: 'hassan.alrashid@buildnest.tech',
      phone: '+1 (415) 555-0104',
      location: 'Austin',
      bio: 'Infrastructure architect who scaled systems to billions of users. Former Staff Engineer at Netflix.',
      expertise: ['Cloud Infrastructure', 'DevOps', 'System Architecture', 'Scalability'],
      availability: 'Monday-Friday, 10 AM-7 PM CST',
      languages: ['English', 'Arabic', 'French'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/hassanalrashid',
        github: 'https://github.com/halrashid'
      },
      achievements: ['Kubernetes Steering Committee', 'CNCF Ambassador', 'Netflix Scale Award'],
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Lisa Wang',
      role: 'Chief Marketing Officer',
      department: 'Marketing',
      email: 'lisa.wang@buildnest.tech',
      phone: '+1 (415) 555-0105',
      location: 'San Francisco',
      bio: 'Marketing strategist who built global brands. Former CMO at Slack.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Growth Hacking', 'Content Strategy'],
      availability: 'Monday-Friday, 9 AM-6 PM PST',
      languages: ['English', 'Mandarin', 'Korean'],
      socialLinks: {
        linkedin: 'https://linkedin.com/in/lisawang',
        twitter: 'https://twitter.com/lisa_marketing'
      },
      achievements: ['Marketing Executive of the Year', 'Built 2 unicorn brand strategies'],
      image: '/api/placeholder/300/300'
    }
  ];

  const supportChannels = [
    {
      name: 'Live Chat',
      description: 'Instant support from our technical team',
      availability: '24/7',
      responseTime: '< 30 seconds',
      icon: <MessageSquare className="w-6 h-6" />,
      action: () => setShowChat(true),
      color: 'green'
    },
    {
      name: 'Video Call',
      description: 'Face-to-face consultation with experts',
      availability: 'Business hours',
      responseTime: 'Scheduled',
      icon: <Video className="w-6 h-6" />,
      action: () => setShowScheduler(true),
      color: 'blue'
    },
    {
      name: 'Phone Support',
      description: 'Direct line to our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      icon: <Phone className="w-6 h-6" />,
      action: () => window.open('tel:+14155550123'),
      color: 'purple'
    },
    {
      name: 'Email Support',
      description: 'Detailed assistance via email',
      availability: '24/7',
      responseTime: '< 1 hour',
      icon: <Mail className="w-6 h-6" />,
      action: () => window.open('mailto:support@buildnest.tech'),
      color: 'orange'
    }
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM'
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you within ' + 
          contactTypes.find(t => t.id === formData.contactType)?.responseTime);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendChatMessage = () => {
    if (chatInput.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user',
        message: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, newMessage]);
      setChatInput('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: chatMessages.length + 2,
          sender: 'bot',
          message: 'Thanks for your message! I\'m connecting you with the right team member. In the meantime, would you like to schedule a call?',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
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
                <span className="block text-white">Connect</span>
                <span className="block text-blue-400">With</span>
                <span className="block text-white">Innovation</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your enterprise? Our global team of experts is standing by 24/7 
                to discuss your vision, answer questions, and craft solutions that drive real results.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-blue-400 mb-2 flex justify-center"><Clock className="w-6 h-6" /></div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
                <div className="text-center bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-green-400 mb-2 flex justify-center"><CheckCircle className="w-6 h-6" /></div>
                  <div className="text-2xl font-bold text-white">&lt;30s</div>
                  <div className="text-sm text-gray-400">Response</div>
                </div>
                <div className="text-center bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-purple-400 mb-2 flex justify-center"><Globe className="w-6 h-6" /></div>
                  <div className="text-2xl font-bold text-white">6</div>
                  <div className="text-sm text-gray-400">Offices</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setShowChat(true)}
                  className="group bg-white text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
                >
                  Start Live Chat
                  <MessageCircle className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => setShowScheduler(true)}
                  className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  Schedule Meeting
                  <CalendarIcon className="ml-2 w-5 h-5" />
                </button>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                  <span className="font-semibold text-red-400">Critical Issue?</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  For production outages or security incidents, contact our emergency hotline:
                </p>
                <a href="tel:+14155550911" className="text-red-400 font-bold">+1 (415) 555-0911</a>
              </div>
            </div>

            {/* Right Side - Contact Terminal */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Contact Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">contact-status.sh</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ ./check-team-availability --live</div>
                  <div className="text-gray-400">✓ 24/7 Support Team: ONLINE</div>
                  <div className="text-gray-400">✓ Enterprise Sales: AVAILABLE</div>
                  <div className="text-gray-400">✓ Technical Support: RESPONDING</div>
                  <div className="text-gray-400">✓ Executive Team: BY APPOINTMENT</div>
                  <div className="text-blue-400">✓ Global offices ready to assist!</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="grid grid-cols-2 gap-4">
                {supportChannels.map((channel, index) => (
                  <div 
                    key={index}
                    onClick={channel.action}
                    className={`bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-${channel.color}-400 transition-all duration-300 group`}
                  >
                    <div className={`text-${channel.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {channel.icon}
                    </div>
                    <h4 className="font-semibold mb-1">{channel.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{channel.description}</p>
                    <div className="text-xs">
                      <div className={`text-${channel.color}-400`}>{channel.responseTime}</div>
                      <div className="text-gray-500">{channel.availability}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400">Tell us about your project and we'll connect you with the right experts</p>
          </div>

          <form onSubmit={handleFormSubmit} className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  placeholder="Acme Corporation"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Contact Type *</label>
              <select
                name="contactType"
                value={formData.contactType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
              >
                {contactTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            {selectedContactType === 'enterprise' && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-100k">Under $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="1m-5m">$1M - $5M</option>
                    <option value="over-5m">Over $5M</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (ASAP)</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="planning">Planning phase</option>
                  </select>
                </div>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                placeholder="How can we help you?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors duration-300"
                placeholder="Tell us about your project, challenges, or questions..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => setShowScheduler(true)}
                className="flex-1 border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Call Instead
                <CalendarIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Team Directory */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-400">Connect directly with our executives and department heads</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold text-blue-400 mr-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{member.role}</p>
                      <p className="text-gray-500 text-xs">{member.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Expertise Tags */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-4 p-3 bg-gray-900/50 rounded border border-gray-700">
                    <div className="text-xs text-gray-500 mb-1">Availability</div>
                    <div className="text-sm text-green-400">{member.availability}</div>
                  </div>

                  {/* Contact Options */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-600 rounded hover:border-blue-400 transition-colors duration-300">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-gray-600 rounded hover:border-green-400 transition-colors duration-300">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 border border-gray-600 rounded hover:border-purple-400 transition-colors duration-300">
                        <Linkedin className="w-4 h-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => setActiveTeamMember(activeTeamMember === member.id ? null : member.id)}
                      className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300"
                    >
                      {activeTeamMember === member.id ? 'Less Info' : 'More Info'}
                    </button>
                  </div>

                  {/* Expanded Info */}
                  {activeTeamMember === member.id && (
                    <div className="border-t border-gray-700 pt-4 space-y-4">
                      {/* Languages */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Languages</h5>
                        <div className="flex flex-wrap gap-1">
                          {member.languages.map((lang, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-900/20 text-blue-400 text-xs rounded border border-blue-700">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Key Achievements</h5>
                        <div className="space-y-1">
                          {member.achievements.map((achievement, index) => (
                            <div key={index} className="text-xs text-gray-400 flex items-start">
                              <Award className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Direct Contact */}
                      <div className="bg-gray-800 rounded p-3">
                        <h5 className="text-sm font-medium text-gray-300 mb-2">Direct Contact</h5>
                        <div className="space-y-1 text-xs">
                          <div className="flex items-center text-gray-400">
                            <Mail className="w-3 h-3 mr-2" />
                            {member.email}
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Phone className="w-3 h-3 mr-2" />
                            {member.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Schedule with Executive */}
          <div className="mt-12 text-center">
            <div className="bg-black border border-gray-700 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">Executive Briefing</h3>
              <p className="text-gray-400 mb-6">
                Schedule a strategic consultation with our executive team to discuss your enterprise transformation goals.
              </p>
              <button 
                onClick={() => setShowScheduler(true)}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
              >
                Schedule Executive Meeting
                <CalendarIcon className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Global Presence</h2>
            <p className="text-xl text-gray-400">Six strategic locations to serve you better, wherever you are</p>
          </div>

          {/* Office Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setSelectedOffice(office.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedOffice === office.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {office.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Selected Office Details */}
          {offices.filter(office => office.id === selectedOffice).map((office) => (
            <div key={office.id} className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Office Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-blue-400">{office.name}</h3>
                  <p className="text-gray-400 leading-relaxed">{office.description}</p>
                </div>

                {/* Contact Details */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <div className="text-white">{office.address}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gray-400 mr-3" />
                      <a href={`tel:${office.phone}`} className="text-blue-400 hover:text-blue-300">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gray-400 mr-3" />
                      <a href={`mailto:${office.email}`} className="text-blue-400 hover:text-blue-300">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-400 mr-3" />
                      <div className="text-white">{office.hours}</div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 text-gray-400 mr-3" />
                      <div className="text-white">{office.timezone}</div>
                    </div>
                  </div>
                </div>

                {/* Office Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{office.size}</div>
                    <div className="text-sm text-gray-400">Team Members</div>
                  </div>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{office.specialties.length}</div>
                    <div className="text-sm text-gray-400">Specialties</div>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-400">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-900/20 text-purple-400 text-sm rounded border border-purple-700">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Features & Details */}
              <div className="space-y-6">
                {/* Facilities */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-orange-400 flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    Facilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {office.facilities.map((facility, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {facility}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
                    <Navigation className="w-5 h-5 mr-2" />
                    Transportation
                  </h4>
                  <div className="space-y-2">
                    {office.transportation.map((transport, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-start">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5" />
                        {transport}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Nearby Landmarks */}
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4 text-yellow-400 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Nearby Landmarks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {office.nearbyLandmarks.map((landmark, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-900/20 text-yellow-400 text-sm rounded border border-yellow-700">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Office CTA */}
                <div className="bg-black border border-gray-700 rounded-lg p-6 text-center">
                  <h4 className="text-lg font-semibold mb-2">Visit Our Office</h4>
                  <p className="text-gray-400 text-sm mb-4">Schedule an in-person meeting at our {office.name.split(' ')[0]} location</p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                    Schedule Visit
                    <CalendarIcon className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Types Navigation */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Contact Path</h2>
            <p className="text-xl text-gray-400">Select the type of assistance you need for the fastest response</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => setSelectedContactType(type.id)}
                className={`bg-black border rounded-lg p-6 cursor-pointer transition-all duration-300 ${
                  selectedContactType === type.id 
                    ? 'border-blue-400 bg-blue-900/10' 
                    : 'border-gray-700 hover:border-gray-500'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`mr-3 ${selectedContactType === type.id ? 'text-blue-400' : 'text-gray-400'}`}>
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{type.name}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="text-green-400">{type.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Team:</span>
                    <span className="text-blue-400">{type.team}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Support Resources</h2>
            <p className="text-xl text-gray-400">Self-service options and comprehensive assistance</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Knowledge Base',
                description: 'Comprehensive documentation and guides',
                icon: <BookOpen className="w-8 h-8" />,
                articles: '500+',
                color: 'blue',
                link: '/docs'
              },
              {
                title: 'API Documentation',
                description: 'Complete API reference and examples',
                icon: <Code2 className="w-8 h-8" />,
                articles: '200+',
                color: 'green',
                link: '/api-docs'
              },
              {
                title: 'Video Tutorials',
                description: 'Step-by-step video guides',
                icon: <Play className="w-8 h-8" />,
                articles: '100+',
                color: 'purple',
                link: '/tutorials'
              },
              {
                title: 'Community Forum',
                description: 'Connect with other developers',
                icon: <Users className="w-8 h-8" />,
                articles: '10K+',
                color: 'orange',
                link: '/community'
              }
            ].map((resource, index) => (
              <div key={index} className={`bg-black border border-gray-700 rounded-lg p-6 text-center hover:border-${resource.color}-400 transition-all duration-300 group cursor-pointer`}>
                <div className={`text-${resource.color}-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{resource.description}</p>
                <div className={`text-2xl font-bold text-${resource.color}-400`}>{resource.articles}</div>
                <div className="mt-4">
                  <a href={resource.link} className={`text-${resource.color}-400 hover:text-${resource.color}-300 text-sm font-medium`}>
                    Explore Resources →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Support Channels */}
          <div className="bg-black border border-gray-700 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Direct Support Channels</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Email Support',
                  description: 'Get help via email',
                  icon: <Mail className="w-8 h-8" />,
                  responseTime: '< 1 hour',
                  color: 'blue',
                  action: () => window.location.href = 'mailto:support@buildnest.tech'
                },
                {
                  title: 'Live Chat',
                  description: 'Instant messaging support',
                  icon: <MessageSquare className="w-8 h-8" />,
                  responseTime: '< 30 seconds',
                  color: 'green',
                  action: () => setShowChat(true)
                },
                {
                  title: 'Phone Support',
                  description: 'Speak directly with our team',
                  icon: <Phone className="w-8 h-8" />,
                  responseTime: '< 2 minutes',
                  color: 'purple',
                  action: () => window.location.href = 'tel:+14155550123'
                },
                {
                  title: 'Video Call',
                  description: 'Schedule a video consultation',
                  icon: <Video className="w-8 h-8" />,
                  responseTime: 'Scheduled',
                  color: 'orange',
                  action: () => setShowScheduler(true)
                }
              ].map((channel, index) => (
                <div 
                  key={index} 
                  onClick={channel.action}
                  className={`bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-${channel.color}-400 transition-all duration-300 group cursor-pointer`}
                >
                  <div className={`text-${channel.color}-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {channel.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{channel.description}</p>
                  <div className={`text-sm text-${channel.color}-400`}>{channel.responseTime}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What's your typical response time?",
                  answer: "We respond to critical issues within 30 seconds, general inquiries within 2 hours, and enterprise requests within 1 hour during business hours."
                },
                {
                  question: "Do you offer 24/7 support?",
                  answer: "Yes! Our technical support team provides 24/7 assistance for critical issues. General support is available during business hours in each region."
                },
                {
                  question: "Can I schedule a demo?",
                  answer: "Absolutely! Use our scheduling system to book a personalized demo with our solutions architects. Demos are tailored to your specific use case."
                },
                {
                  question: "What about enterprise pricing?",
                  answer: "Enterprise pricing is customized based on your needs, scale, and requirements. Contact our enterprise sales team for a detailed quote."
                },
                {
                  question: "Do you provide implementation support?",
                  answer: "Yes, we offer full implementation support including architecture consulting, migration assistance, and dedicated customer success management."
                },
                {
                  question: "How do I report a security issue?",
                  answer: "Security issues should be reported immediately via our emergency hotline or security@buildnest.tech. We have a 24/7 security response team."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-400 mb-3">{faq.question}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Level Agreements */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Service Level Agreements</h2>
            <p className="text-xl text-gray-400">Our commitment to excellence in support and response times</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                tier: 'Standard Support',
                price: 'Included',
                features: [
                  'Business hours support (9 AM - 6 PM local time)',
                  'Email and chat support',
                  'Knowledge base access',
                  '< 4 hour response time',
                  'Community forum access'
                ],
                responseTime: '< 4 hours',
                availability: 'Business Hours',
                channels: ['Email', 'Chat', 'Forum']
              },
              {
                tier: 'Premium Support',
                price: '$500/month',
                features: [
                  'Extended hours support (7 AM - 9 PM local time)',
                  'Priority email, chat, and phone support',
                  'Video call consultations',
                  '< 1 hour response time',
                  'Dedicated slack channel',
                  'Monthly health checks'
                ],
                responseTime: '< 1 hour',
                availability: 'Extended Hours',
                channels: ['Email', 'Chat', 'Phone', 'Video', 'Slack'],
                popular: true
              },
              {
                tier: 'Enterprise Support',
                price: 'Custom',
                features: [
                  '24/7 critical issue support',
                  'Dedicated customer success manager',
                  'On-site support available',
                  '< 15 minute response time',
                  'Custom SLA agreements',
                  'Priority feature requests',
                  'Executive escalation path'
                ],
                responseTime: '< 15 minutes',
                availability: '24/7',
                channels: ['All channels', 'On-site', 'Dedicated CSM']
              }
            ].map((tier, index) => (
              <div key={index} className={`relative bg-gray-900 border rounded-lg p-8 ${tier.popular ? 'border-blue-400 scale-105' : 'border-gray-700'} transition-all duration-300`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-blue-400">{tier.price}</div>
                  {tier.price !== 'Included' && tier.price !== 'Custom' && (
                    <div className="text-gray-400 text-sm">per month</div>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-center p-2 bg-gray-800 rounded">
                      <span className="text-sm text-gray-300">Response Time</span>
                      <span className="text-green-400 font-semibold">{tier.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-800 rounded">
                      <span className="text-sm text-gray-300">Availability</span>
                      <span className="text-blue-400 font-semibold">{tier.availability}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-300">Support Channels</h4>
                    <div className="flex flex-wrap gap-1">
                      {tier.channels.map((channel, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-gray-300">Features</h4>
                    <div className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="text-sm text-gray-300 flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-gray-600 text-gray-300 hover:border-white hover:text-white'
                }`}>
                  {tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>

          {/* SLA Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">Our Performance Metrics</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { metric: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
                { metric: '< 30s', label: 'Avg Response Time', icon: <Clock className="w-6 h-6" /> },
                { metric: '98%', label: 'First Contact Resolution', icon: <CheckCircle className="w-6 h-6" /> },
                { metric: '4.9/5', label: 'Customer Satisfaction', icon: <Star className="w-6 h-6" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-blue-400 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.metric}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership & Integration */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-400">Join our ecosystem and grow together</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                type: 'Technology Partners',
                description: 'Integrate your technology with our platform',
                benefits: ['Joint go-to-market', 'Technical integration support', 'Co-marketing opportunities', 'Revenue sharing'],
                requirements: ['Proven technology solution', 'Enterprise customer base', 'Technical compatibility'],
                icon: <Network className="w-8 h-8" />,
                color: 'blue'
              },
              {
                type: 'Channel Partners',
                description: 'Resell and implement BuildNest solutions',
                benefits: ['Partner portal access', 'Sales training & certification', 'Marketing support', 'Deal registration'],
                requirements: ['Sales expertise', 'Customer success capabilities', 'Market presence'],
                icon: <BriefcaseIcon className="w-8 h-8" />,
                color: 'green'
              },
              {
                type: 'System Integrators',
                description: 'Implement and customize our solutions',
                benefits: ['Technical training', 'Implementation methodology', 'Priority support', 'Customer referrals'],
                requirements: ['Implementation expertise', 'Certified team', 'Customer references'],
                icon: <Settings className="w-8 h-8" />,
                color: 'purple'
              }
            ].map((partnership, index) => (
              <div key={index} className={`bg-black border border-gray-700 rounded-lg p-6 hover:border-${partnership.color}-400 transition-all duration-300`}>
                <div className={`text-${partnership.color}-400 mb-4 flex justify-center`}>
                  {partnership.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{partnership.type}</h3>
                <p className="text-gray-400 text-sm mb-4 text-center">{partnership.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-green-400 mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {partnership.benefits.map((benefit, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-start">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-orange-400 mb-2">Requirements</h4>
                  <div className="space-y-1">
                    {partnership.requirements.map((req, i) => (
                      <div key={i} className="text-xs text-gray-300 flex items-start">
                        <ArrowRight className="w-3 h-3 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </div>
                    ))}
                  </div>
                </div>

                <button className={`w-full bg-${partnership.color}-600 text-white py-2 rounded-lg font-semibold hover:bg-${partnership.color}-700 transition-colors duration-300`}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {/* Partner Application */}
          <div className="bg-black border border-gray-700 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">Become a Partner</h3>
              <p className="text-gray-400">Join our partner ecosystem and unlock new growth opportunities</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-blue-400">Partnership Process</h4>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Application Submission', description: 'Complete our partner application form' },
                    { step: 2, title: 'Evaluation & Review', description: 'Our partnership team reviews your application' },
                    { step: 3, title: 'Technical Assessment', description: 'Technical compatibility and integration review' },
                    { step: 4, title: 'Agreement & Onboarding', description: 'Sign partnership agreement and onboard' }
                  ].map((process, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3 flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h5 className="font-medium text-white">{process.title}</h5>
                        <p className="text-gray-400 text-sm">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-green-400">Partner Benefits</h4>
                <div className="space-y-3">
                  {[
                    'Access to partner portal and resources',
                    'Technical training and certification programs',
                    'Marketing development funds (MDF)',
                    'Sales enablement and support',
                    'Priority technical support',
                    'Co-marketing opportunities',
                    'Revenue sharing programs',
                    'Partner advisory board participation'
                  ].map((benefit, index) => (
                    <div key={index} className="text-sm text-gray-300 flex items-start">
                      <Star className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Start Partnership Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-gray-400">Your data security is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'SOC 2 Type II',
                description: 'Annual third-party security audits',
                icon: <Shield className="w-8 h-8" />,
                status: 'Certified'
              },
              {
                title: 'ISO 27001',
                description: 'International security management standard',
                icon: <Award className="w-8 h-8" />,
                status: 'Certified'
              },
              {
                title: 'GDPR Compliant',
                description: 'European data protection regulation',
                icon: <Lock className="w-8 h-8" />,
                status: 'Compliant'
              },
              {
                title: 'HIPAA Ready',
                description: 'Healthcare data protection standards',
                icon: <Heart className="w-8 h-8" />,
                status: 'Ready'
              }
            ].map((cert, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-6 text-center hover:border-green-400 transition-all duration-300">
                <div className="text-green-400 mb-4 flex justify-center">{cert.icon}</div>
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{cert.description}</p>
                <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-700">
                  {cert.status}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Security Contact Information</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-red-400">Security Incidents</h4>
                <p className="text-gray-400 text-sm mb-3">Report security vulnerabilities or incidents</p>
                <div className="space-y-1">
                  <div className="text-red-400 font-bold">+1 (415) 555-0911</div>
                  <div className="text-red-400">security@buildnest.tech</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-blue-400">Compliance</h4>
                <p className="text-gray-400 text-sm mb-3">Questions about compliance and certifications</p>
                <div className="space-y-1">
                  <div className="text-blue-400">compliance@buildnest.tech</div>
                  <div className="text-gray-500">Business hours response</div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-green-400">Documentation</h4>
                <p className="text-gray-400 text-sm mb-3">Access security documentation and reports</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded font-medium hover:bg-green-700 transition-colors duration-300">
                  Download Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact Info */}
      <footer className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">BuildNest</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Transforming enterprises through innovative technology solutions. 
                Building the future of business operations.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (415) 555-0123
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@buildnest.tech
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">About Us</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Our Projects</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Services</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Careers</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Blog</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Documentation</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">API Reference</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Community Forum</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Status Page</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 block">Security</a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on our innovations and industry insights.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l text-sm focus:border-blue-400 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors duration-300">
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 BuildNest Technologies. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Modal */}
      {showChat && (
        <div className="fixed bottom-8 right-8 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-gray-800 px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Live Chat Support</h3>
            <button 
              onClick={() => setShowChat(false)}
              className="text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                  <p>{msg.message}</p>
                  <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l text-sm focus:border-blue-400 focus:outline-none"
                onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
              />
              <button 
                onClick={sendChatMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition-colors duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scheduler Modal */}
      {showScheduler && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-md w-full overflow-hidden">
            <div className="bg-gray-800 px-6 py-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">Schedule a Meeting</h3>
              <button 
                onClick={() => setShowScheduler(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-sm focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Available Time Slots</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-2 px-3 rounded text-sm ${selectedTimeSlot === slot ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Meeting Purpose</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-sm focus:border-blue-400 focus:outline-none"
                  placeholder="Briefly describe what you'd like to discuss"
                ></textarea>
              </div>
              <button 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                onClick={() => {
                  alert(`Meeting scheduled for ${selectedTimeSlot || 'a time slot'}`);
                  setShowScheduler(false);
                }}
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}