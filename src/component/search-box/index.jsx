import React from 'react';
import './searchBox.css'


function SearchBox({ placeholder, handleonChange}) {
    return (
        <input 
            className="search"
            type="search"
            placeholder= { placeholder }
            onChange = { handleonChange }
        />
    );
}

export default SearchBox;