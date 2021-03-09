import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response = {
  isOffline: boolean;
  setIsOffline: Dispatch<SetStateAction<boolean>>;
};

export default function useConnection(): Response {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    window.addEventListener("offline", () => setIsOffline(true));
    window.addEventListener("online", () => setIsOffline(false));
  }, []);

  return { isOffline, setIsOffline };
}
