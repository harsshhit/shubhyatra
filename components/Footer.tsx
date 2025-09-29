'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, Twitter, Heart } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, generateWhatsAppUrl } from '@/lib/constants';
import { BrandName } from '@/components/BrandName';

export function Footer() {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '/' },
        { name: 'Packages', href: '/packages' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Popular Destinations',
      links: [
        { name: 'Ram Mandir Ayodhya', href: '/packages/ram-mandir-ayodhya' },
        { name: 'Varanasi Tour', href: '/packages/varanasi-spiritual-tour' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Pilgrimage Tours', href: '/packages' },
        { name: 'Group Bookings', href: '/contact' },
        { name: 'Custom Packages', href: '/contact' },
        { name: 'Helicopter Services', href: '/contact' },
      ]
    }
  ];

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    twitter: Twitter,
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-saffron to-saffron-dark rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    <BrandName toursClassName="text-saffron" />
                  </h1>
                  <p className="text-xs text-gray-400 -mt-1">Spiritual Tourism</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Embark on transformative spiritual journeys to India's most sacred destinations. 
                Experience divine blessings with comfort, safety, and authentic spiritual guidance.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-saffron mr-3" />
                  <span className="text-gray-300">{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-saffron mr-3" />
                  <span className="text-gray-300">{CONTACT_INFO.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-saffron mr-3 mt-0.5" />
                  <span className="text-gray-300">{CONTACT_INFO.address}</span>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a
                href={generateWhatsAppUrl()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center mt-6 px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-12 pt-8 border-t border-gray-800"
        >
          {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800 hover:bg-saffron rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BVN Tours. All rights reserved.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
              <span>for spiritual seekers</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}