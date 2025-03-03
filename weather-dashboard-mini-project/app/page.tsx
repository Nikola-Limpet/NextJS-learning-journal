import CurrentWeatherClient from './components/client/CurrentWeatherClient';
import CurrentWeather from './components/server/CurrentWeather';
import ForecastTable from './components/server/ForecastTable';
import { getForecast, getWeather } from './lib/weatherApi';

export default async function Home() {
  const defaultCity = 'Phnom Penh';

  try {
    // fetch weather data
    const [weatherData, forecastData] = await Promise.all([
      getWeather(defaultCity),
      getForecast(defaultCity),
    ]);

    return (
      <main className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold  mt-4">Weather Dashboard</h1>

        {/* Server component shwoing current weather */}
        <CurrentWeatherClient data={weatherData} />

        {/* forecase section here */}
        <ForecastTable data={forecastData} />
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
