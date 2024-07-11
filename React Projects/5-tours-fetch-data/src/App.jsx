import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (tourId) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== tourId;
    });

    setTours(newTours);
  };
  const fetchTours = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setTours(data);
        console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className=" flex-col items-center  gap-1 flex">
          <h1 className="text-3xl font-bold tracking-wider">No tours left</h1>
          <div className="bg-sky-600 h-1 rounded-full w-20"></div>
          <button
            className="my-10 bg-sky-600 py-2 px-5 rounded-full text-white shadow-md hover:bg-sky-700"
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return <Tours tours={tours} removeTours={removeTours}/>;
}
export default App;
