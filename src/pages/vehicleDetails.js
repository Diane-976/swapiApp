// src/components/VehicleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVehicleById, getCharacterById, getFilmById } from '../services/Service';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      setLoading(true);
      const vehicleData = await getVehicleById(id);
      const pilotsData = await Promise.all(vehicleData.pilots.map(url => getCharacterById(url.match(/\/([0-9]*)\/$/)[1])));
      const filmsData = await Promise.all(vehicleData.films.map(url => getFilmById(url.match(/\/([0-9]*)\/$/)[1])));
      setVehicle({ ...vehicleData, pilotsData, filmsData });
      setLoading(false);
    };

    fetchVehicle();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost in Credits: {vehicle.cost_in_credits}</p>
      <p>Length: {vehicle.length}</p>
      <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
      <p>Crew: {vehicle.crew}</p>
      <p>Passengers: {vehicle.passengers}</p>
      <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
      <h2>Pilots</h2>
      <ul>
        {vehicle.pilotsData.map(pilot => (
          <li key={pilot.name}>
            <Link to={`/character/${pilot.url.match(/\/([0-9]*)\/$/)[1]}`}>{pilot.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Films</h2>
      <ul>
        {vehicle.filmsData.map(film => (
          <li key={film.title}>
            <Link to={`/film/${film.url.match(/\/([0-9]*)\/$/)[1]}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetail;
