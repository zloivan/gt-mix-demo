// Fix: Add reference to vite/client to provide type definitions for import.meta.env
/// <reference types="vite/client" />

import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const MapSection: React.FC = () => {
  const { t, language } = useTranslations();

  const getMapLanguage = (lang: 'ge' | 'en' | 'ru') => {
    if (lang === 'ge') return 'ka'; // Google Maps uses 'ka' for Georgian
    return lang;
  };
  
  const mapLanguage = getMapLanguage(language);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=GT+MIX,Raphiel+Agladze+Street+30,Tbilisi,Georgia&center=${CONTACT_INFO.coordinates.lat},${CONTACT_INFO.coordinates.lng}&zoom=17&language=${mapLanguage}`;

  const getAddress = () => {
    switch (language) {
      case 'ge':
        return { main: CONTACT_INFO.addressGeorgian, sub: CONTACT_INFO.address };
      case 'ru':
        return { main: CONTACT_INFO.addressRussian, sub: CONTACT_INFO.address };
      default:
        return { main: CONTACT_INFO.address, sub: CONTACT_INFO.addressGeorgian };
    }
  };

  const { main: mainAddress, sub: subAddress } = getAddress();

  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="container mx-auto">
        <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
          <h2 className="text-4xl md:text-5xl font-inter-tight font-bold text-center text-white mb-12">{t('visitUsTitle')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="w-full h-80 md:h-96 rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale invert-[90%] contrast-[1.2]"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#007AFF] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">{mainAddress}</h3>
                <p className="text-[#C0C0C0]">{subAddress}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#007AFF] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">{CONTACT_INFO.phone}</h3>
                 <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#C0C0C0] hover:text-[#007AFF] transition-colors">{t('callUs')}</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-[#007AFF] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white">{t('workingHoursTitle')}</h3>
                <p className="text-[#C0C0C0]">{t('workingHoursValue')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;