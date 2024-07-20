import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlanets } from '../services/caracterService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };
    fetchPlanets();
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {planets.map((planet, index) => (
        <React.Fragment key={planet.name}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to={`/planet/${planet.url.match(/\/([0-9]*)\/$/)[1]}`}>{planet.name}</Link>}
              secondary={`Population: ${planet.population}`}
            />
          </ListItem>
          {index < planets.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default PlanetList;