import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api';
const BASE_URL = 'https://swapi.dev/api/people/';

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

export const getCharacterByName = async (name) => {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const character = data.results.find(person => person.name === name);
    return character;
  };