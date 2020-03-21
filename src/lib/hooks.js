import { useState, useEffect } from 'react';

// eslint-disable-next-line no-undef
const apiKey = process.env.REACT_APP_API_KEY;
const endPoint = 'https://api.openweathermap.org/data/2.5/weather'

const useFetch = (params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let city = params.city;
  let country = params.country;
  
  const fetchData = async (city, country) => {
    try {
      const response = await fetch(`${endPoint}?q=${city},${country}&appid=${apiKey}`);
      const json = await response.json();

      setData(json);
    }
    catch (error) {
      setError(error);
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(city,country)
  },[city,country]);

  return [data, loading, error];
}

export { useFetch };