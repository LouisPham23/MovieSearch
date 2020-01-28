import React, { useState } from "react";

const Search = ({ searchClicked }) => {
  const [search, setSearch] = useState("");

  const searchChangeHandle = e => {
    setSearch(e.target.value);
  };

  const resetField = () => {
    setSearch("");
  };
  const searchClickHandle = e => {
    e.preventDefault();
    searchClicked(search);
    resetField();
  };
  return (
    <div>
      <form className="Search">
        <input
          type="text"
          value={search}
          placeholder="Search..."
          onChange={searchChangeHandle}
        />
        <button type="submit" onClick={searchClickHandle}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Search;
