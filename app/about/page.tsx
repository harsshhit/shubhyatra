'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { TEAM_MEMBERS, FEATURES, generateWhatsAppUrl } from '@/lib/constants';
import { BrandName } from '@/components/BrandName';
import { Heart, Award, Users, Star, MessageCircle, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Devotion & Faith',
      description: 'We approach every pilgrimage with deep reverence and spiritual understanding, ensuring authentic experiences.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our commitment to quality service ensures comfortable and memorable spiritual journeys for all pilgrims.'
    },
    {
      icon: Users,
      title: 'Community & Care',
      description: 'We treat every pilgrim as family, providing personalized attention and care throughout their journey.'
    },
    {
      icon: Star,
      title: 'Authentic Experiences',
      description: 'We create genuine spiritual experiences that connect pilgrims with the divine essence of sacred places.'
    }
  ];

  const achievements = [
    { number: '10+', label: 'Years of Experience' },
    { number: '5000+', label: 'Happy Pilgrims' },
    { number: '50+', label: 'Sacred Destinations' },
    { number: '4.8★', label: 'Average Rating' }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <BrandName />
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted companion for spiritual journeys across India's most sacred destinations. 
              We believe that every pilgrimage should be transformative, comfortable, and deeply meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-saffron mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To make spiritual tourism accessible, comfortable, and meaningful for every seeker. 
                  We strive to create transformative pilgrimage experiences that connect travelers 
                  with the divine while ensuring their safety, comfort, and spiritual growth.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-saffron mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To be India's most trusted spiritual tourism company, known for our authentic 
                  experiences, exceptional service, and deep respect for the sacred traditions 
                  of our ancient land. We envision a world where everyone can experience the 
                  transformative power of pilgrimage.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/8078181/pexels-photo-8078181.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Spiritual Journey"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p>
                BVN Tours was born from a profound personal experience during a pilgrimage to Kedarnath in 2014. 
                Our founder, Swami Ramanand, witnessed the challenges that many pilgrims faced - from inadequate 
                facilities to lack of proper guidance about the spiritual significance of sacred sites.
              </p>
              <p>
                This experience ignited a mission to transform spiritual tourism in India. We started with a simple 
                belief: every pilgrim deserves a journey that is not just physically comfortable but also spiritually 
                enriching. Over the years, we have grown from organizing small group tours to becoming a trusted name 
                in spiritual tourism across India.
              </p>
              <p>
                Today, BVN Tours stands as a testament to the power of combining traditional wisdom with modern 
                convenience. We have helped thousands of devotees connect with the divine while ensuring their 
                safety, comfort, and spiritual growth throughout their sacred journeys.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              These fundamental principles guide everything we do and shape every experience we create for our pilgrims.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-saffron" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Our dedicated team of spiritual guides and travel experts are committed to making 
              your pilgrimage a transformative experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-saffron font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-r from-saffron to-saffron-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              These milestones reflect our commitment to serving pilgrims and spreading spiritual joy across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </h3>
                <p className="text-white/90 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Us on a Sacred Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the transformative power of pilgrimage with BVN Tours. 
              Let us guide you on a journey that will touch your soul and awaken your spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={generateWhatsAppUrl()}
                className="inline-flex items-center px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey
              </a>
              <a
                href="/packages"
                className="inline-flex items-center px-8 py-4 border-2 border-saffron text-saffron hover:bg-saffron hover:text-white font-semibold rounded-full transition-all transform hover:scale-105"
              >
                Explore Packages
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}