function Menu({ menuItems }) {
  return (
    <section className="grid grid-cols-2 gap-10">
      {menuItems.map((item, index) => {
        return (
          <article key={index} className=" flex gap-5  h-[150px]">
            <img
              src={item.img}
              alt=""
              className=" rounded border-2 border-yellow-600 h-[150px] object-cover min-w-60"
            />

            <div>
              <div className="flex justify-between">
                <h1 className="font-bold text-lg tracking-wider">
                  {item.title}
                </h1>
                <p className="text-yellow-600 font-bold text-lg tracking-wider">
                  ${item.price}
                </p>
              </div>
              <div className="h-[.25px] bg-neutral-400 mt-1"></div>
              <p className="text-sm text-neutral-600 mt-4">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Menu;
