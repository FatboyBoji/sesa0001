"use client";

import { useState, useEffect } from 'react';
import { SESA_PUBLIC_KEY } from '@/public/keys/sesa_public_key';

export default function CopyButton() {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(SESA_PUBLIC_KEY);
      } else {
        // Fallback for browsers where navigator.clipboard is not available
        const textArea = document.createElement('textarea');
        textArea.value = SESA_PUBLIC_KEY;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
      }
      
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!mounted) {
    return null; // Don't render anything on the server side
  }

  return (
    <button
      onClick={handleCopy}
      className={`
        mt-4 w-full inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg
        font-medium transition-all duration-300 shadow-md hover:shadow-lg
        ${copied 
          ? 'bg-green-500 hover:bg-green-600' 
          : 'bg-blue-600 hover:bg-blue-700'
        }
        text-white cursor-pointer
      `}
      type="button"
    >
      {copied ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy Public Key
        </>
      )}
    </button>
  );
} 