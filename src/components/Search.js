import React from "react";

const Search = ({ query, setQuery, fetchResults }) => {
  const onSubmit = e => {
    e.preventDefault();

    fetchResults(query);
  };

  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
