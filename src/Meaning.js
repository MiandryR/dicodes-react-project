import React from "react";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="meaning">
            <h2>{props.meaning.partOfSpeech}</h2>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br />
                            <em>👁‍🗨 {definition.example}</em>
                        </p>
                    </div>
             );
            })}
        </div>
    );
}