import { useState } from "react";

function Tooltip({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);

  let timeoutId;

  function handleShowTooltip() {
    timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }
  function handleHideTooltip() {
    clearTimeout(timeoutId);
    setIsVisible(false);
  }

  return (
    <main
      className="relative"
      onMouseEnter={handleShowTooltip}
      onMouseLeave={handleHideTooltip}
    >
      {children}
      {isVisible && (
        <p className="absolute -right-[190px] -top-1 rounded bg-neutral-200 px-4 py-2 text-xl text-black">
          {content}
        </p>
      )}
    </main>
  );
}

export default Tooltip;
