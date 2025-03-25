import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [bicycle, setBicycle] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    async function getAllBicycle() {
      try {
        const res = await fetch("http://localhost:5005/bicycles");
        const parsed = await res.json();
        console.log("here are the bicycle", parsed);
        setBeers(parsed);
      } catch (error) {
        console.log(error);
      }
    }
    getAllBicycle();
  }, []);
  return (
    <>
      <Search query={query} setQuery={setQuery} />

      <div className="search-container">
        {bicycle &&
          bicycle
            .filter((oneBicycle) =>
              oneBicycle.model.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((bicycle) => {
              return (
                <div key={bicycle.id}>
                  <Link to={`/category/${bicycle}`}>
                    <div className="search-card">
                      <img
                        src={bicycle.picture_url}
                        alt={"image of" + bicycle.model}
                      />
                      <h5>{bicycle.model}</h5>
                      <h6>
                        <em>{bicycle.category}</em>
                      </h6>
                    </div>
                  </Link>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default SearchBar;
