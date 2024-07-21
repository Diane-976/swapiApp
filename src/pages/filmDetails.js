import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../services/Service';

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const fetchFilm = async () => {
      const data = await getFilmById(id);
      setFilm(data);
    };

    fetchFilm();
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>Director: {film.director}</p>
      <p>Edited: {film.edited}</p>
      <p>Episode: {film.episode_id}</p>
      <p>Ppening Crawl: {film.opening_crawl}</p>
      <p>Producer: {film.producer}</p>
      <p>Release date: {film.release_date}</p>
      <p>created: {film.created}</p>
    </div>
  );
};

export default FilmDetail;