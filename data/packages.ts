import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: '1',
    slug: 'kedarnath-yatra',
    title: 'Kedarnath Dham Yatra',
    shortDescription: 'Experience the divine energy of Lord Shiva at one of the most sacred Jyotirlingas in the Himalayas.',
    fullDescription: 'Embark on a transformative spiritual journey to Kedarnath, one of the most revered pilgrimage sites in India. Nestled in the majestic Himalayas, this sacred temple dedicated to Lord Shiva offers devotees an opportunity for profound spiritual awakening. Our carefully planned itinerary ensures comfortable accommodation, guided tours, and safe transportation while maintaining the sanctity of your pilgrimage.',
    duration: '5 Days 4 Nights',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Helicopter facility available',
      'Comfortable accommodation in Guptkashi',
      'Experienced local guides',
      'VIP darshan arrangements',
      'All meals included'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Haridwar/Rishikesh',
        description: 'Pick up from railway station/airport and transfer to hotel. Evening Ganga Aarti at Har Ki Pauri.',
        activities: ['Check-in to hotel', 'Rest and freshen up', 'Evening Ganga Aarti', 'Dinner at hotel'],
        accommodation: 'Hotel in Haridwar',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Haridwar to Guptkashi',
        description: 'Early morning departure to Guptkashi via Rishikesh, Devprayag, and Rudraprayag.',
        activities: ['Early breakfast', 'Drive to Guptkashi', 'Visit Ardh Narishwar Temple', 'Check-in to hotel'],
        accommodation: 'Hotel in Guptkashi',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Guptkashi to Kedarnath',
        description: 'Drive to Gaurikund, then trek/helicopter to Kedarnath temple for darshan.',
        activities: ['Early breakfast', 'Drive to Gaurikund', 'Trek/Helicopter to Kedarnath', 'Temple darshan'],
        accommodation: 'Accommodation near Kedarnath',
        meals: ['Breakfast', 'Packed lunch', 'Dinner']
      },
      {
        day: 4,
        title: 'Kedarnath to Guptkashi',
        description: 'Morning darshan and return to Guptkashi via Gaurikund.',
        activities: ['Early morning darshan', 'Return trek/helicopter', 'Drive back to Guptkashi', 'Rest'],
        accommodation: 'Hotel in Guptkashi',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 5,
        title: 'Guptkashi to Haridwar - Departure',
        description: 'Return journey to Haridwar with drop at railway station/airport.',
        activities: ['Breakfast', 'Check-out', 'Drive to Haridwar', 'Departure'],
        meals: ['Breakfast', 'Lunch']
      }
    ],
    inclusions: [
      'Accommodation on sharing basis',
      'All meals (breakfast, lunch, dinner)',
      'Transportation by AC vehicle',
      'Experienced driver and guide',
      'All permits and entry fees',
      'First aid kit',
      'Helicopter booking assistance'
    ],
    exclusions: [
      'Personal expenses',
      'Helicopter charges (optional)',
      'Tips and gratitude',
      'Medical expenses',
      'Insurance',
      'Any activities not mentioned in itinerary'
    ],
    location: 'Uttarakhand',
    difficulty: 'Challenging',
    bestTime: 'May to October',
    category: 'Pilgrimage',
    featured: true,
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: '2',
    slug: 'ram-mandir-ayodhya',
    title: 'Ram Mandir Ayodhya Darshan',
    shortDescription: 'Visit the newly constructed Ram Mandir in Ayodhya and explore the holy city of Lord Rama.',
    fullDescription: 'Witness history in the making with a visit to the magnificent Ram Mandir in Ayodhya. This sacred journey takes you to the birthplace of Lord Rama, where the newly constructed temple stands as a testament to faith and devotion. Experience the divine atmosphere of Ayodhya, visit important religious sites, and participate in the spiritual activities that make this pilgrimage truly memorable.',
    duration: '3 Days 2 Nights',
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'VIP darshan at Ram Mandir',
      'Visit to Hanuman Garhi',
      'Boat ride on Saryu River',
      'Local cultural performances',
      'Guided heritage walk'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ayodhya',
        description: 'Arrival and check-in. Visit Hanuman Garhi temple and evening aarti at Saryu Ghat.',
        activities: ['Airport/station pickup', 'Hotel check-in', 'Hanuman Garhi visit', 'Saryu River aarti'],
        accommodation: 'Hotel in Ayodhya',
        meals: ['Lunch', 'Dinner']
      },
      {
        day: 2,
        title: 'Ram Mandir Darshan',
        description: 'Early morning darshan at Ram Mandir followed by visits to other significant temples.',
        activities: ['Ram Mandir darshan', 'Kanak Bhawan visit', 'Ram Ki Paidi', 'Cultural program'],
        accommodation: 'Hotel in Ayodhya',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Departure',
        description: 'Final temple visits and departure.',
        activities: ['Breakfast', 'Tulsi Udyan visit', 'Shopping', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    inclusions: [
      'AC accommodation',
      'All meals as per itinerary',
      'Transportation',
      'Guide services',
      'Temple entry fees',
      'Cultural program tickets'
    ],
    exclusions: [
      'Personal expenses',
      'Shopping costs',
      'Tips',
      'Travel insurance',
      'Extra activities'
    ],
    location: 'Uttar Pradesh',
    difficulty: 'Easy',
    bestTime: 'October to March',
    category: 'Pilgrimage',
    featured: true,
    rating: 4.9,
    reviewCount: 89
  },
  {
    id: '3',
    slug: 'varanasi-spiritual-tour',
    title: 'Varanasi Spiritual Experience',
    shortDescription: 'Immerse yourself in the spiritual capital of India with Ganga aarti, temple visits, and cultural experiences.',
    fullDescription: 'Discover the eternal city of Varanasi, one of the oldest continuously inhabited cities in the world. Experience the mystical atmosphere of the ghats, witness the mesmerizing Ganga aarti, visit ancient temples, and participate in spiritual rituals that have been performed for thousands of years. This journey offers a deep dive into Indian spirituality and culture.',
    duration: '4 Days 3 Nights',
    images: [
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Sunrise boat ride on Ganges',
      'Kashi Vishwanath temple darshan',
      'Evening Ganga aarti at Dashashwamedh Ghat',
      'Visit to Sarnath Buddhist site',
      'Traditional music and dance performances'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Varanasi',
        description: 'Arrival and transfer to hotel. Evening visit to Dashashwamedh Ghat for Ganga aarti.',
        activities: ['Hotel check-in', 'Rest and refreshment', 'Evening Ganga aarti', 'Dinner'],
        accommodation: 'Heritage hotel in Varanasi',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Temple Tour and Cultural Experience',
        description: 'Visit to Kashi Vishwanath temple, Annapurna temple, and cultural performances.',
        activities: ['Kashi Vishwanath darshan', 'Annapurna temple', 'Sankat Mochan temple', 'Cultural show'],
        accommodation: 'Heritage hotel in Varanasi',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Sarnath Excursion',
        description: 'Full day excursion to Sarnath, the place where Buddha delivered his first sermon.',
        activities: ['Sarnath museum', 'Dhamek Stupa', 'Chaukhandi Stupa', 'Buddhist temples'],
        accommodation: 'Heritage hotel in Varanasi',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 4,
        title: 'Sunrise and Departure',
        description: 'Early morning sunrise boat ride and departure.',
        activities: ['Sunrise boat ride', 'Breakfast', 'Last-minute shopping', 'Departure'],
        meals: ['Breakfast']
      }
    ],
    inclusions: [
      'Heritage hotel accommodation',
      'All meals as mentioned',
      'Boat rides',
      'Temple entry fees',
      'Transportation',
      'English speaking guide'
    ],
    exclusions: [
      'Camera charges at monuments',
      'Personal expenses',
      'Gratitude/tips',
      'Insurance',
      'Laundry'
    ],
    location: 'Uttar Pradesh',
    difficulty: 'Easy',
    bestTime: 'October to March',
    category: 'Spiritual',
    featured: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: '4',
    slug: 'somnath-dwarka-yatra',
    title: 'Somnath Dwarka Pilgrimage',
    shortDescription: 'Visit the sacred Jyotirlinga at Somnath and the Krishna Janmabhoomi in Dwarka.',
    fullDescription: 'Experience the divine journey to two of the most sacred places in India. Visit Somnath, home to one of the twelve Jyotirlingas, and Dwarka, the ancient kingdom of Lord Krishna. This pilgrimage combines spiritual significance with historical importance, offering devotees a chance to connect with ancient Indian traditions and mythology.',
    duration: '6 Days 5 Nights',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Darshan at Somnath Jyotirlinga',
      'Visit to Dwarkadheesh temple',
      'Beyt Dwarka island excursion',
      'Rukmani temple visit',
      'Sunset at Gomti Ghat'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Ahmedabad - Transfer to Somnath',
        description: 'Arrival at Ahmedabad airport and drive to Somnath.',
        activities: ['Airport pickup', 'Drive to Somnath', 'Hotel check-in', 'Evening temple visit'],
        accommodation: 'Hotel in Somnath',
        meals: ['Lunch', 'Dinner']
      },
      {
        day: 2,
        title: 'Somnath Temple Darshan',
        description: 'Full day exploration of Somnath temple and nearby attractions.',
        activities: ['Morning darshan', 'Temple museum visit', 'Triveni Sangam', 'Sound & light show'],
        accommodation: 'Hotel in Somnath',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Somnath to Dwarka',
        description: 'Travel to Dwarka, the ancient capital of Lord Krishna.',
        activities: ['Check-out', 'Drive to Dwarka', 'Check-in', 'Evening Dwarkadheesh darshan'],
        accommodation: 'Hotel in Dwarka',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 4,
        title: 'Dwarka Darshan',
        description: 'Full day temple visits and cultural sites in Dwarka.',
        activities: ['Dwarkadheesh temple', 'Rukmani temple', 'Gomti Ghat', 'ISKCON temple'],
        accommodation: 'Hotel in Dwarka',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 5,
        title: 'Beyt Dwarka Excursion',
        description: 'Boat trip to Beyt Dwarka island and Krishna temples.',
        activities: ['Boat ride to Beyt Dwarka', 'Island temple visits', 'Return to Dwarka', 'Free time'],
        accommodation: 'Hotel in Dwarka',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 6,
        title: 'Departure',
        description: 'Transfer to Ahmedabad for departure.',
        activities: ['Check-out', 'Drive to Ahmedabad', 'Airport drop-off'],
        meals: ['Breakfast', 'Lunch']
      }
    ],
    inclusions: [
      'AC accommodation',
      'All transfers and sightseeing',
      'Boat rides',
      'All meals',
      'Guide services',
      'Entry fees'
    ],
    exclusions: [
      'Airfare',
      'Personal expenses',
      'Insurance',
      'Tips',
      'Extra activities'
    ],
    location: 'Gujarat',
    difficulty: 'Easy',
    bestTime: 'October to March',
    category: 'Pilgrimage',
    featured: false,
    rating: 4.6,
    reviewCount: 98
  },
  {
    id: '5',
    slug: 'char-dham-yatra',
    title: 'Char Dham Yatra Complete',
    shortDescription: 'Complete pilgrimage to all four sacred Dhams: Kedarnath, Badrinath, Gangotri, and Yamunotri.',
    fullDescription: 'Embark on the ultimate spiritual journey covering all four sacred sites of the Char Dham circuit. This comprehensive pilgrimage takes you through the breathtaking Himalayas to visit Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience the divine energy of these ancient temples while enjoying comfortable accommodations and expert guidance throughout your journey.',
    duration: '12 Days 11 Nights',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Complete Char Dham circuit',
      'Helicopter options available',
      'Comfortable mountain accommodation',
      'Expert local guides',
      'VIP darshan arrangements',
      'Medical support throughout'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Haridwar',
        description: 'Arrival and acclimatization in the holy city of Haridwar.',
        activities: ['Airport/station pickup', 'Hotel check-in', 'Har Ki Pauri aarti', 'Briefing'],
        accommodation: 'Hotel in Haridwar',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Haridwar to Barkot (Yamunotri Base)',
        description: 'Journey to Barkot, the base for Yamunotri temple.',
        activities: ['Early departure', 'Scenic drive', 'Check-in at Barkot', 'Rest'],
        accommodation: 'Hotel in Barkot',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      },
      {
        day: 3,
        title: 'Yamunotri Darshan',
        description: 'Visit to Yamunotri temple, source of river Yamuna.',
        activities: ['Early start', 'Trek to temple', 'Darshan and prayers', 'Return to Barkot'],
        accommodation: 'Hotel in Barkot',
        meals: ['Breakfast', 'Packed lunch', 'Dinner']
      }
      // Additional days would continue the pattern...
    ],
    inclusions: [
      'Accommodation throughout',
      'All meals',
      'Transportation by AC vehicles',
      'Helicopter booking assistance',
      'Experienced guides',
      'Medical support',
      'All permits and fees'
    ],
    exclusions: [
      'Helicopter charges',
      'Personal expenses',
      'Insurance',
      'Tips and gratitude',
      'Emergency evacuation costs'
    ],
    location: 'Uttarakhand',
    difficulty: 'Challenging',
    bestTime: 'May to October',
    category: 'Pilgrimage',
    featured: true,
    rating: 4.9,
    reviewCount: 73
  },
  {
    id: '6',
    slug: 'golden-triangle-with-varanasi',
    title: 'Golden Triangle with Varanasi',
    shortDescription: 'Explore India\'s cultural heritage with Delhi, Agra, Jaipur, and the spiritual city of Varanasi.',
    fullDescription: 'Combine India\'s most famous cultural circuit with a profound spiritual experience. This journey takes you through the Golden Triangle - Delhi, Agra, and Jaipur - showcasing India\'s rich history and architecture, followed by the deeply spiritual experience of Varanasi. Perfect for those seeking both cultural immersion and spiritual awakening.',
    duration: '8 Days 7 Nights',
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Taj Mahal sunrise visit',
      'Red Fort and India Gate in Delhi',
      'Amber Fort in Jaipur',
      'Ganga aarti in Varanasi',
      'Sarnath Buddhist circuit',
      'Cultural performances'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Delhi',
        description: 'Welcome to the capital city of India.',
        activities: ['Airport pickup', 'Hotel check-in', 'India Gate visit', 'Welcome dinner'],
        accommodation: '5-star hotel in Delhi',
        meals: ['Dinner']
      },
      {
        day: 2,
        title: 'Delhi Sightseeing',
        description: 'Full day exploration of Old and New Delhi.',
        activities: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Lotus Temple', 'Qutub Minar'],
        accommodation: '5-star hotel in Delhi',
        meals: ['Breakfast', 'Lunch', 'Dinner']
      }
      // Additional days would continue...
    ],
    inclusions: [
      '5-star hotel accommodation',
      'All transfers in AC vehicles',
      'Professional guide services',
      'All monument entry fees',
      'Cultural show tickets',
      'All meals as per itinerary'
    ],
    exclusions: [
      'International flights',
      'Personal expenses',
      'Tips and gratitude',
      'Travel insurance',
      'Camera fees at monuments'
    ],
    location: 'Delhi, Uttar Pradesh, Rajasthan',
    difficulty: 'Easy',
    bestTime: 'October to March',
    category: 'Cultural',
    featured: false,
    rating: 4.5,
    reviewCount: 134
  }
];