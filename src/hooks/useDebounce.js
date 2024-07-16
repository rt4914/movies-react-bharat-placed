import { useEffect, useState } from "react";

function useDebounce(callback, delay) {
  const [debounceValue, setDebounceValue] = useState(callback);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
  return debounceValue;
}

export default useDebounce
