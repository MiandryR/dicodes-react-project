import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
    console.log(props.phonetic)
    return (
        
        <div className="phonetics">
           { props.phonetics.text }
            <br />
            <span id="audio">
            <ReactAudioPlayer
                src={props.phonetics.audio}
                autoPlay={false}
                controls
                />
            </span>
            <br />           
        </div>
    );
}