"use client"; 

import { FormEvent, useState, ChangeEvent } from 'react';

interface ContactFormProps {
  content: {
    name: string;
    email: string;
    message: string;
    submit: string;
  };
}

export default function ContactForm({ content }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowMessage(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          {content.name}
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ color: 'tan' }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {content.email}
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ color: 'tan' }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {content.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          style={{ color: 'tan' }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>
      
      {showMessage && (
        <div className="text-sm text-green-600 italic animate-fade-in">
          We appreciate your message and will get back to you soon!
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
      >
        {/* here we can add a function for us to receive the message. */}
        {content.submit}
      </button>
    </form>
  );
}
  