function StepsProgress({ activeStep, setActiveStep, steps }) {
  function handleNext() {
    setActiveStep(activeStep + 1);
  }
  function handlePrevious() {
    setActiveStep(activeStep - 1);
  }

  return (
    <main className="flex flex-col gap-5">
      <section className="flex gap-5">
        {steps.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index <= activeStep && "!bg-green-800 shadow-md"} rounded bg-neutral-700 px-4 py-2 text-white transition-all`}
            >
              {item}
            </div>
          );
        })}
      </section>
      <section className="flex justify-center gap-5">
        <button
          className="w-full rounded bg-neutral-900 py-2.5 transition-all"
          onClick={handlePrevious}
          disabled={activeStep === 0}
        >
          Prev
        </button>
        <button
          className="w-full rounded bg-neutral-900 py-2.5 transition-all"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </section>
    </main>
  );
}

export default StepsProgress;
