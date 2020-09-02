import React from 'react'
import "./SearchBox.css";
export default function SearchBar({placeholder , handleChange}) {
    return (  
        <input 
            className="search-bar"
            type="search"
            placeholder={placeholder} 
            onChange={handleChange}
        />                 
    )
}
