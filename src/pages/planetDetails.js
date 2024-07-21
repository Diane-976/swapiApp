import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPlanetById, getResidentById, getFilmById } from '../services/Service';

const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanet = async () => {
      setLoading(true);
      const planetData = await getPlanetById(id);
      const residentsData = await Promise.all(planetData.residents.map(url => getResidentById(url.match(/\/([0-9]*)\/$/)[1])));
      const filmsData = await Promise.all(planetData.films.map(url => getFilmById(url.match(/\/([0-9]*)\/$/)[1])));
      setPlanet({ ...planetData, residentsData, filmsData });
      setLoading(false);
    };

    fetchPlanet();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Climate: {planet.climate}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Surface Water: {planet.surface_water}</p>
      <p>Population: {planet.population}</p>
      <h2>Residents</h2>
      <ul>
        {planet.residentsData.map(resident => (
          <li key={resident.name}>
            <Link to={`/character/${resident.url.match(/\/([0-9]*)\/$/)[1]}`}>{resident.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Films</h2>
      <ul>
        {planet.filmsData.map(film => (
          <li key={film.title}>
            <Link to={`/film/${film.url.match(/\/([0-9]*)\/$/)[1]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetDetail;
