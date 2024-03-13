import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);

    let apiKey = "bf3o0930bd56bb8b43fbe8a4cftca0a1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="mt-4">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="search"
              placeholder="Type a word.."
              aria-label=".form-control-lg example"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-3">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
