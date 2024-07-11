import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 h-screen">
      <h1 className="text-lg">Error occured!</h1>
      <NavLink to="/" className="py-2.5 px-5 bg-neutral-900 text-neutral-400">
        Go back
      </NavLink>
    </section>
  );
}

export default Error;
