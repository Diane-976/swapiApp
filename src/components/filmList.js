import React, { useEffect, useState } from 'react';
import { getFilms, searchFilmsByTitle } from '../services/Service';
import AlignItemsList from '../widgets/list';

const FilmList = ({ searchTerm }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      const data = searchTerm ? await searchFilmsByTitle(searchTerm) : await getFilms();
      setFilms(data);
      setLoading(false);
    };

    fetchFilms();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Star Wars Movies</h1>
      <AlignItemsList films={films} />
    </div>
  );
};

export default FilmList;
