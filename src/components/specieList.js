import React, { useEffect, useState } from 'react';
import { getSpecies, searchSpeciesByName } from '../services/Service';
import AlignItemsList from '../widgets/list';

const SpecieList = ({ searchTerm }) => {
  const [species, setSpecies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecies = async () => {
    setLoading(true);
    const data = searchTerm ? await searchSpeciesByName(searchTerm) : await getSpecies();
    setSpecies(data);
    setLoading(false);
    };
    fetchSpecies();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Species</h1>
      <AlignItemsList species={species} />
    </div>
  );
};

export default SpecieList;