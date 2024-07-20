import React, { useEffect, useState } from 'react';
import { getCharacters, searchCharactersByName } from '../services/caracterService';
import SearchAppBar from '../widgets/searchBar';
import AlignItemsList from '../widgets/list';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = await getCharacters(page);
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, [page]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (search.trim() === "") {
        const data = await getCharacters(page);
        setCharacters(data);
      } else {
        const data = await searchCharactersByName(search);
        setCharacters(data);
      }
    };

    fetchSearchResults();
  }, [search, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <SearchAppBar onSearchChange={handleSearchChange} />
      <h1>Star Wars Characters</h1>
      <AlignItemsList characters={characters} />
      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default CharacterList;
