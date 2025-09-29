'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { HeroBanner } from '@/components/HeroBanner';
import { PackageCard } from '@/components/PackageCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Footer } from '@/components/Footer';
import { packages } from '@/data/packages';
import { FEATURES, generateWhatsAppUrl } from '@/lib/constants';
import { Star, Award, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { BrandName } from '@/components/BrandName';

export default function Home() {
  const featuredPackages = packages.filter(pkg => pkg.featured).slice(0, 3);
  const stats = [
    { icon: Users, label: 'Happy Pilgrims', value: '5000+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
    { icon: Clock, label: 'Tours Completed', value: '1200+' }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Popular Pilgrimage Packages
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto mb-8"
            >
              Discover our most sought-after spiritual journeys, designed to provide 
              you with profound experiences at India's holiest destinations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} package={pkg} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/packages"
              className="inline-flex items-center px-8 py-4 bg-saffron hover:bg-saffron-dark text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose <BrandName />?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              We make your spiritual journey comfortable, safe, and truly transformative 
              with our expert guidance and comprehensive services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group hover:bg-gray-50 p-6 rounded-2xl transition-all"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let us guide you on a transformative pilgrimage to India's most sacred destinations. 
              Your spiritual awakening awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppUrl()}
                className="px-8 py-4 bg-white text-saffron font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Book on WhatsApp
              </a>
              <Link
                href="/packages"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-saffron transition-all transform hover:scale-105"
              >
                Explore Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Gallery Section */}
      <GalleryGrid />

      <Footer />
    </main> 
  );
}