import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function App({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function handleNextBtn() {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
      return;
    }

    setCurrentSlide(currentSlide + 1);
  }
  function handlePrevBtn() {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
      return;
    }

    setCurrentSlide(currentSlide - 1);
  }

  async function fetchImages() {
    try {
      setLoading(true);

      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg("Failed to Fetch!");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [url]);

  if (loading) {
    return (
      <main>
        <span className="loading loading-infinity loading-lg"></span>
      </main>
    );
  }
  if (errorMsg) {
    return (
      <main>
        <h1>{errorMsg}</h1>
      </main>
    );
  }
  return (
    <main className="w-[600px] h-[400px] relative rounded-xl overflow-hidden">
      <FaChevronLeft
        className="text-6xl absolute left-0 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-all cursor-pointer"
        onClick={() => {
          handlePrevBtn();
        }}
      />
      {images.map((image, index) => {
        return (
          <img
            key={index}
            src={image.download_url}
            alt=""
            className={`${currentSlide === index && "active"} hidden transition`}
          />
        );
      })}
      <FaChevronRight
        className="text-6xl absolute right-0 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-all cursor-pointer"
        onClick={() => {
          handleNextBtn();
        }}
      />
      <div className="flex gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 ">
        {images.map((dot, index) => {
          return (
            <div
              key={dot.id}
              className={`${currentSlide === index && "active-dot"} h-3 w-3 rounded-full bg-white opacity-50 transition-all cursor-pointer`}
              onClick={() => {
                setCurrentSlide(index);
              }}></div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
