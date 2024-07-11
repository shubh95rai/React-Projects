import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 h-screen">
      <h1 className="text-xl font-medium">Error occured!</h1>
      <NavLink
        to="/"
        className="py-2.5 px-5 bg-slate-700 text-slate-200 rounded">
        Go back
      </NavLink>
    </section>
  );
}

export default Error;
