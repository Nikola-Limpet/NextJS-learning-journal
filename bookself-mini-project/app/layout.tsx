import Navigation from "./components/Navigation";
import './globals.css';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 text-gray-800 font-sans"
      > 
        <Navigation />
        <main className="container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
