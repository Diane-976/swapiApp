import React, { useEffect, useState } from 'react';
import { getCharacters, searchCharactersByName } from '../services/Service';
import AlignItemsList from '../widgets/list';

const CharacterList = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      const data = searchTerm ? await searchCharactersByName(searchTerm) : await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <AlignItemsList characters={characters} />
    </div>
  );
};

export default CharacterList;
