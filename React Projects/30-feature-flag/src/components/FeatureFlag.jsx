import { useGlobalContext } from "../context/globalContext";
import Aaa from "./Aaa";
import Bbb from "./Bbb";
import Ccc from "./Ccc";

function FeatureFlag() {
  const { loading, errorMsg, features } = useGlobalContext();

  const componentsToRender = [
    {
      key: "Aaa",
      component: <Aaa />,
    },
    {
      key: "Bbb",
      component: <Bbb />,
    },
    {
      key: "Ccc",
      component: <Ccc />,
    },
  ];

  if (loading) {
    return (
      <main>
        <span className="loading loading-dots loading-lg"></span>
      </main>
    );
  }

  if (errorMsg) {
    return (
      <main>
        <h1 className="text-2xl italic">{errorMsg}</h1>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-5">
      {componentsToRender.map((component, index) => {
        return (
          <div
            key={index}
            className="hover:scale-105 transition-all cursor-pointer">
            {features[component.key] ? component.component : null}
          </div>
        );
      })}
    </main>
  );
}

export default FeatureFlag;
