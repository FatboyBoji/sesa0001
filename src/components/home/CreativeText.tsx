"use client";

import RotatingText from './RotatingText';

const CreativeText = () => {
  return (
    <div className="flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-bold gap-3">
      <span className="text-black">Software</span>
      <RotatingText
        texts={['Entwicklung', 'Architektur', 'Factory', 'Forschung', 'Lösungen']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
    </div>
  );
};

export default CreativeText; 