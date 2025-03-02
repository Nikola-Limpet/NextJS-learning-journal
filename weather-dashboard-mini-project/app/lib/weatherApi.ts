import { WeartherData } from "./types";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(city: string): Promise<WeartherData> {
  const response = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    console.error(`Failed to fetch weather: ${response.status} ${response.statusText}`);
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    weather: data.weather
  }
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
    weather: data.weather
  }
}