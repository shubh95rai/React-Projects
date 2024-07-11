import Tooltip from "./Tooltip";
import { IoMdInformationCircle } from "react-icons/io";

function TooltipTest() {
  return (
    <main className="flex h-screen items-center justify-center  bg-neutral-800 text-neutral-200">
      <section className="flex flex-col items-center gap-5">
        <h1 className="text-4xl">Tooltip</h1>
        <Tooltip
          content={"Tooltip Content"}
          children={
            <IoMdInformationCircle className="cursor-pointer text-4xl" />
          }
        />
      </section>
    </main>
  );
}

export default TooltipTest;
