'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandName } from '@/components/BrandName';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.jpg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-gradient-to-b from-black to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-16 w-auto max-h-16 rounded-lg overflow-hidden">
              <Image
                src={logo}
                alt="ShubhYatra logo"
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div>
              {/* <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                <BrandName toursClassName="text-saffron" />
              </h1> */}
              {/* <p className={`text-xs -mt-1 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>Redefine Comfort</p> */}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors hover:text-saffron ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } group`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-saffron transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-saffron hover:bg-saffron-dark text-white px-6 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-saffron hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block text-center bg-saffron hover:bg-saffron-dark text-white px-3 py-2 rounded-md text-sm font-medium transition-colors mt-4"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}