import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          <section className="grid grid-2-columns">
            <div>
              <h5>About this website</h5>
              <p className="footer-text">
                This project was made by <strong>Matilda Larsson</strong> as
                part of SheCodes workshop React Add-on and is{" "}
                <a
                  href="https://github.com/MatildaHJ/dictionary-react"
                  target="_blank"
                  rel="noreferrer"
                >
                  open sourced
                </a>
              </p>
            </div>
            <div className="footer-icons">
              <a
                href="https://github.com/MatildaHJ"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-square-github fa-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/matilda-larsson-0176a3289/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin fa-2xl"></i>
              </a>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}
