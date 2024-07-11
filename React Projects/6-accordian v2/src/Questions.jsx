import data from "./data";
import Accordian from "./Accordian";
import { useState } from "react";

function Questions() {
  const [showInfo, setShowInfo] = useState(null);

  function toggle(index) {
    setShowInfo(showInfo === index ? null : index);
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      {data.map((item) => {
        return (
          <Accordian
            item={item}
            key={item.id}
            toggle={toggle}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
          />
        );
      })}
    </div>
  );
}

export default Questions;
