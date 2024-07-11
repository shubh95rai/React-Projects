import { useEffect, useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { PiCaretCircleUpDownFill } from "react-icons/pi";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [rotate, setRotate] = useState(false);

  async function fetchExchangeRate() {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`,
    );

    const data = await response.json();

    const calculatedRate = data.rates[toCurrency];
    setExchangeRate(calculatedRate);
    setConvertedAmount((amount * calculatedRate).toFixed(2));
  }
  //   console.log(exchangeRate);
  //   console.log(convertedAmount);

  useEffect(() => {
    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency]);

  function handleAmount(e) {
    setAmount(e.target.value);
  }
  function handleFromCurrency(e) {
    setFromCurrency(e.target.value);
  }

  function handleToCurrency(e) {
    setToCurrency(e.target.value);
  }
  function handleChangeCurrency(e) {
    setToCurrency(fromCurrency);
    setFromCurrency(toCurrency);
    setRotate(!rotate);
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-700 font-poppins text-neutral-300 shadow-xl ">
      <section className="flex w-96 flex-col items-center gap-5 rounded-xl bg-neutral-900 p-10 ">
        <div className="flex w-full flex-col gap-2 ">
          <input
            type="number"
            name="currency"
            value={amount}
            className="rounded border border-neutral-700 bg-transparent p-2 outline-none"
            onChange={handleAmount}
          />
          <select
            value={fromCurrency}
            className="rounded bg-neutral-800 p-2"
            onChange={handleFromCurrency}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        {/* <BsArrowDownCircleFill className="text-2xl" /> */}
        <div className="flex w-full items-center gap-2">
          <div className="h-0.5 w-full bg-white/20"></div>
          <PiCaretCircleUpDownFill
            className={` shrink-0 cursor-pointer text-3xl active:text-neutral-400 transition  ${rotate && "rotate-180"}`}
            onClick={handleChangeCurrency}
          />
          <div className="h-0.5 w-full bg-white/20"></div>
        </div>
        <div className="flex w-full flex-col gap-2">
          {/* <input
            type="number"
            name="currency"
            className="rounded border border-neutral-700 bg-transparent p-2 outline-none"
            readOnly
          /> */}
          <select
            value={toCurrency}
            className="rounded bg-neutral-800 p-2"
            onChange={handleToCurrency}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className=" w-full">
          <p>
            {amount} {fromCurrency} ={" "}
          </p>
          <p className="text-3xl font-medium">
            {convertedAmount} {toCurrency}
          </p>
        </div>
      </section>
    </main>
  );
}

export default CurrencyConverter;
