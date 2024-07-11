import { useGlobalContext } from "../context/context";

function Favourites() {
  const { favList, handleAddToFavList } = useGlobalContext();

  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {favList && favList.length ? (
        favList.map((item, index) => {
          return (
            <div
              key={index}
              className="w-80 p-5 bg-neutral-900 flex flex-col gap-5 items-center">
              <img
                src={item.image_url}
                alt=""
                className="h-40  object-cover w-full"
              />
              <h1 className="capitalize text-lg">
                {item.title.length > 30
                  ? `${item.title.substring(0, 25)}...`
                  : item.title}
              </h1>
              <button
                className="bg-neutral-400 text-neutral-800 px-5 py-2 w-full text-center"
                onClick={() => {
                  handleAddToFavList(item);
                }}>
                Remove from favourites
              </button>
            </div>
          );
        })
      ) : (
        <p>Nothing has been added</p>
      )}
    </section>
  );
}

export default Favourites;
