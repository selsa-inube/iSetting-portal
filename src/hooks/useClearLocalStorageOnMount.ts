import { useEffect } from "react";

const useClearLocalStorageOnMount = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
};

export { useClearLocalStorageOnMount };
