import MenuItem from "./MenuItem";

function MenuList({ data }) {
  return (
    <main className="">
      {data.map((item, index) => {
        return <MenuItem key={index} item={item} />;
      })}
    </main>
  );
}

export default MenuList;
