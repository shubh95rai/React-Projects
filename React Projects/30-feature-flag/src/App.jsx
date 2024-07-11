import { GlobalContextProvider } from "./context/globalContext";

import FeatureFlag from "./components/FeatureFlag";


function App() {
  return (
    <GlobalContextProvider>
      <FeatureFlag />
    </GlobalContextProvider>
  );
}

export default App;
