import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: '2',
    slug: 'ram-mandir-ayodhya',
    title: 'Ram Mandir Ayodhya Darshan',
    shortDescription: 'Visit the newly constructed Ram Mandir in Ayodhya and explore the holy city of Lord Rama.',
    fullDescription: 'Witness history in the making with a visit to the magnificent Ram Mandir in Ayodhya. This sacred journey takes you to the birthplace of Lord Rama, where the newly constructed temple stands as a testament to faith and devotion. Experience the divine atmosphere of Ayodhya, visit important religious sites, and participate in the spiritual activities that make this pilgrimage truly memorable.',
    duration: '3 Days 2 Nights',
    images: [
      'https://temple.yatradham.org/public/Product/temple/temple_bCWJtXm0_202402070910120.jpg',
      'https://www.livehindustan.com/lh-img/smart/img/2024/09/16/original/ram_mandir_1726468713090.jpg',
      'https://www.jagranimages.com/images/newimg/21012024/21_01_2024-ram_mandir_1_23634890.webp'
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
    reviewCount: 89,
  },
  {
    id: '3',
    slug: 'varanasi-spiritual-tour',
    title: 'Varanasi Spiritual Experience',
    shortDescription: 'Immerse yourself in the spiritual capital of India with Ganga aarti, temple visits, and cultural experiences.',
    fullDescription: 'Discover the eternal city of Varanasi, one of the oldest continuously inhabited cities in the world. Experience the mystical atmosphere of the ghats, witness the mesmerizing Ganga aarti, visit ancient temples, and participate in spiritual rituals that have been performed for thousands of years. This journey offers a deep dive into Indian spirituality and culture.',
    duration: '4 Days 3 Nights',
    images: [
      'https://substackcdn.com/image/fetch/$s_!uncf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1185c48d-bcde-4633-8034-6ee871093dad_800x400.jpeg',
      'https://servdharm.com/cdn/shop/articles/Wallpaper_800x.jpg?v=1694405183',
      'https://indiator.com/tourist-places/wp-content/uploads/2017/05/varanasi5.jpg'
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
    reviewCount: 156,
  },
  {
    id: '6',
    slug: 'golden-triangle-with-varanasi',
    title: 'Golden Triangle with Varanasi',
    shortDescription: 'Explore India\'s cultural heritage with Delhi, Agra, Jaipur, and the spiritual city of Varanasi.',
    fullDescription: 'Combine India\'s most famous cultural circuit with a profound spiritual experience. This journey takes you through the Golden Triangle - Delhi, Agra, and Jaipur - showcasing India\'s rich history and architecture, followed by the deeply spiritual experience of Varanasi. Perfect for those seeking both cultural immersion and spiritual awakening.',
    duration: '8 Days 7 Nights',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tW_m3QE88dWLvLOlh6iQynMzBFfSH_iPLRGvQaINjK3u-cLfD-Zw6sM7AWgoOFc9lxo&usqp=CAU',
      'https://www.indianexotictravel.com/tourpackage/varanasi-tour.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlVd16ImsMftTPy2v6qpbUXS6LOL3CziOjjdd4MpxbGDHA3NFWD_vKHm2ZQP0GyRAwnWE&usqp=CAU'
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
    reviewCount: 134,
  }
];