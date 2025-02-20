"use client"; 

import { useState } from 'react';

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
    firstName: '',
    lastName: '',
    telephone: '',
    eMail: '',
    sendedMessage: '',
    telephoneContact: false,
    eMailContact: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const params = new URLSearchParams({
        firstName: formData.firstName,
        lastName: formData.lastName,
        telephone: formData.telephone,
        eMail: formData.eMail,
        sendedMessage: formData.sendedMessage,
        telephoneContact: formData.telephoneContact ? 'true' : '',
        eMailContact: formData.eMailContact ? 'true' : ''
      });

      const response = await fetch(`/api/contact?${params.toString()}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      if (data.success) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          telephone: '',
          eMail: '',
          sendedMessage: '',
          telephoneContact: false,
          eMailContact: false
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Unified base styles for form elements
  const baseInputStyles = "mt-1 block w-full rounded-md border-2 border-gray-300 text-gray-900 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 text-base placeholder-gray-400";
  const baseLabelStyles = "block text-sm font-medium text-gray-800";
  const baseCheckboxStyles = "h-4 w-4 rounded border-2 border-gray-300 text-green-600 focus:ring-green-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="rounded-md bg-green-50 p-4 mb-6">
          <div className="text-sm text-green-700">
            Your message has been sent successfully!
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-6">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={baseLabelStyles}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={baseInputStyles}
            style={{ fontSize: '125%' }}
          />
        </div>

        <div>
          <label htmlFor="lastName" className={baseLabelStyles}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={baseInputStyles}
            style={{ fontSize: '125%' }}
          />
        </div>
      </div>

      {/* Contact Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telephone" className={baseLabelStyles}>
            Telephone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className={baseInputStyles}
            style={{ fontSize: '125%' }}
          />
        </div>

        <div>
          <label htmlFor="eMail" className={baseLabelStyles}>
            Email
          </label>
          <input
            type="email"
            id="eMail"
            name="eMail"
            value={formData.eMail}
            onChange={handleChange}
            required
            className={baseInputStyles}
            style={{ fontSize: '125%' }}
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="sendedMessage" className={baseLabelStyles}>
          Message
        </label>
        <textarea
          id="sendedMessage"
          name="sendedMessage"
          value={formData.sendedMessage}
          onChange={handleChange}
          required
          rows={8}
          maxLength={1024}
          className={baseInputStyles}
          style={{ fontSize: '110%' }}
        />
      </div>

      {/* Contact Preferences */}
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="telephoneContact"
            name="telephoneContact"
            checked={formData.telephoneContact}
            onChange={handleChange}
            className={baseCheckboxStyles}
          />
          <label htmlFor="telephoneContact" className={`ml-2 ${baseLabelStyles}`}>
            Contact me by phone
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="eMailContact"
            name="eMailContact"
            checked={formData.eMailContact}
            onChange={handleChange}
            className={baseCheckboxStyles}
          />
          <label htmlFor="eMailContact" className={`ml-2 ${baseLabelStyles}`}>
            Contact me by email
          </label>
        </div>
      </div>

      {/* Submit and Reset Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="reset"
          className="px-6 py-3 text-base font-medium text-gray-700 bg-gray-100 
                   rounded-md border border-gray-300 shadow-sm hover:bg-gray-200 
                   transition-all duration-200"
        >
          Delete
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`
            inline-flex justify-center rounded-md border border-transparent 
            px-6 py-3 text-base font-medium text-white shadow-sm 
            transition-all duration-200
            ${loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
            }
          `}
        >
          {loading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Sending...
            </div>
          ) : 'OK'}
        </button>
      </div>
    </form>
  );
}
  