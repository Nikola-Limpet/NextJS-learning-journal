import { WeartherData, ForecastData, DailyForecast } from './types';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

export async function getWeather(city: string): Promise<WeartherData> {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch weather for ${city}`);
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg
    },
    weather: data.weather.map((w: any) => ({
      id: w.id,
      main: w.main,
      description: w.description,
      icon: w.icon
    }))
  };
}

// Get weather by coordinates
export async function getWeatherByCoords(lat: number, lon: number): Promise<WeartherData> {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feels_like: data.main.feels_like,
    humidity: data.main.humidity,
    wind: {
      speed: data.wind.speed,
      deg: data.wind.deg
    },
    weather: data.weather.map((w: any) => ({
      id: w.id,
      main: w.main,
      description: w.description,
      icon: w.icon
    }))
  };
}

export async function getForecast(city: string): Promise<ForecastData> {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`,
    { next: { revalidate: 3600 } } // Cache for 1 hour
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch forecast for ${city}`);
  }

  const data = await response.json();
  // Group forecasts by day
  const dailyForecasts: { [key: string]: any } = {};

  data.list.forEach((item: any) => {
    // Convert timestamp to date string (YYYY-MM-DD)
    const date = new Date(item.dt * 1000).toISOString().split('T')[0];

    // If we don't have an entry for this day yet, or if this entry is closer to noon
    const hour = new Date(item.dt * 1000).getHours();
    const existingHour = dailyForecasts[date] ?
      new Date(dailyForecasts[date].dt * 1000).getHours() : -1;

    // We prefer forecasts close to noon (12:00) for a representative day value
    if (!dailyForecasts[date] || Math.abs(hour - 12) < Math.abs(existingHour - 12)) {
      dailyForecasts[date] = item;
    }
  });
  // Convert the grouped forecasts object to an array
  const forecasts: DailyForecast[] = Object.values(dailyForecasts).map((item: any) => ({
    dt: item.dt,
    date: new Date(item.dt * 1000).toISOString().split('T')[0],
    temp: {
      day: item.main.temp,
      min: item.main.temp_min,
      max: item.main.temp_max,
    },
    humidity: item.main.humidity,
    weather: {
      id: item.weather[0].id,
      main: item.weather[0].main,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    },
    wind: {
      speed: item.wind.speed,
      deg: item.wind.deg,
    },
    pop: item.pop, // Probability of precipitation
  }));
  return {
    city: data.city.name,
    country: data.city.country,
    forecasts: forecasts.slice(0, 5), // Limit to 5 days
  };

}


export async function searchCities(query: string): Promise<Array<{ id: string; name: string }>> {
  if (!query || query.trim() === '') return [];

  try {
    // Using OpenWeatherMap's geocoding API to search for cities
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=10&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cities');
    }

    const data = await response.json();

    // Map the response to our expected format
    // Just use the city name for both ID and name
    return data.map((city: any) => ({
      // Create a URL-friendly ID from just the city name
      id: city.name.toLowerCase().replace(/\s+/g, '-'),
      // Just display the city name
      name: city.name
    }));
  } catch (error) {
    console.error('Error searching cities:', error);

    // Fallback to static data in case of API errors - simplified to just city names
    const cities = [
      { id: 'london', name: 'London' },
      { id: 'new-york', name: 'New York' },
      { id: 'tokyo', name: 'Tokyo' },
      { id: 'paris', name: 'Paris' },
      { id: 'sydney', name: 'Sydney' },
      { id: 'berlin', name: 'Berlin' },
      { id: 'rome', name: 'Rome' },
      { id: 'madrid', name: 'Madrid' },
      { id: 'moscow', name: 'Moscow' },
      { id: 'beijing', name: 'Beijing' },
      { id: 'phnom-penh', name: 'Phnom Penh' },
    ];

    // Filter cities based on query
    const filtered = cities.filter(city =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );

    return filtered;
  }
}



