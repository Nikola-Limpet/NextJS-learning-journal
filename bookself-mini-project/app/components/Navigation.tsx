'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="bg-red p-4">
      <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex p-3 space-x-6">
          <Link href="/" 
            className={`text-white ${pathname === '/' ? 'font-bold' : 'hover:text-gray-300'}`}
          >
            Home
          </Link>
          <Link href="/category" 
            className={`text-white ${pathname === '/' ? 'font-bold' : 'hover:text-gray-300'}`}
          >
            Categories
          </Link>

          <Link href="/book" 
            className={`text-white ${pathname === '/' ? 'font-bold' : 'hover:text-gray-300'}`}
          >
            Books
          </Link>
        </div>
        <div className="text-white font-semibold">
          My Personal Bookshelf
        </div>
      </div>

      {/* Breaadcrumb navigation */}
      {
        (pathname !== '/' && pathname !== '/category') && (
          <div className="text-gray-300 text-sm mt-2">
            <Link href="/" className="hover:text-white">Home</Link>
            {pathname.startsWith('/category') && (
              <>
                <span className="mx-2">/</span>
                <Link href="/category" className="hover:text-white">Categories</Link>
              </>
              )}
           {pathname.startsWith('/book') && (
              <>
                <span className="mx-2">/</span>
                <Link href="/category" className="hover:text-white">Categories</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-400">Book Details</span>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}