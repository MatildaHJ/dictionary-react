import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <section>
        <h4>{props.meanings.partOfSpeech}</h4>

        <p>{props.meanings.definition}</p>

        <em>
          <p className="word-example">{props.meanings.example}</p>
        </em>

        <Synonyms synonyms={props.meanings.synonyms} />
      </section>
    </div>
  );
}
