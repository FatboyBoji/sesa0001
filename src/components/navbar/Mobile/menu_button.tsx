import { MenuButtonProps } from '../types';

export default function MenuButton({ isOpen, onClick, className = '' }: MenuButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`p-2 relative z-10 ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-5 relative flex items-center justify-center">
        <div className={`
          w-full h-0.5 bg-gray-800 absolute
          transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45' : 'translate-y-[-8px]'}
        `}></div>
        <div className={`
          w-full h-0.5 bg-gray-800 absolute
          transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `}></div>
        <div className={`
          w-full h-0.5 bg-gray-800 absolute
          transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45' : 'translate-y-[8px]'}
        `}></div>
      </div>
    </button>
  );
}