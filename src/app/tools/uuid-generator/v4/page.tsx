'use client'

import { useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';
import getUUID from '@/lib/utils/uuid';

export default function Page() {
  const [uuid, setUUID] = useState("");
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    const newUUID = getUUID();
    setUUID(newUUID);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(uuid).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Generate UUIDv4</h1>
      <section className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-md">
        <div className="relative w-full mb-4">
          <input
            id="uuid"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-transparent"
            type="text"
            value={uuid}
            aria-label='Textbox to display generated UUID'
            readOnly
          />
          <button
            type='button'
            className={`absolute inset-y-0 right-0 flex items-center pr-3`}
            onClick={handleCopy}
            disabled={!uuid}
          >
            {copied ? (
              <CheckIcon className="h-5 w-5 text-green-500" />
            ) : (
              <ClipboardIcon className={`h-5 w-5 ${!uuid ? 'text-gray-300' : 'text-gray-500 hover:text-gray-700'}`} />
            )}
          </button>
        </div>
        <div className="flex space-x-4 w-full">
          <button type='button' className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600" onClick={handleClick}>Generate</button>
        </div>
      </section>
    </main>
  );
}