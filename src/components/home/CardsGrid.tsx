import { motion } from 'framer-motion';

const cards = [
  { title: 'Expertise', desc: 'lalalal lalalal lla lal  lla l al la laala la ...' },
  { title: 'work', desc: 'solutions for modern challenges.' },
  { title: 'Results', desc: 'Measurable outcomes and sustainable growth.' }
];

export default function CardsGrid() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24 px-4 sm:px-0"
    >
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-8 2xl:p-12 rounded-2xl shadow-lg">
          <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
          <p className="text-gray-600 2xl:text-lg">{card.desc}</p>
        </div>
      ))}
    </motion.div>
  );
} 