import { useState, useEffect } from 'react';

export function useFetchCarsSelect(url, options) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [engineCapacityMax, setEngineCapacity] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api${url}`, options);
        const json = await res.json();
        const engineCapacitySelect = json.map((vehicle) => {
          return vehicle.engineCapacity;
        });
        const engineCapacityMax = Math.max(...engineCapacitySelect);
        setEngineCapacity(engineCapacityMax);
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return { loading, data, engineCapacityMax, error };
}
