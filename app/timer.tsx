"use client";

import { useEffect, useState } from "react";
import getCountdown from "@/utils/getCountdown";

export default function Timer() {
  const [time, setTime] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCountdown());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="mt-4 text-center">
      <span
        className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white"
        suppressHydrationWarning
      >
        {time}
      </span>
    </p>
  );
}
