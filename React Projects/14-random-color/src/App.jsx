import { useState } from "react";

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#444");
  const [clicked, setClicked] = useState(null);

  function generateHexColor() {
    const code = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexCode = "#";
    for (let i = 0; i <= 5; i++) {
      hexCode += code[Math.floor(Math.random() * code.length)];
    }
    console.log(hexCode);
    setColor(hexCode);
    setClicked("hex");
  }

  function generateRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCode = `rgb(${r},${g},${b})`;
    console.log(rgbCode);
    setColor(rgbCode);
    setClicked("rgb");
  }

  return (
    <main
      className="flex p-10 h-screen flex-col items-center gap-10 "
      style={{ background: color }}>
      <section className="flex gap-12 items-center text-xl">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setTypeOfColor("hex");
              setClicked(null);
            }}
            className={`${typeOfColor === "hex" && "clicked"} bg-neutral-900 text-white px-5 py-2.5 rounded transition-all ring-1 ring-white active:scale-90 `}>
            HEX
          </button>
          <button
            onClick={() => {
              setTypeOfColor("rgb");
              setClicked(null);
            }}
            className={`${typeOfColor === "rgb" && "clicked"} bg-neutral-900 text-white px-5 py-2.5 rounded transition-all ring-1 ring-white active:scale-90`}>
            RGB
          </button>
        </div>

        <button
          className="bg-neutral-900 text-white  rounded px-5 py-2.5 transition-all active:scale-95 ring-1 ring-white  "
          onClick={typeOfColor === "hex" ? generateHexColor : generateRgbColor}>
          Generate Random Color
        </button>
      </section>
      <section className="fixed top-1/2 -translate-y-1/2">
        <div className="text-4xl font-bold">
          {!clicked ? null : clicked === "hex" ? (
            <h1 className="py-2.5 px-5 rounded  bg-neutral-900">
              HEX Code : {color}{" "}
            </h1>
          ) : (
            <h1 className="py-2.5 px-5 rounded ring-1 ring-white bg-neutral-900">
              RGB Code : {color}{" "}
            </h1>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
