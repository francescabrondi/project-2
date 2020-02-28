import React, { useState, useEffect } from "react";

// import axios from "axios";

const Search = ({ fetchResults }) => {
  const [query, setQuery] = useState("");

  useEffect(() => fetchResults(query), [query]);

  return (
    <div className="search">
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
