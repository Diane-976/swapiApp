import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCharacterById, getFilmById, getStarshipById, getVehicleById, getPlanetById } from '../services/Service';
import { getEvents } from '../services/chronologyService';

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const characterData = await getCharacterById(id);
        if (characterData) {
          const filmsData = await Promise.all(characterData.films.map(url => getFilmById(url.match(/\/([0-9]*)\/$/)[1])));
          const starshipsData = await Promise.all(characterData.starships.map(url => getStarshipById(url.match(/\/([0-9]*)\/$/)[1])));
          const vehiclesData = await Promise.all(characterData.vehicles.map(url => getVehicleById(url.match(/\/([0-9]*)\/$/)[1])));
          const homeworldData = await getPlanetById(characterData.homeworld.match(/\/([0-9]*)\/$/)[1]);

          setCharacter({
            ...characterData,
            filmsData,
            starshipsData,
            vehiclesData,
            homeworld: homeworldData,
          });

        const eventsData = await getEvents();
          const filteredEvents = eventsData.filter(event =>
            event.characters_involved && event.characters_involved.some(char => char.name === characterData.name)
          );
          setEvents(filteredEvents);
        }

      } catch (error) {
        console.error('Failed to fetch character data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!character) {
    return <div>Character not found</div>;
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
      <p>Homeworld: <Link to={`/planet/${character.homeworld.url.match(/\/([0-9]*)\/$/)[1]}`}>{character.homeworld.name}</Link></p>

      <h2>Films</h2>
      <ul>
        {character.filmsData.map(film => (
          <li key={film.title}>
            <Link to={`/film/${film.url.match(/\/([0-9]*)\/$/)[1]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>

      <h2>Starships</h2>
      <ul>
        {character.starshipsData.map(starship => (
          <li key={starship.name}>
            <Link to={`/starship/${starship.url.match(/\/([0-9]*)\/$/)[1]}`}>{starship.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Vehicles</h2>
      <ul>
        {character.vehiclesData.map(vehicle => (
          <li key={vehicle.name}>
            <Link to={`/vehicle/${vehicle.url.match(/\/([0-9]*)\/$/)[1]}`}>{vehicle.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>
              <Link to={`/timeline`}>{event.title} - {event.date}</Link>
            </h3>
            <p>{event.description}</p>
            {event.details && (
              <div>
                <h4>Details:</h4>
                <ul>
                  {event.details.map(detail => (
                    <li key={detail.id}>{detail.title} - {detail.date}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
