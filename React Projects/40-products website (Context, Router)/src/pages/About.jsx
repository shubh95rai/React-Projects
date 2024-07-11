import React from "react";

function About() {
  return (
    <main>
      <section className="flex items-center px-32 py-10 bg-neutral-200 text-neutral-800">
        <h1 className="text-3xl font-semibold uppercase">About</h1>
      </section>
      <section className="bg-white px-32 py-20 text-neutral-800 grid grid-cols-3 gap-10 ">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-semibold uppercase mb-2">Why Choose Us.</h2>
            <div className="bg-neutral-800 h-0.5 w-20 rounded-full "></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat dignissimos cupiditate iusto tenetur ad minima labore voluptatibus. Eveniet eum praesentium, consequatur ut cupiditate quae! Dolore non quae fugiat eveniet, eos quos voluptatum vero beatae voluptate harum soluta maxime repudiandae unde iure doloremque. Quos, sapiente ipsum!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-semibold uppercase mb-2">Our Mission.</h2>
            <div className="bg-neutral-800 h-0.5 w-20 rounded-full"></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            reiciendis consequuntur commodi, itaque fugiat nisi quidem
            voluptatem suscipit doloribus dolores voluptate recusandae provident
            perferendis sed deleniti illum distinctio sint praesentium est
            officiis vero perspiciatis. Et, sit in! Reiciendis, doloribus! In!
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-semibold uppercase mb-2">What We Do.</h2>
            <div className="bg-neutral-800 h-0.5 w-20 rounded-full"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            adipisci natus perspiciatis eligendi culpa blanditiis fuga beatae
            expedita in? Eos, odit perspiciatis, enim laboriosam eum illum
            facere nemo labore culpa numquam nulla repudiandae pariatur, est
            sint aut rerum ipsa nobis. Maxime quasi temporibus quod dolor!
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
