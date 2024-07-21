// src/components/VehicleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById } from '../services/Service';

const VehicleDetail = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      const data = await getVehicleById(id);
      setVehicle(data);
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
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
    </div>
  );
};

export default VehicleDetail;
