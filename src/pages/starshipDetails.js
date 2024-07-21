// src/components/StarshipDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getStarshipById, getCharacterById, getFilmById } from '../services/Service';

const StarshipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarship = async () => {
      setLoading(true);
      const starshipData = await getStarshipById(id);
      const pilotsData = await Promise.all(starshipData.pilots.map(url => getCharacterById(url.match(/\/([0-9]*)\/$/)[1])));
      const filmsData = await Promise.all(starshipData.films.map(url => getFilmById(url.match(/\/([0-9]*)\/$/)[1])));
      setStarship({ ...starshipData, pilotsData, filmsData });
      setLoading(false);
    };

    fetchStarship();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{starship.name}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
      <p>Cargo Capacity: {starship.cargo_capacity}</p>
      <p>Consumables: {starship.consumables}</p>
      <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
      <p>MGLT: {starship.MGLT}</p>
      <p>Starship Class: {starship.starship_class}</p>
      <h2>Pilots</h2>
      <ul>
        {starship.pilotsData.map(pilot => (
          <li key={pilot.name}>
            <Link to={`/character/${pilot.url.match(/\/([0-9]*)\/$/)[1]}`}>{pilot.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Films</h2>
      <ul>
        {starship.filmsData.map(film => (
          <li key={film.title}>
            <Link to={`/film/${film.url.match(/\/([0-9]*)\/$/)[1]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarshipDetail;
