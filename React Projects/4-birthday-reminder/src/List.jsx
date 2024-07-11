function List({ person }) {
  return (
    <>
      {person.map((person) => {
        const { id, name, age, image } = person;

        return (
          <article className="flex gap-4 " key={id}>
            <img
              src={image}
              alt={name}
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex flex-col justify-center">
              <h1 className=" font-semibold">{name}</h1>
              <p className=" text-neutral-500 text-sm">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;
