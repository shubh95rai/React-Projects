import { useEffect, useState } from "react";

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(10);
  const [noOfPeople, setNoOfPeople] = useState(1);
  const [total, setTotal] = useState("0.00");
  const [tip, setTip] = useState("0.00");
  const [error, setError] = useState("0.00");

  function calculate() {
    if (bill) {
      const billAmount = parseFloat(bill);
      const totalTip = (billAmount * tipPercent) / 100;
      const totalAmount = billAmount + totalTip;

      const tipPerPerson = totalTip / noOfPeople;
      const totalPerPerson = totalAmount / noOfPeople;

      setTip(tipPerPerson.toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
    }
  }

  useEffect(() => {
    calculate();
  }, [tipPercent, noOfPeople, bill]);

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-900 font-inter text-neutral-300">
      <section className=" flex rounded-xl bg-neutral-800">
        <section className="flex flex-col gap-5 rounded-s-xl border  border-r-0 border-neutral-700 p-10">
          <div className="flex flex-col gap-1">
            <label htmlFor="bill">Bill</label>
            <input
              value={bill}
              onChange={(e) => {
                setBill(e.target.value);
              }}
              type="number"
              id="bill"
              className="rounded border border-neutral-500 bg-transparent px-5 py-2.5"
              min={0}
              step={50}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tip">Tip %</label>
            <input
              value={tipPercent}
              onChange={(e) => {
                setTipPercent(e.target.value);
              }}
              type="number"
              id="tip"
              className="rounded border border-neutral-500 bg-transparent px-5 py-2.5"
              min={0}
              step={5}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="people">Number of people</label>
            <input
              value={noOfPeople}
              onChange={(e) => {
                setNoOfPeople(e.target.value);
              }}
              type="number"
              id="people"
              className="rounded border border-neutral-500 bg-transparent px-5 py-2.5"
              min={1}
            />
          </div>
        </section>
        <section className="flex w-96 flex-col  justify-center gap-10 rounded-e-xl border border-neutral-700 p-10 ">
          <div className="flex justify-between ">
            <div>
              <p className="text-3xl">Tip</p>
              <p>per person</p>
            </div>
            <div>
              <p className="text-4xl">{tip}</p>
            </div>
          </div>
          <div className="flex justify-between  ">
            <div>
              <p className="text-3xl">Total</p>

              <p>per person</p>
            </div>
            <div>
              <p className="text-4xl">{total}</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default TipCalculator;
