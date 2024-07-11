import { useEffect, useState } from "react";

function useDebounceValue(inputValue, delay = 500) {
  const [debounceValue, setDebounceValue] = useState(inputValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, delay]);

  return debounceValue;
}

export default useDebounceValue;
