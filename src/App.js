import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <h2>props : propterties</h2>
      <Hello age={15} />
      <Hello age={20} />
      <Hello age={30} />
    </div>
  );
}

export default App;
