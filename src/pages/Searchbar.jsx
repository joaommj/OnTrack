import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    async function getAllBicle() {
      try {
        const res = await fetch("http://localhost:5005/bicycles");
        const parsed = await res.json();
        console.log("here are the bicycle", parsed);
        setBeers(parsed);
      } catch (error) {
        console.log(error);
      }
    }
    const handleSearch = (event) => {
      event.preventDefault();
      console.log("Search for:", query);
    };
  });
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit"></button>
    </form>
  );
}

export default SearchBar;
