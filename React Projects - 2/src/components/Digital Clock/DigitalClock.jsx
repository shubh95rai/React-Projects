import { useEffect, useState } from "react";

function DigitalClock() {
  const [clock, setClock] = useState(new Date());

  const timeString = clock.toLocaleTimeString();
  const dateString = clock.toLocaleDateString("en-gb", {
    month: "long",
    day: "numeric",
    year: "numeric",
    weekday: "short",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 bg-neutral-900 font-jetBrains text-neutral-200">
      <div className="text-5xl font-bold">{timeString}</div>
      <div className="text-xl">{dateString}</div>
    </main>
  );
}

export default DigitalClock;
