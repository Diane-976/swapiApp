import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlanetById } from '../services/caracterService';

const PlanetDetail = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      const data = await getPlanetById(id);
      setPlanet(data);
    };
    fetchPlanet();
  }, [id]);

  if (!planet) {
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
    </div>
  );
};

export default PlanetDetail;