import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`You are searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
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
