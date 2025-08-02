"use client";
import React from 'react';
import { Code2, Calendar, TrendingUp, Rocket, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BuildNest</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Engineering insights and technical expertise from teams building the future of enterprise software. Deep dives, best practices, and industry trends.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">All Articles</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Categories</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Authors</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Newsletter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">RSS Feed</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-between">Engineering <span className="text-xs bg-gray-800 px-2 py-1 rounded">8</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-between">AI & ML <span className="text-xs bg-gray-800 px-2 py-1 rounded">6</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-between">DevOps <span className="text-xs bg-gray-800 px-2 py-1 rounded">4</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-between">Product <span className="text-xs bg-gray-800 px-2 py-1 rounded">3</span></a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center justify-between">Culture <span className="text-xs bg-gray-800 px-2 py-1 rounded">3</span></a></li>
              </ul>
            </div>

            {/* Quick Newsletter Signup */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">Get weekly engineering insights delivered to your inbox.</p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors duration-300 text-sm"
                />
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Rocket className="w-3 h-3 mr-2" />
                  <span>50K+ subscribers</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Shield className="w-3 h-3 mr-2" />
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 BuildNest. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Contact Us</a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>Published weekly since 2023</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span>500K+ monthly readers</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <span className="text-xs text-gray-500">Built with:</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">Next.js</span>
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-xs text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
                <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-300">
                  Status Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}