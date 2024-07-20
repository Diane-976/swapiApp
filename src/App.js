import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterList from './components/caractersList';
import CharacterDetail from './pages/caracterDetails';
import PlanetList from './components/planetList';
import PlanetDetail from './pages/planetDetails';
import StarshipList from './components/starshipList';
import StarshipDetail from './pages/starshipDetails';
import SearchAppBar from './widgets/searchBar';
import SimpleBottomNavigation from './widgets/navBar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
       <div>
        <SearchAppBar onSearchChange={handleSearch} />
        <Routes>
          <Route path="/" element={<CharacterList searchTerm={searchTerm}/>} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/planets" element={<PlanetList searchTerm={searchTerm}/>} />
          <Route path="/planet/:id" element={<PlanetDetail />} />
          <Route path="/starships" element={<StarshipList searchTerm={searchTerm}/>} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
        <SimpleBottomNavigation/>
      </div>
    </Router>
  );
}

export default App;
