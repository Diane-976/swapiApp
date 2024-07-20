import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/caracterService';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterById(id);
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Character not found.</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Homeworld: {character.homeworld}</p>
    </div>
  );
};

export default CharacterDetail;