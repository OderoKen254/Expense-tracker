import React from "react";
import "./App.css";


// This component renders a search bar for filtering expenses
// It receives searchTerm and setSearchTerm as props
// searchTerm: the current search term entered by the user
// setSearchTerm: a function to update the search term in the parent component
// The component renders an input field for the user to enter their search term
// The value of the input field is controlled by the searchTerm prop
// The onChange event handler updates the searchTerm state in the parent component



function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search expenses..."
        className="search-bar"
      />
    );
  }
  
  export default SearchBar;