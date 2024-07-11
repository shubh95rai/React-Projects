import { useEffect, useState } from "react";

function CountdownTimer({ initialTime }) {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

  let intervalId = "";

  function onTimeFinish() {
    console.log("Timer finished!");
    setIsFinished(true);
  }

  function timer() {
    if (time === 0) {
      onTimeFinish();
      clearInterval(intervalId);
    } else {
      setTime(time - 1);
    }
  }

  useEffect(() => {
    if (isRunning) {
      intervalId = setInterval(() => {
        timer();
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [time, isRunning]);

  function handlePauseAndResume() {
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setTime(initialTime);
    setIsRunning(false);
    setIsFinished(false);
  }

  function handleStart() {
    setIsRunning(true);
  }

  const minutes = String(Math.floor(time / 60));
  const seconds = String(time % 60);

  // console.log(minutes, seconds);
  //   console.log(time);
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5 font-jetBrains text-neutral-800">
      <h1 className="text-4xl font-bold uppercase">Countdown Timer</h1>
      <section className="flex flex-col items-center justify-center gap-5 rounded bg-neutral-200 p-10">
        <p className="text-6xl font-bold">
          {minutes.padStart(2, "0")}:{seconds.padStart(2, "0")}
        </p>
        <div className=" flex gap-2">
          <button
            className="w-28 rounded bg-neutral-400 py-2 "
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="w-28 rounded bg-neutral-400 py-2 "
            onClick={handlePauseAndResume}
          >
            {isRunning ? "Pause" : "Resume"}
          </button>
          <button
            className="w-28 rounded bg-neutral-400 py-2 "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </section>
      <p className="fixed top-[520px] text-2xl ">
        {isFinished && "Timer Finished!"}
      </p>
    </main>
  );
}

export default CountdownTimer;
