import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStarships } from '../services/caracterService';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const StarshipList = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await getStarships();
      setStarships(data);
    };
    fetchStarships();
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {starships.map((starship, index) => (
        <React.Fragment key={starship.name}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Link to={`/starship/${starship.url.match(/\/([0-9]*)\/$/)[1]}`}>{starship.name}</Link>}
              secondary={`Model: ${starship.model}`}
            />
          </ListItem>
          {index < starships.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default StarshipList;