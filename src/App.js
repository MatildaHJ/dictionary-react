import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}
