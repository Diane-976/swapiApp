import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api';

// Characters
export const getCharacters = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const searchCharactersByName = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/?search=${name}`);
    return response.data.results;
  } catch (error) {
    console.error('Error searching characters:', error);
    return [];
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/people/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching character:', error);
    return null;
  }
};

// Planets
export const getPlanets = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/planets/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching planets:', error);
    return [];
  }
};

export const getPlanetById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/planets/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching planet:', error);
    return null;
  }
};

// Starships
export const getStarships = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/starships/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching starships:', error);
    return [];
  }
};

export const getStarshipById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/starships/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching starship:', error);
    return null;
  }
};
