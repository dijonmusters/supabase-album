"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";

const getTime = () => {
  return formatDistanceToNow(new Date(2024, 0, 1));
};

export default function Timer() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="mt-8">
      <span className="text-9xl font-bold text-white">{time}</span>
    </p>
  );
}
