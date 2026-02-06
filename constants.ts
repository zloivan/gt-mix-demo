
import { Package, Car, Wrench, Zap } from 'lucide-react';

export const CONTACT_INFO = {
  phone: '+95 598 27 51 11',
  email: 'bekaamirashvili@gmail.com',
  address: 'Raphiel Agladze Street, 30, Didube, Tbilisi',
  addressGeorgian: 'რ. აგლაძის ქ. 30, დიდუბე, თბილისი',
  addressRussian: 'ул. Рафиэля Агладзе, 30, Дидубе, Тбилиси',
  mapsLink: 'https://www.google.com/maps/place/GT+MIX/@41.732372,44.781044,17z',
  coordinates: {
    lat: 41.732372,
    lng: 44.781044,
  },
  facebookUrl: 'https://www.facebook.com/GTMixService',
};

export const SERVICES_LIST = [
  {
    key: 'accessories',
    icon: Package,
  },
  {
    key: 'parts',
    icon: Car,
  },
  {
    key: 'servicing',
    icon: Wrench,
  },
  {
    key: 'tuning',
    icon: Zap,
  },
];
