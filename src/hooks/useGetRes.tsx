import { useEffect, useState } from "react";

const useGetRes = () => {
  const [res, setRes] = useState<string>("");

  const calculateRes = () => {
    if (window.innerWidth < 768) {
      setRes("sm");
    } else if (window.innerWidth < 1600) {
      setRes("md");
    } else setRes("lg");
  };

  useEffect(() => calculateRes(), []);

  useEffect(() => {
    document.addEventListener("resize", calculateRes);

    return () => {
      document.removeEventListener("resize", calculateRes);
    };
  }, []);

  return res;
};

export default useGetRes;
