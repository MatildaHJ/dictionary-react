import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map((synonym, index) => (
          <span className="synonym-words" key={index}>
            <em> {synonym}</em>
          </span>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
