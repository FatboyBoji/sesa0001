"use client";

import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../../components/navbar/index';
import SesaBG from '../../components/sesa_background';
import Footer from '@/components/Footer';
import { ErrorBoundary } from 'react-error-boundary';

// Dynamically import components that use window/browser APIs
const ContactForm = dynamic(() => import('../../components/ContactForm'), {
  ssr: false
});

const LiquidChrome = dynamic(() => import('@/components/LiquidChrome'), {
  ssr: false
});

const PixelTransition = dynamic(() => import('@/components/PixelTransition'), {
  ssr: false
});

// Different languages hardcoded
type Language = 'en' | 'de' | 'bg';

interface ContentType {
  title: string;
  subtitle: string;
  description: {
    highlight: string;
    rest: string;
  };
  contactInfo: {
    title: string;
    email: string;
    emailLabel: string;
    location: string;
    locationLabel: string;
    hours: string;
    hoursLabel: string;
  };
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}

interface Content {
  en: ContentType;
  de: ContentType;
  bg: ContentType;
}

const content: Content = {
  en: {
    title: 'Get in Touch',
    subtitle: 'We are here to help',
    description: {
      highlight: 'Please,',
      rest: 'do not hesitate to contact us for more information on available products and services.'
    },
    contactInfo: {
      title: 'Other Ways to Connect',
      email: 'sesa.software@web.de',
      emailLabel: 'Email',
      location: 'Frankfurt, Germany',
      locationLabel: 'Location',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM CET',
      hoursLabel: 'Business Hours'
    },
    form: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Message',
      submit: 'Send Message'
    }
  },
  de: {
    title: 'Kontaktieren Sie uns',
    subtitle: 'Wir sind für Sie da',
    description: {
      highlight: 'Für weitere Informationen',
      rest: 'zu unseren Produkten und Dienstleistungen stehen wir Ihnen jederzeit gerne zur Verfügung.'
    },
    contactInfo: {
      title: 'Weitere Kontaktmöglichkeiten',
      email: 'sesa.software@web.de',
      emailLabel: 'E-Mail',
      location: 'Frankfurt, Deutschland',
      locationLabel: 'Standort',
      hours: 'Mo-Fr: 9:00 - 18:00 MEZ',
      hoursLabel: 'Geschäftszeiten'
    },
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Nachricht',
      submit: 'Nachricht senden'
    }
  },
  bg: {
    title: 'Свържете се с нас',
    subtitle: 'Ние сме тук да помогнем',
    description: {
      highlight: 'Моля,',
      rest: 'не се колебайте да се свържете с нас за повече информация за налични продукти и услуги.'
    },
    contactInfo: {
      title: 'Други начини за връзка',
      email: 'sesa.software@web.de',
      emailLabel: 'Имейл',
      location: 'Франкфурт, Германия',
      locationLabel: 'Локация',
      hours: 'Пон-Пет: 9:00 - 18:00 ч. ЦЕВ',
      hoursLabel: 'Работно време'
    },
    form: {
      name: 'Вашето име',
      email: 'Вашият имейл',
      message: 'Съобщение',
      submit: 'Изпрати'
    }
  }
};

// Fallback component for when WebGL fails
function LiquidChromeFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex flex-col items-center justify-center text-center p-4">
      <p className="text-gray-800 text-lg md:text-xl font-medium mb-2 animate-pulse">
        Interactive Animation Not Available
      </p>
      <p className="text-gray-600 text-sm md:text-base">
        Please update your browser for the best experience
      </p>
      <div className="mt-4 text-3xl font-bold text-[#042A2B]">
        SESA Software
      </div>
    </div>
  );
}

export default function Contact() {
  const [currentLang, setCurrentLang] = useState<Language>('de');
  const contactFormRef = useRef<HTMLDivElement>(null);
  const [formHeight, setFormHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    console.log('Language changed to:', lang);
    setCurrentLang(lang);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      const updateHeight = () => {
        if (contactFormRef.current) {
          setFormHeight(contactFormRef.current.offsetHeight);
        }
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [isMounted]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Titel und info text oben */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {content[currentLang].title}
              </h1>
              <p className="text-xl text-gray-600">
                {content[currentLang].subtitle}
              </p>
            </div>

            {/* Sprachen Auswahl */}
            <div className="mb-12 flex justify-center text-green-600 space-x-4">
              {(Object.keys(content) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500
                           ${currentLang === lang ? 'bg-green-100 text-yellow-600' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/*--------------------------------------------- Main Content Grid ---------------------------------------------*/}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Left Column - Contact Form */}
              <div ref={contactFormRef} className="bg-white font-semibold rounded-2xl shadow-lg p-8">
                <p className="text-lg text-gray-600 mb-8">
                  <span className="text-xl font-semibold text-green-600">
                    {content[currentLang].description.highlight}
                  </span>{' '}
                  {content[currentLang].description.rest}
                </p>
                <ContactForm content={content[currentLang].form} />
              </div>

              {/* right side - Additional Info */}
              <div className="flex flex-col h-full">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-6">
                    {content[currentLang].contactInfo.title}
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Email icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.emailLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.email}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Location icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.locationLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        {/* Clock icon */}
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">
                          {content[currentLang].contactInfo.hoursLabel}
                        </p>
                        <p className="text-lg font-medium" style={{ color: 'tan' }}>
                          {content[currentLang].contactInfo.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom right container with LiquidChrome and PixelTransition */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer relative z-10 mt-8 flex-1">
                  <PixelTransition
                    firstContent={
                      <div className="w-full h-full flex items-center justify-center">
                        <ErrorBoundary FallbackComponent={LiquidChromeFallback}>
                          <LiquidChrome
                            baseColor={[0.098, 0.165, 0.169]}
                            speed={0.5}
                            amplitude={0.6}
                            interactive={true}
                          />
                        </ErrorBoundary>
                      </div>
                    }
                    secondContent={
                      <div className="w-full h-full bg-[#042A2B] flex items-center justify-center">
                        <p className="text-3xl font-bold text-white">SESA Software</p>
                      </div>
                    }
                    gridSize={12}
                    pixelColor="#042A2B"
                    animationStepDuration={0.4}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
