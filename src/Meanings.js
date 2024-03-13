import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h4>{props.meanings.partOfSpeech}</h4>
      <p>{props.meanings.definition}</p>
      <em>
        <p className="word-example">{props.meanings.example}</p>
      </em>
    </div>
  );
}
