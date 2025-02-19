import Navbar from '@/components/navbar/index';
import SesaBG from '@/components/sesa_background';
import Footer from '@/components/Footer';
import CopyButton from '@/components/CopyButton';
import DecryptedText from '@/components/DecryptedText';
import { SESA_PUBLIC_KEY } from '@/public/keys/sesa_public_key';

export default function SesaPublicKeyPage() {
  // Format the key content into lines for simultaneous animation
  const keyLines = SESA_PUBLIC_KEY
    .replace('-----BEGIN PUBLIC KEY-----', '')
    .replace('-----END PUBLIC KEY-----', '')
    .trim()
    .match(/.{1,64}/g) || [];

  return (
    <div className="min-h-screen flex flex-col relative">
      <SesaBG />
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-3xl">
          <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-100">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
              Sesa Public Key
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 text-center px-2">
              Sie können den Schlüssel für die Verifizierung von Sesa Software nach der allgemeinen PKI Infrastuktur verwenden.
            </p>
            
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-400">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-gray-900">Public Key (RSA 2048-bit)</div>
                <div className="text-xs text-gray-400">SHA-256</div>
              </div>
              
              <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 font-mono text-[11px] sm:text-sm overflow-x-auto">
                <div className="text-blue-600 border-b border-gray-100 pb-2 mb-2 whitespace-nowrap">
                  <DecryptedText
                    text="-----BEGIN PUBLIC KEY-----"
                    speed={40}
                    sequential={true}
                    animateOn="view"
                    revealDirection="start"
                    className="text-blue-600"
                    encryptedClassName="text-gray-400 opacity-0"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ-"
                  />
                </div>
                <div className="space-y-1 sm:w-auto w-max">
                  {keyLines.map((line, index) => (
                    <div key={index} className="whitespace-nowrap sm:whitespace-normal">
                      <DecryptedText
                        text={line}
                        speed={15}
                        sequential={true}
                        maxIterations={10}
                        animateOn="view"
                        revealDirection="start"
                        useOriginalCharsOnly={true}
                        className="text-gray-700"
                        encryptedClassName="text-gray-400"
                        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        parentClassName="block"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-blue-600 border-t border-gray-100 pt-2 mt-2 whitespace-nowrap">
                  <DecryptedText
                    text="-----END PUBLIC KEY-----"
                    speed={40}
                    sequential={true}
                    animateOn="view"
                    revealDirection="start"
                    className="text-blue-600"
                    encryptedClassName="text-gray-400 opacity-0"
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ-"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <CopyButton />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
