import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response) {
        console.log(response.dat[0]);
}

    function search(event) {
        event.preventDefault();
        alert(`You entered ${keyword}`);

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
   

    function handleKeyword(event) {
        console.log(event.target.value);
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
            <input type="search" onChange={handleKeyword}/>
            </form>
        </div>
    );
}