import React, { useEffect, useState } from 'react';
import { getPlanets, searchPlanetsByName } from '../services/caracterService';
import AlignItemsList from '../widgets/list';

const PlanetList = ({ searchTerm }) => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
    setLoading(true);
    const data = searchTerm ? await searchPlanetsByName(searchTerm) : await getPlanets();
    setPlanets(data);
    setLoading(false);
    };
    fetchPlanets();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Planets</h1>
      <AlignItemsList planets={planets} />
    </div>
  );
};

export default PlanetList;