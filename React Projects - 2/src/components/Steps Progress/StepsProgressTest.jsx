import { useState } from "react";
import StepsProgress from "./StepProgress";

function StepsProgressTest() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  return (
    <main className="flex h-screen items-center justify-center bg-neutral-800 font-nunito text-neutral-200">
      <section className="flex flex-col items-center gap-5">
        <h1 className="text-2xl">Step Progress</h1>
        <StepsProgress
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          steps={steps}
        />
      </section>
    </main>
  );
}

export default StepsProgressTest;
