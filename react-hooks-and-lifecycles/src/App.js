import logo from "./logo.svg";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </div>
  );
}

export default App;
