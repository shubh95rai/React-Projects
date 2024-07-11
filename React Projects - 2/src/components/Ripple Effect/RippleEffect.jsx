import { useEffect, useState } from "react";
import "./style.css";

function RippleEffect() {
  const [isRippleEffect, setIsRippleEffect] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: null, y: null });

  function handleCoordinates(e) {
    const rect = e.target.getBoundingClientRect();

    setCoordinates({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }
  console.log(isRippleEffect);

  function handleRippleEffect() {
    if (coordinates.x !== null && coordinates.y !== null) {
      setIsRippleEffect(true);

      setTimeout(() => {
        setIsRippleEffect(false);
      }, 700);
    }
  }

  useEffect(() => {
    handleRippleEffect();
  }, [coordinates]);

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-800 to-sky-900 text-neutral-300 ">
      <button
        className="relative overflow-hidden rounded bg-neutral-900 px-5 py-2.5 shadow-lg"
        onClick={handleCoordinates}
      >
        {isRippleEffect ? (
          <span
            className="ripple"
            style={{ left: coordinates.x, top: coordinates.y }}
          ></span>
        ) : null}
        Ripple Effect
      </button>
    </main>
  );
}

export default RippleEffect;
