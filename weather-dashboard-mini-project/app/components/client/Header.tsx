'use client';

import Link from 'next/link';
import SearchBox from './SearchBox';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Weather Dashboard
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`mt-4 md:mt-0 ${
              isMenuOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-grow">
                <p className="text-xs text-blue-200 mb-1">
                  Search any city in the world
                </p>
                <SearchBox />
              </div>
              <nav>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/city/london"
                      className="hover:text-blue-200 transition-colors"
                    >
                      London
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/city/new-york"
                      className="hover:text-blue-200 transition-colors"
                    >
                      New York
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/city/tokyo"
                      className="hover:text-blue-200 transition-colors"
                    >
                      Tokyo
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
