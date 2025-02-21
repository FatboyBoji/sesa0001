import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Expertise',
    desc: 'Jahrelange Erfahrung in der Entwicklung innovativer Softwarelösungen.',
    color: '#EDEDED', // Light text
    bgColor: '#042A2B' // Dark green background
  },
  {
    title: 'Qualität',
    desc: 'Höchste Standards in der Softwareentwicklung und Architektur.',
    color: '#042A2B', // Dark text
    bgColor: '#62A87C' // Mint background
  },
  {
    title: 'Innovation',
    desc: 'Zukunftsweisende Technologien für nachhaltige Lösungen.',
    color: '#EDEDED', // Light text
    bgColor: '#042A2B' // Dark green background
  }
];

export default function CardsGrid() {
  return (
    <div className="py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div 
                className="h-full p-6 sm:p-8 rounded-2xl transition-all duration-300 group-hover:scale-[1.02]"
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="flex flex-col h-full">
                  <h3 
                    className="text-xl sm:text-2xl font-medium mb-4"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="text-base sm:text-lg leading-relaxed"
                    style={{ color: `${card.color}CC` }}
                  >
                    {card.desc}
                  </p>
                  <div 
                    className="mt-auto pt-6 w-8 h-0.5 transition-all duration-300 group-hover:w-16 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 