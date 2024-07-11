import { useEffect, useState } from "react";

function useDebounceValue(search, delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(search);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(search);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return debounceValue;
}

export default useDebounceValue;
