'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { searchCities } from '@/app/lib/weatherApi';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ id: string; name: string }>>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search for cities when the query changes
  useEffect(() => {
    setError(null);

    const timer = setTimeout(async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const cities = await searchCities(query);
        setResults(cities);
        if (cities.length === 0) {
          setError('No cities found. Try a different search term.');
        }
      } catch (error) {
        console.error('Error searching for cities:', error);
        setError('Failed to search for cities. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  // Close results when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Navigate to city page
  const handleCitySelect = (cityId: string) => {
    router.push(`/city/${cityId}`);
    setQuery('');
    setShowResults(false);
  };

  // Handle direct search for any city
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      // Create a URL-friendly ID from the query
      const cityId = query.toLowerCase().replace(/\s+/g, '-');
      router.push(`/city/${cityId}`);
      setQuery('');
      setShowResults(false);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for any city..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-1 rounded-full hover:bg-blue-600"
            aria-label="Search"
          >
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-2 border-white rounded-full border-t-transparent"></div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </form>

      {showResults && query.length > 1 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-y-auto">
          {error ? (
            <div className="px-4 py-3 text-red-500">{error}</div>
          ) : results.length === 0 ? (
            <div className="px-4 py-3 text-gray-500">
              {isLoading ? 'Searching...' : 'No cities found'}
            </div>
          ) : (
            <ul>
              {results.map(city => (
                <li
                  key={city.id}
                  onClick={() => handleCitySelect(city.id)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
          <div className="px-4 py-2 border-t text-xs text-gray-500">
            Press Enter to search for "{query}" directly
          </div>
        </div>
      )}
    </div>
  );
}
