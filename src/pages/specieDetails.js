// src/components/SpecieDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecieById } from '../services/Service';

const SpecieDetail = () => {
  const { id } = useParams();
  const [specie, setSpecie] = useState(null);

  useEffect(() => {
    const fetchSpecie = async () => {
      const data = await getSpecieById(id);
      setSpecie(data);
    };

    fetchSpecie();
  }, [id]);

  if (!specie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{specie.name}</h1>
      <p>Classification: {specie.classification}</p>
      <p>Designation: {specie.designation}</p>
      <p>Average Height: {specie.average_height}</p>
      <p>Skin Colors: {specie.skin_colors}</p>
      <p>Hair Colors: {specie.hair_colors}</p>
      <p>Eye Colors: {specie.eye_colors}</p>
      <p>Average Lifespan: {specie.average_lifespan}</p>
      <p>Language: {specie.language}</p>
    </div>
  );
};

export default SpecieDetail;