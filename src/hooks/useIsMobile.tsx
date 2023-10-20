import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const calculateIsMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    document.addEventListener("resize", calculateIsMobile);

    return () => {
      document.removeEventListener("resize", calculateIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
