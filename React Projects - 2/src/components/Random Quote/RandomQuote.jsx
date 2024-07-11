import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

function RandomQuote({ props }) {
  const { quote, error, loading } = props;

  if (loading) {
    return <span className="loading loading-dots loading-md h-36"></span>;
  }

  if (error) {
    return (
      <main className="flex h-36 items-center">
        <p className="text-xl">{error}</p>
      </main>
    );
  }

  return (
    <main className=" flex h-36 flex-col justify-center text-center text-xl">
      <p>
        <BiSolidQuoteAltLeft className="inline-block align-top" />{" "}
        {quote?.content}{" "}
        <BiSolidQuoteAltRight className="inline-block  align-top" />
      </p>
      <p className="mt-3 text-end italic">- {quote?.author}</p>
    </main>
  );
}

export default RandomQuote;
