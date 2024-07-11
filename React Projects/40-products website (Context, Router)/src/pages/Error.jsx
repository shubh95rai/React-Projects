import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-2xl">Page not found!</h1>
      <NavLink
        to="/"
        className="py-2.5 px-5 bg-neutral-300 text-black rounded hover:bg-neutral-100 transition-all">
        Go back to homepage
      </NavLink>
    </section>
  );
}

export default Error;
