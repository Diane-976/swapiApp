import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFilmById, getCharacterById, getStarshipById, getPlanetById, getSpecieById, getVehicleById } from '../services/Service';

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
        setLoading(true);
        const filmData = await getFilmById(id);
        const charactersData = await Promise.all(filmData.characters.map(url => getCharacterById(url.match(/\/([0-9]*)\/$/)[1])));
        const starshipsData = await Promise.all(filmData.starships.map(url => getStarshipById(url.match(/\/([0-9]*)\/$/)[1])));
        const planetsData = await Promise.all(filmData.planets.map(url => getPlanetById(url.match(/\/([0-9]*)\/$/)[1])));
        const speciesData = await Promise.all(filmData.species.map(url => getSpecieById(url.match(/\/([0-9]*)\/$/)[1])));
        const vehiclesData = await Promise.all(filmData.vehicles.map(url => getVehicleById(url.match(/\/([0-9]*)\/$/)[1])));
        setFilm({ ...filmData, charactersData, starshipsData, planetsData, speciesData, vehiclesData });
        setLoading(false);
    };

    fetchFilm();
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
<div>
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Release Date: {film.release_date}</p>
      <h2>Characters</h2>
      <ul>
        {film.charactersData.map(character => (
          <li key={character.name}>
            <Link to={`/character/${character.url.match(/\/([0-9]*)\/$/)[1]}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Starships</h2>
      <ul>
        {film.starshipsData.map(starship => (
          <li key={starship.name}>
            <Link to={`/starship/${starship.url.match(/\/([0-9]*)\/$/)[1]}`}>{starship.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Planets</h2>
      <ul>
        {film.planetsData.map(planet => (
          <li key={planet.name}>
            <Link to={`/planet/${planet.url.match(/\/([0-9]*)\/$/)[1]}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Species</h2>
      <ul>
        {film.speciesData.map(specie => (
          <li key={specie.name}>
            <Link to={`/specie/${specie.url.match(/\/([0-9]*)\/$/)[1]}`}>{specie.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Vehicles</h2>
      <ul>
        {film.vehiclesData.map(vehicle => (
          <li key={vehicle.name}>
            <Link to={`/vehicle/${vehicle.url.match(/\/([0-9]*)\/$/)[1]}`}>{vehicle.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmDetail;