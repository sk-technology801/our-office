

"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code, Zap, Users, Mail, Briefcase, PenTool, Sun, Moon, Palette, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('dark');

  const themes = {
    dark: {
      name: 'Dark Cyber',
      navbar: 'bg-black/90 backdrop-blur-xl border-cyan-500/20',
      navbarScrolled: 'bg-black/95 backdrop-blur-xl border-cyan-500/30 shadow-2xl shadow-cyan-500/10',
      background: 'bg-black',
      text: 'text-gray-300',
      textHover: 'hover:text-cyan-300',
      accent: 'from-cyan-400 via-blue-400 to-purple-400',
      button: 'from-cyan-500 to-blue-600',
      buttonHover: 'hover:from-blue-600 hover:to-purple-600',
      particles: 'bg-blue-400/30'
    },
    light: {
      name: 'Pure Light',
      navbar: 'bg-white/90 backdrop-blur-xl border-gray-200/50',
      navbarScrolled: 'bg-white/95 backdrop-blur-xl border-gray-300/50 shadow-2xl shadow-gray-500/10',
      background: 'bg-white',
      text: 'text-gray-700',
      textHover: 'hover:text-blue-600',
      accent: 'from-blue-600 via-purple-600 to-indigo-600',
      button: 'from-blue-500 to-purple-600',
      buttonHover: 'hover:from-purple-600 hover:to-pink-600',
      particles: 'bg-blue-600/20'
    },
    neon: {
      name: 'Neon Dreams',
      navbar: 'bg-gray-900/90 backdrop-blur-xl border-pink-500/30',
      navbarScrolled: 'bg-gray-900/95 backdrop-blur-xl border-pink-500/40 shadow-2xl shadow-pink-500/20',
      background: 'bg-gray-900',
      text: 'text-pink-300',
      textHover: 'hover:text-pink-100',
      accent: 'from-pink-400 via-purple-400 to-cyan-400',
      button: 'from-pink-500 to-purple-600',
      buttonHover: 'hover:from-purple-600 hover:to-cyan-600',
      particles: 'bg-pink-400/40'
    },
    ocean: {
      name: 'Ocean Depths',
      navbar: 'bg-blue-900/90 backdrop-blur-xl border-teal-400/30',
      navbarScrolled: 'bg-blue-900/95 backdrop-blur-xl border-teal-400/40 shadow-2xl shadow-teal-400/20',
      background: 'bg-blue-900',
      text: 'text-teal-200',
      textHover: 'hover:text-teal-100',
      accent: 'from-teal-400 via-cyan-400 to-blue-400',
      button: 'from-teal-500 to-cyan-600',
      buttonHover: 'hover:from-cyan-600 hover:to-blue-600',
      particles: 'bg-teal-400/30'
    },
    sunset: {
      name: 'Sunset Glow',
      navbar: 'bg-orange-900/90 backdrop-blur-xl border-yellow-500/30',
      navbarScrolled: 'bg-orange-900/95 backdrop-blur-xl border-yellow-500/40 shadow-2xl shadow-orange-500/20',
      background: 'bg-orange-900',
      text: 'text-orange-200',
      textHover: 'hover:text-yellow-200',
      accent: 'from-yellow-400 via-orange-400 to-red-400',
      button: 'from-orange-500 to-red-600',
      buttonHover: 'hover:from-red-600 hover:to-pink-600',
      particles: 'bg-orange-400/40'
    },
    forest: {
      name: 'Forest Magic',
      navbar: 'bg-green-900/90 backdrop-blur-xl border-emerald-500/30',
      navbarScrolled: 'bg-green-900/95 backdrop-blur-xl border-emerald-500/40 shadow-2xl shadow-emerald-500/20',
      background: 'bg-green-900',
      text: 'text-emerald-200',
      textHover: 'hover:text-emerald-100',
      accent: 'from-emerald-400 via-green-400 to-teal-400',
      button: 'from-emerald-500 to-green-600',
      buttonHover: 'hover:from-green-600 hover:to-teal-600',
      particles: 'bg-emerald-400/30'
    },
    royal: {
      name: 'Royal Purple',
      navbar: 'bg-purple-900/90 backdrop-blur-xl border-violet-500/30',
      navbarScrolled: 'bg-purple-900/95 backdrop-blur-xl border-violet-500/40 shadow-2xl shadow-purple-500/20',
      background: 'bg-purple-900',
      text: 'text-purple-200',
      textHover: 'hover:text-purple-100',
      accent: 'from-purple-400 via-violet-400 to-indigo-400',
      button: 'from-purple-500 to-indigo-600',
      buttonHover: 'hover:from-indigo-600 hover:to-blue-600',
      particles: 'bg-purple-400/30'
    }
  };

  const theme = themes[currentTheme];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: Users },
    { 
      name: 'Services', 
      href: '/services', 
      icon: Code,
     
    },
    { name: 'Projects', href: '/projects', icon: Briefcase },
    { name: 'Team', href: '/Team', icon: Users },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Careers', href: '/careers', icon: Zap },
    { name: 'Blog', href: '/blog', icon: PenTool }
  ];

  const ThemeButton = ({ themeKey, themeName, icon: Icon }) => (
    <button
      onClick={() => {
        setCurrentTheme(themeKey);
        setShowThemePanel(false);
      }}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
        currentTheme === themeKey 
          ? `bg-gradient-to-r ${theme.button} text-white shadow-lg` 
          : `${theme.text} ${theme.textHover} hover:bg-gradient-to-r hover:${theme.button} hover:text-white`
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{themeName}</span>
      {currentTheme === themeKey && (
        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
      )}
    </button>
  );

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? theme.navbarScrolled : theme.navbar
      } border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with 3D Effect */}
            {/* <div className="flex items-center space-x-4">
              <div className="relative group cursor-pointer">
                <div className={`absolute -inset-2 bg-gradient-to-r ${theme.accent} rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse`}></div>
                <div className={`relative ${scrolled ? theme.navbarScrolled : theme.navbar} backdrop-blur-xl px-6 py-3 rounded-lg border border-current/20`}>
                  <h1 className={`text-2xl font-bold bg-gradient-to-r ${theme.accent} bg-clip-text text-transparent transform hover:scale-105 transition-all duration-300`}>
                    <span className="inline-block animate-pulse">B</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.1s'}}>u</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.2s'}}>i</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.3s'}}>l</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.4s'}}>n</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.5s'}}>e</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.6s'}}>s</span>
                    <span className="inline-block animate-pulse" style={{animationDelay: '0.7s'}}>t</span>
                  </h1>
                </div>
              </div>
            </div> */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className={`relative flex items-center space-x-2 px-4 py-3 rounded-xl ${theme.text} hover:text-white transition-all duration-300 group overflow-hidden`}
                      onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      {/* Animated Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${theme.accent} opacity-10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-current/50 transition-all duration-300"></div>
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${theme.accent} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center space-x-2">
                        {Icon && <Icon className="w-4 h-4 group-hover:animate-spin transition-transform duration-300" />}
                        <span className={`font-medium text-sm tracking-wide ${theme.textHover} transition-colors duration-300`}>
                          {item.name}
                        </span>
                        {item.dropdown && (
                          <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                        )}
                      </div>

                      {/* 3D Text Shadow Effect */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                        <span className="font-bold text-current/20 text-lg transform translate-x-0.5 translate-y-0.5">
                          {item.name}
                        </span>
                      </div>
                    </a>

                    {/* Dropdown Menu */}
                    {item.dropdown && activeDropdown === item.name && (
                      <div className={`absolute top-full left-0 mt-2 w-48 ${theme.navbarScrolled} backdrop-blur-xl rounded-xl border border-current/20 shadow-2xl overflow-hidden animate-fadeIn`}>
                        <div className="py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subItem}
                              href={`#${subItem.toLowerCase().replace(' ', '-')}`}
                              className={`block px-4 py-3 text-sm ${theme.text} ${theme.textHover} hover:bg-gradient-to-r hover:${theme.accent} hover:bg-opacity-10 transition-all duration-300 transform hover:translate-x-2`}
                              style={{animationDelay: `${subIndex * 0.05}s`}}
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Theme Switcher & CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowThemePanel(!showThemePanel)}
                  className={`relative group p-3 ${theme.navbar} backdrop-blur-xl rounded-xl border border-current/20 ${theme.text} hover:text-white transition-all duration-300 hover:scale-105`}
                >
                  <Palette className="w-5 h-5 group-hover:animate-spin" />
                  <div className={`absolute -inset-1 bg-gradient-to-r ${theme.accent} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </button>

                {/* Theme Panel */}
                {showThemePanel && (
                  <div className={`absolute top-full right-0 mt-2 w-64 ${theme.navbarScrolled} backdrop-blur-xl rounded-xl border border-current/20 shadow-2xl overflow-hidden animate-fadeIn`}>
                    <div className="p-4">
                      <h3 className={`text-sm font-semibold ${theme.text} mb-3 flex items-center`}>
                        <Palette className="w-4 h-4 mr-2" />
                        Choose Theme
                      </h3>
                      <div className="space-y-2">
                        <ThemeButton themeKey="dark" themeName="Dark Cyber" icon={Moon} />
                        <ThemeButton themeKey="light" themeName="Pure Light" icon={Sun} />
                        <ThemeButton themeKey="neon" themeName="Neon Dreams" icon={Zap} />
                        <ThemeButton themeKey="ocean" themeName="Ocean Depths" icon={Monitor} />
                        <ThemeButton themeKey="sunset" themeName="Sunset Glow" icon={Sun} />
                        <ThemeButton themeKey="forest" themeName="Forest Magic" icon={Users} />
                        <ThemeButton themeKey="royal" themeName="Royal Purple" icon={Code} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className={`relative group px-6 py-3 bg-gradient-to-r ${theme.button} rounded-xl text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${theme.buttonHover.replace('hover:', '')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-shimmer"></div>
                <span className="relative z-10">Get Started</span>
                <div className={`absolute -inset-1 bg-gradient-to-r ${theme.accent} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Theme Button */}
              <button
                onClick={() => setShowThemePanel(!showThemePanel)}
                className={`p-2 rounded-xl ${theme.navbar} backdrop-blur-xl border border-current/20 ${theme.text} hover:text-white transition-all duration-300`}
              >
                <Palette className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 rounded-xl ${theme.navbar} backdrop-blur-xl border border-current/20 ${theme.text} hover:text-white transition-all duration-300`}
              >
                <div className="relative w-6 h-6">
                  <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Theme Panel */}
        {showThemePanel && (
          <div className={`lg:hidden ${theme.navbarScrolled} backdrop-blur-xl border-t border-current/20`}>
            <div className="px-4 py-4">
              <h3 className={`text-sm font-semibold ${theme.text} mb-3`}>Choose Theme</h3>
              <div className="grid grid-cols-2 gap-2">
                <ThemeButton themeKey="dark" themeName="Dark" icon={Moon} />
                <ThemeButton themeKey="light" themeName="Light" icon={Sun} />
                <ThemeButton themeKey="neon" themeName="Neon" icon={Zap} />
                <ThemeButton themeKey="ocean" themeName="Ocean" icon={Monitor} />
                <ThemeButton themeKey="sunset" themeName="Sunset" icon={Sun} />
                <ThemeButton themeKey="forest" themeName="Forest" icon={Users} />
                <ThemeButton themeKey="royal" themeName="Royal" icon={Code} />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`${theme.navbarScrolled} backdrop-blur-xl border-t border-current/20`}>
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-4 rounded-xl ${theme.text} ${theme.textHover} hover:bg-gradient-to-r hover:${theme.accent} hover:bg-opacity-10 transition-all duration-300 transform hover:translate-x-2`}
                    style={{animationDelay: `${index * 0.1}s`}}
                    onClick={() => setIsOpen(false)}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-4">
                <button className={`w-full px-6 py-3 bg-gradient-to-r ${theme.button} rounded-xl text-white font-semibold ${theme.buttonHover} transition-all duration-300`}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>



      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Navbar;