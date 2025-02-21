"use client"

import Navbar from '@/components/navbar/index';
import SesaBG from '@/components/sesa_background';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface DeveloperMessage {
  content: {
    title: string;
    paragraphs: string[];
  };
  signature: {
    name: string;
    role: string;
    location: string;
    date: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

const developerMessage: DeveloperMessage = {
  content: {
    title: "Die Automatisierung und der Wandel stellen die Gesellschaften weltweit vor neuen Herausforderungen.",
    paragraphs: [
      "Seit 2007 arbeiten wir kontinuierlich in Frankfurt am Main und bleiben an der vordersten Front der Softwaretechnologie. Wir glauben fest daran, dass der technologische Fortschritt die Lösung von vielen oft in der Vergangenheit unlösbare Probleme darstellt.",
      "Zusammen mit unseren Kunden erstellen wir Softwaresysteme in Europa. Gemeinsames Vertrauen bildet die Basis für unsere Arbeit - das ist der Leitsatz für uns, wenn wir neue Softwaresysteme entwickeln oder bestehende Systeme erweitern. Wir haben uns zum Ziel gesetzt die Lebensqualität der Menschen zu verbessern, indem wir auf die erkannten Problemen von Unternehmen in Softwarebereich europaweit und weltweit reagieren."
    ]
  },
  signature: {
    name: "Todor J. Kostadinov",
    role: "Entwickler",
    location: "Frankfurt am Main",
    date: "2025"
  },
  image: {
    src: "/image/message_tati2.png",
    alt: "Todor J. Kostadinov"
  }
};

export default function Forum() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12"
            >
              {/* Message Content */}
              <div className="space-y-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {developerMessage.content.title}
                </h1>
                
                {developerMessage.content.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {/* Call to Action */}
                <div className="pt-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-600 text-center">
                    Lassen Sie uns gemeinsam diesen Weg gehen.
                  </h2>
                </div>

                {/* Signature and Image */}
                <div className="flex flex-col md:flex-row items-end justify-between pt-8">
                  <div className="order-2 md:order-1 space-y-1">
                    <p className="text-xl font-semibold text-gray-900">
                      {developerMessage.signature.name}
                    </p>
                    <p className="text-gray-600">
                      {developerMessage.signature.role}
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>{developerMessage.signature.location} {developerMessage.signature.date}</p>
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border-2 border-gray-200">
                      <Image
                        src={developerMessage.image.src}
                        alt={developerMessage.image.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
