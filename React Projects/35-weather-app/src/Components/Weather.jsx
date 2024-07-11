function Weather({ props }) {
  const { search, loading, weatherData, error, date, temp } = props;

  console.log(weatherData);

  if (loading) {
    return (
      <main className=" flex justify-center items-center h-full text-white">
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex text-center justify-center items-center h-full text-white">
        <p className="w-52">{error}</p>
      </main>
    );
  }

  return (
    <section className="flex flex-col gap-8 items-center text-white">
      <p className="text-lg">{date()}</p>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-6xl">{temp()}°C</h1>
        <h1 className="text-4xl">{weatherData.name}</h1>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center">
          <p className="text-2xl">{weatherData?.main?.humidity}%</p>
          <h1>Humidity</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl">{weatherData?.wind?.speed} Km/h</p>
          <h1>Wind Speed</h1>
        </div>
      </div>
    </section>
  );
}

export default Weather;
