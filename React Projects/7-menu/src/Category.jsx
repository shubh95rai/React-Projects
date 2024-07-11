function Category({ categories, filteredMenu }) {
  return (
    <div className="flex gap-5 mb-4">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => {
              filteredMenu(category);
            }}
            key={index}
            className="hover:bg-yellow-600 py-2 px-4 rounded hover:text-white transition-all text-yellow-600 font-medium"
          >
            {`${category[0].toUpperCase()}${category.slice(1)}`}
          </button>
        );
      })}
    </div>
  );
}

export default Category;
