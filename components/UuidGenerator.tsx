
import React, { useState, useEffect, useCallback } from 'react';
import { generateV4 } from '../services/uuidService';
import ClipboardIcon from './icons/ClipboardIcon';
import CheckIcon from './icons/CheckIcon';

const UuidGenerator: React.FC = () => {
  const [uuid, setUuid] = useState<string>('');
  const [bulkCount, setBulkCount] = useState<number>(10);
  const [bulkUuids, setBulkUuids] = useState<string[]>([]);
  const [isCopiedSingle, setIsCopiedSingle] = useState<boolean>(false);
  const [isCopiedBulk, setIsCopiedBulk] = useState<boolean>(false);

  useEffect(() => {
    setUuid(generateV4());
  }, []);

  const handleGenerateSingle = () => {
    setUuid(generateV4());
    setIsCopiedSingle(false);
  };
  
  const handleCopyToClipboard = useCallback(async (text: string, setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy to clipboard.');
    }
  }, []);

  const handleGenerateBulk = () => {
    const count = Math.min(Math.max(1, bulkCount), 100); // Clamp between 1 and 100
    const newUuids = Array.from({ length: count }, generateV4);
    setBulkUuids(newUuids);
    setIsCopiedBulk(false);
  };
  
  return (
    <div className="w-full max-w-4xl bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/10">
      
      {/* Single UUID Generator */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-100">Your Unique ID</h2>
        <div className="relative flex items-center bg-gray-900/50 p-4 rounded-lg">
          <p className="flex-grow font-mono text-lg sm:text-xl text-cyan-300 break-all pr-12">{uuid}</p>
          <button
            onClick={() => handleCopyToClipboard(uuid, setIsCopiedSingle)}
            className="absolute right-4 p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Copy single UUID"
          >
            {isCopiedSingle ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
          </button>
        </div>
        <button
          onClick={handleGenerateSingle}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Generate New UUID
        </button>
      </div>

      {/* Bulk UUID Generator */}
      <div>
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-100">Bulk Generator</h2>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="number"
            min="1"
            max="100"
            value={bulkCount}
            onChange={(e) => setBulkCount(parseInt(e.target.value, 10) || 1)}
            className="flex-grow w-full sm:w-auto bg-gray-900/50 border border-gray-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            aria-label="Number of UUIDs to generate"
          />
          <button
            onClick={handleGenerateBulk}
            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            Generate
          </button>
        </div>

        {bulkUuids.length > 0 && (
          <div>
            <div className="relative">
              <textarea
                readOnly
                value={bulkUuids.join('\n')}
                className="w-full h-48 bg-gray-900/50 border border-gray-700 text-cyan-300 font-mono p-4 rounded-lg resize-none focus:outline-none"
                aria-label="Generated bulk UUIDs"
              ></textarea>
              <button
                onClick={() => handleCopyToClipboard(bulkUuids.join('\n'), setIsCopiedBulk)}
                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Copy bulk UUID list"
              >
                {isCopiedBulk ? <CheckIcon className="w-5 h-5 text-green-400" /> : <ClipboardIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UuidGenerator;
