import React, { useState, useEffect } from "react";

import Suggestions from "./Suggestions";
// import axios from "axios";

const Search = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  const fetchResults = query => {
    if (query !== "") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => setHits(data.hits));
    } else {
      return (
        <div className="alert">
          <p> Please insert something</p>
        </div>
      );
    }
  };

  useEffect(() => fetchResults(query), [query]);

  return (
    <div className="search">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />

      <Suggestions />
    </div>
  );
};

export default Search;
