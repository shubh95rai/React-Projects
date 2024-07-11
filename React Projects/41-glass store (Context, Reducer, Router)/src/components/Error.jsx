import { NavLink, useRouteError } from "react-router-dom";

function Error() {
  const errorMessage = useRouteError();
  console.log(errorMessage);
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg font-medium">
        Sorry, an unexpected error has occurred.
      </p>

      <NavLink
        to="/"
        className="rounded bg-neutral-800 px-5 py-2.5 text-white hover:bg-neutral-900"
      >
        Go back
      </NavLink>
    </section>
  );
}

export default Error;
