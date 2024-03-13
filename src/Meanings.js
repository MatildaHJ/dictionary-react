import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h4>{props.meanings.partOfSpeech}</h4>
      <p>{props.meanings.definition}</p>
      <em>
        <p className="word-example">{props.meanings.example}</p>
      </em>
    </div>
  );
}
