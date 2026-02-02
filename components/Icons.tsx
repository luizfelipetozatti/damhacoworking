
import React from 'react';

interface IconProps {
  className?: string;
}

export const WifiIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* Ondas de Wi-Fi - 3 arcos concêntricos */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.094a5 5 0 017.778 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.929 12.929a10 10 0 0114.142 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M1.757 9.757a15 15 0 0120.486 0" />
    {/* Ponto central do Wi-Fi */}
    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
  </svg>
);

export const CoffeeIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* Xícara de café */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h12a2 2 0 012 2v6a4 4 0 01-4 4H8a4 4 0 01-4-4V8z" />
    {/* Alça da xícara */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 10h2a2 2 0 012 2v1a2 2 0 01-2 2h-2" />
    {/* Vapor subindo */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3M11 2v4M15 3v3" />
  </svg>
);

export const AirConditionerIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    {/* Unidade do ar condicionado */}
    <rect x="3" y="4" width="18" height="8" rx="1" strokeLinecap="round" strokeLinejoin="round" />
    {/* Linhas de ventilação */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10M7 9h10" />
    {/* Fluxo de ar frio - 3 linhas onduladas */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 14v3M12 13v5M17 14v3" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);
