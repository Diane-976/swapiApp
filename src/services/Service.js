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

export const searchPlanetsByName = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/planets/?search=${name}`);
      return response.data.results;
    } catch (error) {
      console.error('Error searching planets:', error);
      return [];
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

export const searchStarshipsByName = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/starships/?search=${name}`);
      return response.data.results;
    } catch (error) {
      console.error('Error searching starships:', error);
      return [];
    }
};


// Films
export const getFilms = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching films:', error);
    return [];
  }
};

export const getFilmById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/films/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching film:', error);
    return null;
  }
};

export const searchFilmsByTitle = async (title) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/films/?search=${title}`);
      return response.data.results;
    } catch (error) {
      console.error('Error searching films:', error);
      return [];
    }
};

// Species
export const getSpecies = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/species/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching species:', error);
    return [];
  }
};

export const getSpecieById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/species/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching specie:', error);
    return null;
  }
};

export const searchSpeciesByName = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/species/?search=${name}`);
      return response.data.results;
    } catch (error) {
      console.error('Error searching species:', error);
      return [];
    }
};


// Vehicles
export const getVehicles = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles/?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return [];
  }
};

export const getVehicleById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/vehicles/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    return null;
  }
};

export const searchVehiclesByName = async (name) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/vehicles/?search=${name}`);
      return response.data.results;
    } catch (error) {
      console.error('Error searching vehicles:', error);
      return [];
    }
};
