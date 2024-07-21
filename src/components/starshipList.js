import React, { useEffect, useState } from 'react';
import { getStarships, searchStarshipsByName } from '../services/Service';
import AlignItemsList from '../widgets/list';

const StarshipList = ({ searchTerm }) => {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
        setLoading(true);
        const data = searchTerm ? await searchStarshipsByName(searchTerm) : await getStarships();
      setStarships(data);
      setLoading(false);
    };

    fetchStarships();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <AlignItemsList starships={starships} />
    </div>
  );
};

export default StarshipList;