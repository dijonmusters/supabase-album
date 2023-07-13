"use client";

import { useEffect, useState } from "react";
import { formatDuration, intervalToDuration } from "date-fns";

const getTime = () => {
  const duration = intervalToDuration({
    start: new Date(2024, 0, 1),
    end: new Date(),
  });
  return formatDuration(duration, {
    delimiter: ", ",
  });
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
    <p className="mt-4 text-center">
      <span className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white">
        {time}
      </span>
    </p>
  );
}
