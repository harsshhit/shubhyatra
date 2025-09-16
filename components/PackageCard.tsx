'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Package } from '@/types';
import { generateWhatsAppUrl } from '@/lib/constants';
import { Clock, MapPin, Star, Users, MessageCircle, Heart, Eye } from 'lucide-react';
import { useState } from 'react';

interface PackageCardProps {
  package: Package;
  index?: number;
}

export function PackageCard({ package: pkg, index = 0 }: PackageCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Removed price calculation as we're not showing prices

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={pkg.images[0]}
          alt={pkg.title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {pkg.featured && (
            <span className="bg-saffron text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        >
          <Heart className="w-5 h-5" />
        </motion.button>

        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center text-white">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">{pkg.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-saffron transition-colors">
              {pkg.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
              pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {pkg.difficulty}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {pkg.shortDescription}
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-800 ml-1">
                {pkg.rating}
              </span>
            </div>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-600">
              {pkg.reviewCount} reviews
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-saffron" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-saffron" />
            <span className="text-sm">Group Tours</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {pkg.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start">
                <span className="w-1.5 h-1.5 bg-saffron rounded-full mt-2 mr-2 flex-shrink-0"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Plan Information */}
        <div className="mb-6">
          <div className="bg-saffron/10 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-saffron mb-2">Plan Details</h4>
            <p className="text-xs text-gray-600">
              All inclusive package - accommodation, meals, transportation and guide services included
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/packages/${pkg.slug}`}
            className="flex-1 text-center px-6 py-3 border border-saffron text-saffron hover:bg-saffron hover:text-white rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Link>
          
          <a
            href={generateWhatsAppUrl(pkg.title)}
            className="flex-1 text-center px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Book Now
          </a>
        </div>
      </div>

      {/* Hover Animation */}
      {isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 border-2 border-saffron/30 rounded-2xl pointer-events-none"
        />
      )}
    </motion.div>
  );
}