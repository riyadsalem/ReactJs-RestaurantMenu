import "./App.css";
import MainComponent from "./Component/MainComponent";
import { BrawserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrawserRouter>
        <MainComponent />
      </BrawserRouter>
    </div>
  );
}

export default App;
