import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import './Results.css';

export default function Results(props) {
    if (props.results) {
        return (
            <div className="results">
                <section>
                <h1 className="word">
                    {props.results.word}
                </h1>
            
                <span id="phonetic">{props.results.phonetics.map(function (phonetics, index) {
                    return (
                        <div key={index}>
                            <Phonetics phonetics={phonetics} />
                        </div>
                    )
                })}</span> 
                </section>
                <br />
                                    {props.results.meanings.map(function (meaning, index) {
                            return (
                                <div key={index}>
                                    <Meaning meaning={meaning} />
                                </div>
                                
                        )
                        
                        })
                }
            </div>
        );
    } else {
        return null
    }
}