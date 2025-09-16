export interface Package {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  images: string[];
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  location: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  bestTime: string;
  category: 'Pilgrimage' | 'Spiritual' | 'Cultural' | 'Adventure';
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
  accommodation?: string;
  meals: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
  packageTitle: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  category: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  youtube?: string;
  twitter?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}