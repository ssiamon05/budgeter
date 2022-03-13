import {useState} from "react";
import mainStore from "store/mainStore";
import Main from "features/Main";

function App() {
  const [store, uStore] = useState(mainStore);

  const accessStore = {store, uStore}

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Main store = {accessStore} />
    </div>
  );
}

export default App;
