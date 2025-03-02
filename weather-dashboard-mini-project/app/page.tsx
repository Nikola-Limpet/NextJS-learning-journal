import CurrentWeather from './components/server/CurrentWeather';
import { WeartherData } from './lib/types';
import { getWeather } from './lib/weatherApi';

export default async function Home() {
  const defaultCity = 'Phnom Penh';

  try {
    // fetch weather data
    const weatherData = await getWeather(defaultCity);

    return (
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold  mt-4">Weather Dashboard</h1>

        {/* Server component shwoing current weather */}
        <CurrentWeather data={weatherData} />

        {/* forecase section here */}

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Search for a city</h2>
          {/* Client component will be added here */}
          {/* You will need to create a client component for the serach functionality */}

          <div className="bg-gray-100 p-4 rounded-b-lg text-center">
            Search component will be added here
          </div>
        </div>
      </main>
    );
  } catch (error) {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Unable to fetch weather data. Please try again later.</p>
        </div>
      </main>
    );
  }
}
