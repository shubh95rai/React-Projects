import data from "./data";
import Menu from "./Menu";
import Category from "./Category";
import { useState } from "react";

const categoriesArray = data.map((item) => {
  return item.category;
});

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([
    "All",
    ...new Set(categoriesArray),
  ]);

  const filteredMenu = (clickedCategory) => {
    if (clickedCategory === "All") {
      setMenuItems(data);
      return;
    }

    const newMenuItems = data.filter((item) => {
      return item.category === clickedCategory;
    });

    setMenuItems(newMenuItems);
  };

  return (
    <main>
      <section className="flex flex-col gap-10 items-center">
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-4xl font-bold">Our Menu</h1>
          <div className="h-1 rounded-full bg-yellow-600 w-20"></div>
        </div>
        <Category
          categories={categories}
          filteredMenu={filteredMenu}
        ></Category>
        <Menu menuItems={menuItems}></Menu>
      </section>
    </main>
  );
}

export default App;
