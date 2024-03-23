import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function Search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <header>
          <h1>Dictionary</h1>
          <h2>What word do you want to look up?</h2>
          <form id="form" onSubmit={handleSubmit} className="mt-4">
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Type a word.."
                  aria-label=".form-control-lg example"
                  onChange={handleKeywordChange}
                  defaultValue={props.defaultKeyword}
                />
              </div>
              <div className="col-3">
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </form>
        </header>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading..";
  }
}
