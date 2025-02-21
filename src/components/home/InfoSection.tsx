"use client";

import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import ScrollReveal from './ScrollReveal';
import ScrollVelocity from './ScrollVelocity';

export default function InfoSection() {
  const { scrollY } = useScroll();
  const velocity = useSpring(scrollY);

  const sections = [
    {
      content: "Wir lassen Software für Sie arbeiten.",
      isHighlight: true
    },
    {
      content: "Wir haben Systeme und Lösungen entwickelt, basierend auf unserer Kerntechnologie. Wir entwickeln und liefern Software-Architekturen und Systeme nach Anforderungen."
    },
    {
      content: "Wir werden durch die Lösung der IT-Probleme unserer Kunden weiterhin zur Verwirklichung einer wohlhabenden Gesellschaft beitragen."
    },
    {
      content: "Forschung und Entwicklung von neuen Softwarelösungen",
      isHighlight: true
    },
    {
      content: "Wenn Sie Unterstützung bei der Weiterentwicklung Ihrer Software benötigen, dann lassen Sie uns zusammenkommen und darüber sprechen."
    },
    {
      content: "Wenn Sie Unterstützung bei der Wartung Ihrer Softwarekomponenten benötigen, sind Sie bei uns an der richtigen Adresse."
    }
  ];

  return (
    <div className="relative">
      {/* ScrollVelocity Background */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <ScrollVelocity
            texts={["Software Development", "Software Architecture"]}
            velocity={30}
            className="text-[#042A2B] font-light tracking-wider"
            damping={40}
            stiffness={300}
            numCopies={3}
          />
        </div>

        {/* Main Content */}
        <div className="relative pt-72 z-10 w-full">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                {/* Decorative line */}
                {index > 0 && (
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-px h-32 bg-gradient-to-b from-transparent via-[#042A2B] to-transparent opacity-20"
                  />
                )}
                
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={1}
                  blurStrength={3}
                  containerClassName="max-w-3xl mx-auto text-center"
                  textClassName={`${
                    section.isHighlight 
                      ? 'text-3xl sm:text-4xl lg:text-5xl font-medium text-[#042A2B]' 
                      : 'text-lg sm:text-xl lg:text-2xl font-light text-[#042A2B]/80'
                  }`}
                >
                  {section.content}
                </ScrollReveal>
              </div>
            ))}

            {/* Location Section */}
            <div className="relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-px h-32 bg-gradient-to-b from-transparent via-[#042A2B] to-transparent opacity-20" />
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={1}
                blurStrength={3}
                containerClassName="max-w-2xl mx-auto text-center"
                textClassName="text-lg sm:text-xl font-light text-[#042A2B]/80"
              >
                Unsere Heimatbasis, von der aus wir operieren und mit lokalen Gemeinschaften arbeiten, ist Frankfurt am Main, Deutschland
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}