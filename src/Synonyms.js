import React from "react";

export default function Synonyms(props) {
    if (props.synonyms) {
        return (
            <small>
            <div>[Synonym] •</div>
            <ul className="Synonyms">
                {props.synonyms.map(function (synonym, index) {
                    return (
                        <li key={index}>
                            {synonym}
                        </li>
                    )
                })}
                </ul>
            </small>
        );
    } else {
        return null;
    }
}