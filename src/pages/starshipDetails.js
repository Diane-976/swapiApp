import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStarshipById } from '../services/caracterService';

const StarshipDetail = () => {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);

  useEffect(() => {
    const fetchStarship = async () => {
      const data = await getStarshipById(id);
      setStarship(data);
    };
    fetchStarship();
  }, [id]);

  if (!starship) {
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
    </div>
  );
};

export default StarshipDetail;
