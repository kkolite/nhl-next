import { useEffect, useState } from "react";

export const useAnimation = (delay: number) => {
  const [isAnimation, setAnimation] = useState(true);
  useEffect(() => {
    setTimeout(() => setAnimation(false), delay)
  }, []);

  return isAnimation;
}
