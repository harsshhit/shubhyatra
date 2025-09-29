'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { packages } from '@/data/packages';
import { Package } from '@/types';
import { generateWhatsAppUrl } from '@/lib/constants';
import { 
  MapPin, Clock, Star, Users, MessageCircle, Phone, Mail, 
  CheckCircle, XCircle, Calendar, Mountain, Info, ChevronLeft, 
  ChevronRight, Heart, Share2, Camera, X
} from 'lucide-react';
import { notFound } from 'next/navigation';

interface PackageDetailsProps {
  params: {
    slug: string;
  };
}


export default function PackageDetails({ params }: PackageDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const packageData = packages.find(pkg => pkg.slug === params.slug);

  useEffect(() => {
    if (!packageData) {
      notFound();
    }
  }, [packageData]);

  if (!packageData) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % packageData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + packageData.images.length) % packageData.images.length);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'itinerary', label: 'Itinerary' },
    { id: 'inclusions', label: 'Inclusions' },
    { id: 'gallery', label: 'Gallery' }
  ];


  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
                <Image
                  src={packageData.images[currentImageIndex]}
                  alt={packageData.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* View Gallery Button */}
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="absolute bottom-4 right-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors flex items-center"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  View Gallery
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {packageData.images.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {packageData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-2 ring-saffron' : ''
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${packageData.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Package Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    packageData.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    packageData.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {packageData.difficulty}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {packageData.title}
                </h1>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-saffron mr-2" />
                    <span className="text-gray-600">{packageData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-saffron mr-2" />
                    <span className="text-gray-600">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{packageData.rating}</span>
                    <span className="text-gray-600 text-sm ml-1">({packageData.reviewCount} reviews)</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {packageData.fullDescription}
                </p>
              </div>

              {/* Booking Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-600">*All inclusive package</p>
                </div>

                {/* Booking Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={generateWhatsAppUrl(packageData.title)}
                    className="flex items-center justify-center px-6 py-3 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-xl transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book on WhatsApp
                  </a>
                  <a
                    href={`tel:+91 86018 88830`}
                    className="flex items-center justify-center px-6 py-3 bg-saffron hover:bg-saffron-dark text-white font-semibold rounded-xl transition-all transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href={`mailto:info@bvntours.com?subject=Inquiry about ${packageData.title}`}
                    className="inline-flex items-center text-saffron hover:text-saffron-dark font-medium"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-gray-100 rounded-xl p-1 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-saffron shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-8">
                  {/* Highlights */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Package Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {packageData.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Best Time to Visit */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                      <Calendar className="w-6 h-6 text-blue-600 mr-2" />
                      Best Time to Visit
                    </h3>
                    <p className="text-gray-700">{packageData.bestTime}</p>
                  </div>

                  {/* Additional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-orange-50 rounded-xl p-6">
                      <Mountain className="w-8 h-8 text-orange-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Difficulty Level</h4>
                      <p className="text-gray-600">{packageData.difficulty}</p>
                    </div>
                    <div className="bg-purple-50 rounded-xl p-6">
                      <Users className="w-8 h-8 text-purple-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Group Size</h4>
                      <p className="text-gray-600">10-25 people</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-6">
                      <Info className="w-8 h-8 text-green-600 mb-3" />
                      <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                      <p className="text-gray-600">{packageData.category}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'itinerary' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Detailed Itinerary
                  </h3>
                  <div className="space-y-6">
                    {packageData.itinerary.map((day, index) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-saffron text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                            {day.day}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-2">
                              Day {day.day}: {day.title}
                            </h4>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {day.description}
                            </p>
                            
                            {/* Activities */}
                            <div className="mb-4">
                              <h5 className="font-medium text-gray-900 mb-2">Activities:</h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {day.activities.map((activity, idx) => (
                                  <div key={idx} className="flex items-center text-sm text-gray-600">
                                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                    {activity}
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Accommodation & Meals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              {day.accommodation && (
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <span className="font-medium text-gray-900">Accommodation:</span>
                                  <p className="text-gray-600 mt-1">{day.accommodation}</p>
                                </div>
                              )}
                              <div className="bg-gray-50 rounded-lg p-3">
                                <span className="font-medium text-gray-900">Meals:</span>
                                <p className="text-gray-600 mt-1">{day.meals.join(', ')}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'inclusions' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Inclusions */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                      What's Included
                    </h3>
                    <div className="space-y-3">
                      {packageData.inclusions.map((inclusion, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exclusions */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <XCircle className="w-8 h-8 text-red-500 mr-3" />
                      What's Not Included
                    </h3>
                    <div className="space-y-3">
                      {packageData.exclusions.map((exclusion, index) => (
                        <div key={index} className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{exclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Photo Gallery
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {packageData.images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsImageModalOpen(true);
                        }}
                      >
                        <Image
                          src={image}
                          alt={`${packageData.title} ${index + 1}`}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book This Sacred Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us now to secure your spot for this transformative pilgrimage experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppUrl(packageData.title)}
                className="px-8 py-4 bg-white text-saffron font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:+91 86018 88830`}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-saffron transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <Image
                src={packageData.images[currentImageIndex]}
                alt={packageData.title}
                width={800}
                height={600}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />

              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-sm">
                {currentImageIndex + 1} / {packageData.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}