import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          This is an{" "}
          <a
            href="https://github.com/MatildaHJ/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            open source code
          </a>{" "}
          by <strong>Matilda Larsson</strong>
        </footer>
      </div>
    </div>
  );
}
