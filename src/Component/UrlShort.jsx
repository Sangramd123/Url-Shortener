import React, { useState } from 'react';

const UrlShortener = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock API function to generate a short URL
  const generateShortenedUrl = (url) => {
    setLoading(true);
    setError('');
    
    // Simulating an API call
    setTimeout(() => {
      if (url) {
        setShortenedUrl(`short.ly/${Math.random().toString(36).substring(7)}`);
        setLoading(false);
      } else {
        setError('Please provide a valid URL.');
        setLoading(false);
      }
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateShortenedUrl(originalUrl);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
    
        <h2 class="xl:text-[30px] text-[#1c2f44] md:text-2xl text-xl font-bold text-start mb-4 leading-normal md:leading-[2.5rem] xl:leading-[3rem]">URL Shortener Tool</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-left pl-1 text-sm font-medium text-gray-700 mb-2">Enter your URL</label>
            <input
              type="url"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="https://example.com"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded font-medium transition-all duration-200 ease-in-out
              border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-md hover:scale-105 active:scale-95
              px-4 py-2 text-base
              cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>

        {shortenedUrl && (
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-800">Your shortened URL:</p>
            <a
              href={shortenedUrl}
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {shortenedUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortener;
