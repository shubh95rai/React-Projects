import { useState } from "react";

function BMICalculator() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  const [BMI, setBMI] = useState(20.1);

  function handleCalculate() {
    const result = weight / (height / 100) ** 2;
    setBMI(Math.round(result * 10) / 10);
    console.log(BMI);
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-900 font-inter text-neutral-300">
      <section className="flex w-96 flex-col gap-10 rounded border border-neutral-700 bg-neutral-800 p-10">
        <h1 className=" text-center text-3xl font-bold">BMI Calculator</h1>
        <div className="flex flex-col gap-1">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            className="rounded border border-neutral-500 bg-transparent px-5 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            className="rounded border border-neutral-500 bg-transparent px-5 py-2"
          />
        </div>
        <button
          className="rounded bg-neutral-300 py-2  text-black transition-all hover:bg-neutral-200"
          onClick={handleCalculate}
        >
          Calculate
        </button>
        <div>
          <p>BMI =</p>
          <p className="text-4xl font-semibold">
            {BMI}{" "}
            <span className="text-base">
              {BMI < 18.5 ? (
                <span className="text-yellow-400">Underweight</span>
              ) : BMI >= 18.5 && BMI <= 24.9 ? (
                <span className="text-green-400">Normal</span>
              ) : BMI >= 25 && BMI <= 29.9 ? (
                <span className="text-orange-400">Overweight</span>
              ) : (
                <span className="text-red-400">Obesity</span>
              )}
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default BMICalculator;
