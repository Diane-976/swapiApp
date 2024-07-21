// src/components/VehicleList.js
import React, { useEffect, useState } from 'react';
import { getVehicles, searchVehiclesByName } from '../services/Service';
import AlignItemsList from '../widgets/list';

const VehicleList = ({ searchTerm }) => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicles = async () => {
      setLoading(true);
      const data = searchTerm ? await searchVehiclesByName(searchTerm) : await getVehicles();
      setVehicles(data);
      setLoading(false);
    };

    fetchVehicles();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Vehicles</h1>
      <AlignItemsList vehicles={vehicles} />
    </div>
  );
};

export default VehicleList;
