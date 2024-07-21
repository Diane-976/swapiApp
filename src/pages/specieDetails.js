import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSpecieById, getCharacterById, getPlanetById, getFilmById } from '../services/Service';

const SpecieDetail = () => {
  const { id } = useParams();
  const [specie, setSpecie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecie = async () => {
      setLoading(true);
      const specieData = await getSpecieById(id);
      const peopleData = await Promise.all(specieData.people.map(url => getCharacterById(url.match(/\/([0-9]*)\/$/)[1])));
      const homeworldData = await getPlanetById(specieData.homeworld.match(/\/([0-9]*)\/$/)[1]);
      const filmsData = await Promise.all(specieData.films.map(url => getFilmById(url.match(/\/([0-9]*)\/$/)[1])));
      setSpecie({ ...specieData, peopleData, homeworldData, filmsData });
      setLoading(false);
    };

    fetchSpecie();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{specie.name}</h1>
      <p>Classification: {specie.classification}</p>
      <p>Designation: {specie.designation}</p>
      <p>Average Height: {specie.average_height}</p>
      <p>Skin Colors: {specie.skin_colors}</p>
      <p>Hair Colors: {specie.hair_colors}</p>
      <p>Eye Colors: {specie.eye_colors}</p>
      <p>Average Lifespan: {specie.average_lifespan}</p>
      <p>Language: {specie.language}</p>
      <h2>Homeworld</h2>
      <p>
        <Link to={`/planet/${specie.homeworldData.url.match(/\/([0-9]*)\/$/)[1]}`}>{specie.homeworldData.name}</Link>
      </p>
      <h2>People</h2>
      <ul>
        {specie.peopleData.map(person => (
          <li key={person.name}>
            <Link to={`/character/${person.url.match(/\/([0-9]*)\/$/)[1]}`}>{person.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Films</h2>
      <ul>
        {specie.filmsData.map(film => (
          <li key={film.title}>
            <Link to={`/film/${film.url.match(/\/([0-9]*)\/$/)[1]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecieDetail;
