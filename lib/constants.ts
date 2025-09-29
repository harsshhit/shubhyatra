export const CONTACT_INFO = {
  phone: '+91 86018 88830',
  whatsapp: '+91 86018 88830',
  email: 'info@bvntours.com',
  address: 'Spiritual Tourism Center, New Delhi, India'
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/bvntours',
  instagram: 'https://instagram.com/bvntours',
  youtube: 'https://youtube.com/@bvntours',
  twitter: 'https://twitter.com/bvntours'
};

export const FEATURES = [
  {
    icon: '💰',
    title: 'Affordable Packages',
    description: 'Budget-friendly spiritual tours without compromising on quality and comfort.'
  },
  {
    icon: '🛡️',
    title: 'Safe & Secure',
    description: 'Your safety is our priority with experienced guides and 24/7 support.'
  },
  {
    icon: '🏨',
    title: 'Comfortable Stay',
    description: 'Clean, comfortable accommodations near temples and spiritual sites.'
  },
  {
    icon: '👥',
    title: 'Expert Guides',
    description: 'Knowledgeable local guides who understand the spiritual significance of each place.'
  },
  {
    icon: '🚁',
    title: 'Helicopter Services',
    description: 'Optional helicopter services for difficult terrains and time constraints.'
  },
  {
    icon: '🎯',
    title: 'Customized Tours',
    description: 'Personalized itineraries based on your spiritual preferences and requirements.'
  },
  {
    icon: '📞',
    title: '24/7 Support',
    description: 'Round-the-clock customer support throughout your spiritual journey.'
  },
  {
    icon: '🍽️',
    title: 'Pure Vegetarian',
    description: 'Sattvic vegetarian meals prepared with utmost care and cleanliness.'
  }
];

export const TEAM_MEMBERS = [
  {
    id: '1',
    name: 'Swami Ramanand',
    role: 'Spiritual Guide & Founder',
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'With over 20 years of spiritual practice and pilgrimage experience, Swami Ramanand founded BVN Tours to make spiritual journeys accessible to all devotees.'
  },
  {
    id: '2',
    name: 'Priya Devi',
    role: 'Tour Operations Manager',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'An expert in travel operations with 15 years of experience in organizing pilgrimages across India. She ensures every journey is smooth and spiritually fulfilling.'
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    role: 'Customer Relations Head',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Dedicated to providing exceptional customer service, Rajesh has helped thousands of pilgrims plan their perfect spiritual journey.'
  }
];

export const generateWhatsAppUrl = (packageTitle?: string, message?: string) => {
  const baseMessage = message || `Hello BVN Tours, I want to book${packageTitle ? ` ${packageTitle}` : ' a spiritual tour package'}. Please provide more details.`;
  return `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(baseMessage)}`;
};