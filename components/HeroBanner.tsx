'use client';

import { motion } from 'framer-motion';
import { BrandName } from '@/components/BrandName';
import { generateWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Star } from 'lucide-react';
import heroBackgroundImage from '@/assets/herogbg.jpg';
import { StaticImageData } from 'next/image';

interface HeroBannerProps {
  title?: React.ReactNode;
  subtitle?: string;
  backgroundImage?: string | StaticImageData;
  showBookingButton?: boolean;
  height?: 'full' | 'large' | 'medium';
}

export function HeroBanner({
  title = (<><span>Begin your spiritual journey with </span><BrandName /></>),
  subtitle = "Explore India's sacred sites. Experience divine destinations with comfort, safety, and devotion.",
  backgroundImage = heroBackgroundImage,
  showBookingButton = true,
  height = 'full'
}: HeroBannerProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[600px]',
    medium: 'h-[400px]'
  };


  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-balance opacity-90 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {showBookingButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={generateWhatsAppUrl()}
                className="inline-flex items-center px-8 py-4 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Book on WhatsApp
              </a>
              
              <div className="flex items-center text-sm text-white/90">
                <div className="flex items-center mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span>4.8/5 from 500+ reviews</span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Floating elements removed for performance */}
      </div>

      {/* Scroll Indicator */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}