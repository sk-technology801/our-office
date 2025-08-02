"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Calendar, Clock, User, Tag, TrendingUp, Code2, Rocket, Brain, Shield, ChevronRight, Eye, Heart, Share2, Filter, X } from 'lucide-react';

export default function BuildNestBlogs() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: 'All', count: 24, color: 'blue' },
    { name: 'Engineering', count: 8, color: 'green' },
    { name: 'AI & ML', count: 6, color: 'purple' },
    { name: 'DevOps', count: 4, color: 'orange' },
    { name: 'Product', count: 3, color: 'pink' },
    { name: 'Culture', count: 3, color: 'yellow' }
  ];

  const featuredPost = {
    id: 1,
    title: "Building Scalable Microservices: Lessons from 1M+ Daily Users",
    excerpt: "How we redesigned our architecture to handle explosive growth while maintaining 99.9% uptime and sub-100ms response times.",
    author: "Sarah Chen",
    role: "Principal Engineer",
    date: "2024-07-28",
    readTime: "8 min read",
    category: "Engineering",
    image: "/api/placeholder/800/400",
    views: "12.5k",
    likes: "342",
    featured: true,
    tags: ["Microservices", "Scalability", "Architecture", "Performance"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Future of AI in Enterprise Software: 5 Trends to Watch",
      excerpt: "From intelligent automation to predictive analytics, explore how AI is transforming enterprise solutions in 2024.",
      author: "Marcus Rodriguez",
      role: "AI Research Lead",
      date: "2024-07-25",
      readTime: "6 min read",
      category: "AI & ML",
      views: "8.2k",
      likes: "198",
      tags: ["AI", "Machine Learning", "Enterprise", "Trends"]
    },
    {
      id: 3,
      title: "Zero-Downtime Deployments with Kubernetes and GitOps",
      excerpt: "A comprehensive guide to implementing blue-green deployments and automated rollbacks in production environments.",
      author: "Alex Thompson",
      role: "DevOps Engineer",
      date: "2024-07-22",
      readTime: "10 min read",
      category: "DevOps",
      views: "6.8k",
      likes: "156",
      tags: ["Kubernetes", "GitOps", "DevOps", "Deployment"]
    },
    {
      id: 4,
      title: "Remote Team Culture: How We Built a Global Engineering Team",
      excerpt: "Insights from scaling our engineering team across 15 countries while maintaining productivity and team cohesion.",
      author: "Emma Wilson",
      role: "VP Engineering",
      date: "2024-07-20",
      readTime: "7 min read",
      category: "Culture",
      views: "9.1k",
      likes: "267",
      tags: ["Remote Work", "Team Culture", "Management", "Global Teams"]
    },
    {
      id: 5,
      title: "Optimizing React Performance: Advanced Techniques",
      excerpt: "Deep dive into React optimization strategies that helped us reduce bundle size by 40% and improve load times.",
      author: "David Park",
      role: "Senior Frontend Engineer",
      date: "2024-07-18",
      readTime: "12 min read",
      category: "Engineering",
      views: "5.4k",
      likes: "189",
      tags: ["React", "Performance", "Optimization", "Frontend"]
    },
    {
      id: 6,
      title: "Product-Led Growth: Data-Driven Feature Development",
      excerpt: "How we use analytics and user feedback to prioritize features that drive 300% user engagement increase.",
      author: "Lisa Chang",
      role: "Product Manager",
      date: "2024-07-15",
      readTime: "5 min read",
      category: "Product",
      views: "7.3k",
      likes: "143",
      tags: ["Product Management", "Analytics", "Growth", "UX"]
    },
    {
      id: 7,
      title: "Implementing GPT-4 in Production: A Complete Guide",
      excerpt: "From fine-tuning to deployment, learn how we integrated large language models into our enterprise platform.",
      author: "Robert Kim",
      role: "ML Engineer",
      date: "2024-07-12",
      readTime: "15 min read",
      category: "AI & ML",
      views: "11.7k",
      likes: "428",
      tags: ["GPT-4", "LLM", "Production", "Integration"]
    },
    {
      id: 8,
      title: "Security-First Development: Our DevSecOps Journey",
      excerpt: "How we embedded security into our development lifecycle and achieved SOC2 compliance without slowing down.",
      author: "Jennifer Adams",
      role: "Security Engineer",
      date: "2024-07-10",
      readTime: "9 min read",
      category: "DevOps",
      views: "4.9k",
      likes: "112",
      tags: ["Security", "DevSecOps", "Compliance", "SOC2"]
    },
    {
      id: 9,
      title: "Building Design Systems That Scale",
      excerpt: "Lessons learned from creating a unified design system used across 20+ products and 100+ components.",
      author: "Michael Torres",
      role: "Design System Lead",
      date: "2024-07-08",
      readTime: "8 min read",
      category: "Product",
      views: "6.2k",
      likes: "234",
      tags: ["Design Systems", "UI/UX", "Scalability", "Components"]
    }
  ];

  const trendingTags = [
    "Microservices", "AI", "React", "Kubernetes", "Python", "AWS", "DevOps", 
    "Machine Learning", "Security", "Performance", "Architecture", "Remote Work"
  ];

  const stats = [
    { number: "500K+", label: "Monthly Readers" },
    { number: "150", label: "Articles Published" },
    { number: "25", label: "Expert Authors" },
    { number: "4.8/5", label: "Average Rating" }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Engineering': 'bg-green-500',
      'AI & ML': 'bg-purple-500',
      'DevOps': 'bg-orange-500',
      'Product': 'bg-pink-500',
      'Culture': 'bg-yellow-500'
    };
    return colors[category] || 'bg-blue-500';
  };

  return (
    <div className="bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Engineering
                <span className="block text-blue-400">Insights & Stories</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Deep technical insights, industry trends, and behind-the-scenes stories from our engineering team building the future of enterprise software.
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
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border border-gray-600 px-8 py-4 rounded-lg font-semibold hover:border-white hover:text-white transition-all duration-300">
                  RSS Feed
                </button>
              </div>
            </div>

            {/* Right Side - Featured Article Preview */}
            <div className={`transform transition-all duration-1000 ease-out delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              
              {/* Latest Insights Terminal */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden mb-8">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">latest-insights.sh</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-400">$ ./get-latest-insights</div>
                  <div className="text-gray-400">✓ 500K+ monthly readers</div>
                  <div className="text-gray-400">✓ 25+ expert engineering authors</div>
                  <div className="text-gray-400">✓ Deep technical content weekly</div>
                  <div className="text-blue-400">✓ From microservices to AI/ML</div>
                  <div className="text-white flex items-center">
                    <span className="text-green-400">$</span>
                    <span className="ml-2 animate-pulse">|</span>
                  </div>
                </div>
              </div>

              {/* Trending Topics */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-300 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Trending Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {trendingTags.slice(0, 8).map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600 hover:border-blue-400 transition-colors duration-300 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-300">Stay Updated</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Rocket className="w-4 h-4 text-blue-400 mr-3" />
                    <span>Weekly technical deep-dives</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Brain className="w-4 h-4 text-green-400 mr-3" />
                    <span>Industry insights & trends</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-purple-400 mr-3" />
                    <span>Best practices & tutorials</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-600 rounded-lg hover:border-gray-400 transition-colors duration-300"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filters
              {showFilters ? <X className="w-4 h-4 ml-2" /> : <ChevronRight className="w-4 h-4 ml-2" />}
            </button>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mb-8 p-6 bg-gray-800 border border-gray-700 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : 'border-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
              <TrendingUp className="w-4 h-4 mr-1" />
              Featured Article
            </span>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300">
            <div className="lg:flex">
              <div className="lg:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className={`px-3 py-1 ${getCategoryColor(featuredPost.category)} text-white text-sm rounded-full mr-4`}>
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-400 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4 leading-tight hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">{featuredPost.author}</div>
                      <div className="text-sm text-gray-400">{featuredPost.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors duration-300">
                      <Heart className="w-5 h-5 mr-1" />
                      {featuredPost.likes}
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <Share2 className="w-5 h-5 mr-1" />
                      Share
                    </button>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 bg-gray-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Code2 className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <div className="text-gray-400">Featured Article Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="text-gray-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 ${getCategoryColor(post.category)} text-white text-xs rounded-full`}>
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-gray-400 space-x-2">
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-2">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{post.author}</div>
                        <div className="text-xs text-gray-400">{post.role}</div>
                      </div>
                    </div>

                    <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors duration-300">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-gray-500 text-xs">
                          +{post.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-xl text-gray-400 mb-8">
            Get the latest engineering insights, industry trends, and technical deep-dives delivered to your inbox weekly.
          </p>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300"
              />
              <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Join 50,000+ engineers. Unsubscribe anytime.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Editorial Team</h4>
              <p className="text-gray-400 text-sm">editorial@buildnest.tech</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Guest Writing</h4>
              <p className="text-gray-400 text-sm">contribute@buildnest.tech</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Publish Weekly</h4>
              <p className="text-gray-400 text-sm">Every Tuesday</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}