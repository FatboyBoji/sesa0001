"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface CharacterStickerProps {
  character: 'espeon' | 'kuromi';
  position: 'left' | 'right';
  onClick?: () => void;
}

export const CharacterSticker = ({ character, position, onClick }: CharacterStickerProps) => {
  const positionClass = position === 'left' 
    ? 'bottom-8 left-8' 
    : 'bottom-8 right-8';

  const gifUrl = character === 'espeon'
    ? 'https://media.tenor.com/8061162179686146909/eevee-pokemon-lurk.gif'
    : 'https://media.tenor.com/20564100/kuromi-happy-cute-dance.gif';

  return (
    <motion.div
      className={`fixed ${positionClass} z-50 cursor-pointer w-32 h-32`}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <Image
        src={gifUrl}
        alt={character === 'espeon' ? 'Eevee' : 'Kuromi'}
        width={128}
        height={128}
        className="object-contain"
        unoptimized // This is needed for external GIFs
      />
    </motion.div>
  );
}; 