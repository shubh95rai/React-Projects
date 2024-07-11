import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function fetchData() {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data) {
          setData(data.products);
          setLoading(false);
        }
      } catch (error) {
        setError("Something went wrong!");
        setLoading(false);
      }
    }, 1000);
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
