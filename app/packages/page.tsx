'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { PackageCard } from '@/components/PackageCard';
import { Footer } from '@/components/Footer';
import { packages } from '@/data/packages';
import { Package } from '@/types';
import { Search, Filter, MapPin, Clock, Star } from 'lucide-react';

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Pilgrimage', name: 'Pilgrimage' },
    { id: 'Spiritual', name: 'Spiritual' },
    { id: 'Cultural', name: 'Cultural' },
    { id: 'Adventure', name: 'Adventure' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'Easy', name: 'Easy' },
    { id: 'Moderate', name: 'Moderate' },
    { id: 'Challenging', name: 'Challenging' }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured First' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'duration', name: 'Duration' }
  ];

  // Filter and sort packages
  const filteredPackages = packages
    .filter((pkg: Package) => {
      const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || pkg.category === categoryFilter;
      const matchesDifficulty = difficultyFilter === 'all' || pkg.difficulty === difficultyFilter;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    })
    .sort((a: Package, b: Package) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return a.duration.localeCompare(b.duration);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  return (
    <main className="min-h-screen bg-gray-50">
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
              Spiritual Pilgrimage Packages
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover transformative journeys to India's most sacred destinations. 
              Choose from our carefully curated pilgrimage packages designed for spiritual seekers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search packages, destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none bg-white min-w-[150px]"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Difficulty Filter */}
              <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none bg-white min-w-[120px]"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron focus:border-transparent outline-none bg-white min-w-[160px]"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredPackages.length} of {packages.length} packages
            </p>
            
            {/* Clear Filters */}
            {(searchTerm || categoryFilter !== 'all' || difficultyFilter !== 'all') && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setDifficultyFilter('all');
                }}
                className="text-saffron hover:text-saffron-dark font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No packages found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or filters to find more packages.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setDifficultyFilter('all');
                }}
                className="px-6 py-3 bg-saffron hover:bg-saffron-dark text-white rounded-xl font-medium transition-colors"
              >
                Show All Packages
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} package={pkg} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Package Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-12 h-12 text-saffron mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600">Sacred Destinations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Clock className="w-12 h-12 text-saffron mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">3-12</h3>
              <p className="text-gray-600">Days Duration</p>
            </motion.div>
            
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Star className="w-12 h-12 text-saffron mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">4.8★</h3>
              <p className="text-gray-600">Average Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}