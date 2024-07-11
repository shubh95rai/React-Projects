import { useState } from "react";
import { FaStar } from "react-icons/fa";

function App() {
  const stars = [...Array(5)];

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }
  function handleMouseEnter(index) {
    setHover(index);
  }
  function handleMouseLeave(index) {
    setHover(rating);
  }
  return (
    <main className="flex gap-2 text-8xl">
      {stars.map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => {
              handleClick(index);
            }}
            onMouseEnter={() => {
              handleMouseEnter(index);
            }}
            onMouseLeave={() => {
              handleMouseLeave(index);
            }}
            className={`${index <= (hover || rating) && "active"} transition cursor-pointer`}
          />
        );
      })}
    </main>
  );
}

export default App;
