
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Mail, Phone } from 'lucide-react';
import { useTranslations } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslations();
  return (
    <footer className="bg-[#050505] border-t border-gray-800 py-12 px-6 md:px-12">
      <div className="container mx-auto text-center text-[#C0C0C0]">
        <div className="font-inter-tight text-3xl md:text-4xl font-bold tracking-wider text-white mb-4">
          GT<span className="text-[#FF3B30]">MIX</span>
        </div>
        <p className="mb-6 max-w-xl mx-auto">{t('footerSlogan')}</p>
        <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap gap-y-4">
          <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-2 hover:text-white transition-colors">
            <Phone size={20} />
            <span>{CONTACT_INFO.phone}</span>
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
            <Mail size={20} />
            <span>{CONTACT_INFO.email}</span>
          </a>
          <a href={CONTACT_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
            <Facebook size={20} />
            <span>GTMixService</span>
          </a>
        </div>
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} GT Mix. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
