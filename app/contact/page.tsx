'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CONTACT_INFO, SOCIAL_LINKS, generateWhatsAppUrl } from '@/lib/constants';
import { BrandName } from '@/components/BrandName';
import { 
  MapPin, Phone, Mail, MessageCircle, Clock, Send, User, 
  Calendar, Users, MessageSquare, CheckCircle, Facebook, 
  Instagram, Youtube, Twitter 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    groupSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Generate WhatsApp message
    const message = `Hello BVN Tours,\n\nI'm interested in booking a pilgrimage tour.\n\nDetails:\n- Name: ${formData.name}\n- Email: ${formData.email}\n- Phone: ${formData.phone}\n- Destination: ${formData.destination}\n- Travel Date: ${formData.travelDate}\n- Group Size: ${formData.groupSize}\n- Message: ${formData.message}\n\nPlease contact me with more information.`;
    
    setTimeout(() => {
      window.open(generateWhatsAppUrl('', message), '_blank');
    }, 1000);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses on WhatsApp',
      value: CONTACT_INFO.whatsapp,
      action: () => window.open(generateWhatsAppUrl(), '_blank'),
      color: 'bg-whatsapp hover:bg-whatsapp-dark'
    },
    {
      icon: Phone,
      title: 'Phone Call',
      description: 'Speak directly with our team',
      value: CONTACT_INFO.phone,
      action: () => window.open(`tel:${CONTACT_INFO.phone}`, '_self'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us detailed inquiries',
      value: CONTACT_INFO.email,
      action: () => window.open(`mailto:${CONTACT_INFO.email}`, '_self'),
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Holidays', hours: 'Emergency support available' }
  ];

  const destinationOptions = [
    'Kedarnath Yatra',
    'Ram Mandir Ayodhya',
    'Varanasi Spiritual Tour',
    'Somnath Dwarka Pilgrimage',
    'Char Dham Yatra',
    'Golden Triangle with Varanasi',
    'Custom Package',
    'Other'
  ];

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    twitter: Twitter,
  };

  return (
    <div className="min-h-screen bg-white"> 
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <BrandName />
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to embark on your spiritual journey? Get in touch with our expert team 
              for personalized pilgrimage planning and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-semibold text-gray-900 mb-6">{method.value}</p>
                <button
                  onClick={method.action}
                  className={`w-full px-6 py-3 ${method.color} text-white font-semibold rounded-xl transition-all transform hover:scale-105`}
                >
                  Contact Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Plan Your Pilgrimage
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you with a customized 
                pilgrimage package that suits your needs and preferences.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        placeholder="+91 86018 88830"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Destination
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a destination</option>
                        {destinationOptions.map((destination) => (
                          <option key={destination} value={destination}>
                            {destination}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Travel Date & Group Size */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Travel Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          name="travelDate"
                          value={formData.travelDate}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Group Size
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select group size</option>
                          <option value="1">Solo Traveler</option>
                          <option value="2">2 People</option>
                          <option value="3-5">3-5 People</option>
                          <option value="6-10">6-10 People</option>
                          <option value="11-20">11-20 People</option>
                          <option value="20+">20+ People</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your spiritual goals, special requirements, or any questions you have..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 bg-saffron hover:bg-saffron-dark text-white font-semibold rounded-xl transition-all transform hover:scale-105 flex items-center justify-center ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your inquiry has been received. We're redirecting you to WhatsApp 
                    where our team will respond with personalized recommendations.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-saffron hover:text-saffron-dark font-medium"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-saffron mr-3" />
                  Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-saffron/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-saffron mr-3" />
                  Visit Our Office
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {CONTACT_INFO.address}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  We welcome pilgrims to visit our office for personalized consultation 
                  and detailed trip planning. Prior appointment recommended.
                </p>
                <button className="text-saffron hover:text-saffron-dark font-medium">
                  Get Directions →
                </button>
              </div>

              {/* Social Media */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Connect With Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Follow our spiritual journeys and get inspired by fellow pilgrims' experiences.
                </p>
                <div className="flex space-x-4">
                  {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                    const Icon = socialIcons[platform as keyof typeof socialIcons];
                    return (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-100 hover:bg-saffron rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all transform hover:scale-110"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  24/7 Emergency Support
                </h3>
                <p className="text-red-800 mb-4">
                  For urgent assistance during your pilgrimage:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-red-900">
                    Emergency Hotline: +91 86018 88830
                  </p>
                  <p className="text-sm text-red-700">
                    Available 24/7 for pilgrims currently on tour
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}