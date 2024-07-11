import Tour from "./Tour";

function Tours({ tours,removeTours }) {
  return (
    <main className="">
      <div className=" flex-col items-center gap-1 flex">
        <h1 className="text-3xl font-bold tracking-wider">Our Tours</h1>
        <div className="bg-sky-600 h-1 rounded-full w-20"></div>
      </div>

      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
      })}
      <div></div>
    </main>
  );
}

export default Tours;
