import MenuList from "./MenuList";
import { IoChevronForward } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";

function MenuItem({ item }) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between"
        onClick={() => {
          setClicked(!clicked);
        }}>
        <div className="pl-">{item.label}</div>
        {item.children &&
          item.children.length &&
          (!clicked ? <IoChevronForward /> : <IoChevronDownSharp />)}
      </div>

      {clicked && (
        <div className="pl-5">
          {item.children && item.children.length && (
            <MenuList data={item.children} />
          )}
        </div>
      )}
    </>
  );
}

export default MenuItem;
