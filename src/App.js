import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/caractersList';
import CharacterDetail from './pages/caracterDetails';
import PlanetList from './components/planetList';
import PlanetDetail from './pages/planetDetails';
import StarshipList from './components/starshipList';
import StarshipDetail from './pages/starshipDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
        <Route path="/planets" element={<PlanetList />} />
        <Route path="/planet/:id" element={<PlanetDetail />} />
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starship/:id" element={<StarshipDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
