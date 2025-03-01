import React from 'react';

// Layout should receive and render children
export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="book-layout container mx-auto p-4">
      <div className="book-header mb-4">
        <h2>My Book Collection</h2>
      </div>
      
      {/* Render the page content */}
      <main className="book-content mb-4 p-4">
        {children}
      </main>
      
      <footer className="book-footer p-4  bg-gray-100 text-center">
        {/* Any footer content */}
        <p>© 2025 My Bookshelf</p>
      </footer>
    </div>
  );
}