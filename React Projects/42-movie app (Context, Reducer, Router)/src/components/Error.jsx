import { NavLink } from "react-router-dom";

function Error() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-2">
      <p className="text-lg">Error Occured</p>
      <NavLink to="/" className="rounded bg-neutral-800 p-2 text-white">
        Go back
      </NavLink>
    </section>
  );
}

export default Error;
