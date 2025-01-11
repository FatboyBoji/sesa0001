import Link from 'next/link';
import SesaIcon from '../icons/sesalogoComb';

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <Link href="/" onClick={onClick}>
      <SesaIcon className={`text-black w-full h-full ${className}`} />
    </Link>
  );
}