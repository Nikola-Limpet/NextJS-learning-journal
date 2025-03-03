// Static generated page for each city

// import CurrentWeather from '@/app/components/server/CurrentWeather';
import CurrentWeatherClient from '@/app/components/client/CurrentWeatherClient';
import ForecastTable from '@/app/components/server/ForecastTable';
import { getForecast, getWeather } from '@/app/lib/weatherApi';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This replace getStaticPath in App Router
export async function generateStaticParams() {
  // Pre-render these city page at build time
  const cities = ['phnom-penh', 'new-york', 'london', 'paris', 'tokyo'];

  return cities.map(city => ({
    cityId: city,
  }));
}

// this is equivalent to getStaticProps in App Router

export async function CityData(cityId: string) {
  try {
    // Convert hyphenated cityId to regular city name (e.g., "new-york" -> "New York")
    const cityName = cityId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const [weatherData, forecastData] = await Promise.all([
      getWeather(cityName),
      getForecast(cityName),
    ]);

    return {
      weatherData,
      forecastData,
    };
  } catch (error) {
    console.error(`Error fetching data for ${cityId}:`, error);
    return { notFound: true };
  }
}

// Add ISR revalidation
export const revalidate = 3600; // Revalidate every hour

// this is the page component

export default async function Citypage({
  params,
}: {
  params: { cityId: string };
}) {
  try {
    const { cityId } = await params;
    const data = await CityData(cityId);
    if (data.notFound) {
      return notFound();
    }
    const { weatherData, forecastData } = data;

    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link
            href="/"
            className="text-stone-200 py-4 px-2 m-2 rounded bg-blue-400 hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">
          Weather for {weatherData?.city}, {weatherData?.country}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {!weatherData ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>Unable to fetch weather data. Please try again later.</p>
              </div>
            ) : (
              <CurrentWeatherClient data={weatherData} />
            )}
          </div>

          <div className="md:col-span-2 ">
            {!forecastData ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                <p>Unable to fetch forecast data. Please try again later.</p>
              </div>
            ) : (
              <ForecastTable data={forecastData} />
            )}
          </div>

          <div className="text-sm text-gray-500 mt-8">
            <p>Last updated: {new Date().toLocaleString()}</p>
            <p className="text-xs mt-1">
              Data refreshes automatically every hour.
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Unable to fetch weather data. Please try again later.</p>
        </div>
      </div>
    );
  }
}
