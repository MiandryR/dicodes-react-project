import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleDicoResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
        let dicoApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(dicoApiUrl).then(handleDicoResponse);

        let pexelsApiKey = `563492ad6f91700001000001199ada6b14654ae981c457220f6e5fe5`;
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    function load() {
        setLoaded(true);
        search();
    }
    
    if (loaded) {
        return (
            <div className="Dictionary">
                <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="search" placeholder="Enter a word to look up" onChange={handleKeyword} />
                    </form>
                </div>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
}