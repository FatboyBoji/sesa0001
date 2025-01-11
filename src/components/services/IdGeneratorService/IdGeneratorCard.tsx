'use client';

import { useState } from 'react';

export interface IdGeneratorItem {
  title: string;
  status: string;
  link: string;
  type: 'service';
  description: string;
  apiEndpoint: boolean;
  previewFormat: string;
}

interface IdGeneratorCardProps {
  item: IdGeneratorItem;
}

const IdGeneratorCard = ({ item }: IdGeneratorCardProps) => {
  const [generatedId, setGeneratedId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateId = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(item.link);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.id) {
        setGeneratedId(data.id);
        setError(null);
      } else {
        throw new Error('No ID in response');
      }
    } catch (error) {
      console.error('Error generating ID:', error);
      setError('Failed to generate ID. Please try again.');
      setGeneratedId('');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      console.warn('Clipboard API not available');
      try {
        const textArea = document.createElement('textarea');
        textArea.value = generatedId;
        document.body.appendChild(textArea);
        textArea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (success) {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000);
        } else {
          throw new Error('Fallback copy method failed');
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(generatedId);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="col-span-full bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {item.title}
        </h3>
        <span className={`service-badge ${
          item.status === 'stable' ? 'bg-green-100 text-green-800' :
          item.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4">
        {item.description}
      </p>

      <div className="space-y-4">
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}
        
        {!generatedId ? (
          <div className="bg-blue-100 text-black text-center p-3 rounded-md font-mono text-xs">
            {item.previewFormat}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex-grow bg-blue-100 text-center text-black p-3 rounded-md font-mono text-xs break-all">
              {generatedId}
            </div>
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
              title="Copy to clipboard"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              {copySuccess && (
                <span className="absolute bg-black text-white text-xs px-2 py-1 rounded -mt-8 -ml-2">
                  Copied!
                </span>
              )}
            </button>
          </div>
        )}

        <button
          onClick={generateId}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:bg-blue-400"
        >
          {isLoading ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Generating...
            </>
          ) : (
            'Generate New ID'
          )}
        </button>
      </div>
    </div>
  );
};

export default IdGeneratorCard;