import React, { useState } from "react";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function search(event) {
        event.preventDefault();
        alert(`You entered ${keyword}`);
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