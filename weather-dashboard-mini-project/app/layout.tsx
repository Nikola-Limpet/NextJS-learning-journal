import { TemperatureUnitProvider } from './contexts/TemperatureUnitContext';
import Header from './components/client/Header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weather Dashboard',
  description: 'A weather dashboard built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <TemperatureUnitProvider>
          <Header />
          <main className="container mx-auto px-4 py-6">{children}</main>
          {/* Removed TemperatureToggleWrapper */}
          <footer className="bg-gray-100 border-t mt-10 py-6">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Weather Dashboard</p>
              <p className="mt-1">Data provided by OpenWeather API</p>
            </div>
          </footer>
        </TemperatureUnitProvider>
      </body>
    </html>
  );
}
