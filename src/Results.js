import React from "react";
import Meanings from "./Meanings";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h3>{props.results.word}</h3>
          <div className="phonetic">/' {props.results.phonetic} /</div>
        </section>

        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
