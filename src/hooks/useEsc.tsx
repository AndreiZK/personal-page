import { useEffect } from "react";

const useEsc = (callback: () => void) => {
  useEffect(() => {
    const runCallback = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      callback();
    };

    document.addEventListener("keydown", runCallback);

    return () => {
      document.removeEventListener("keydown", runCallback);
    };
  }, [callback]);
};

export default useEsc;
