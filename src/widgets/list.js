import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({ characters = [], planets = [], starships = [] }) {
  const items = characters.length ? characters : planets.length ? planets : starships;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={item.name} src={`https://via.placeholder.com/40?text=${item.name[0]}`} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link to={`/${characters.length ? 'character' : planets.length ? 'planet' : 'starship'}/${item.url.match(/\/([0-9]*)\/$/)[1]}`}>
                  {item.name}
                </Link>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {item.name}
                  </Typography>
                  {characters.length ? ` — Height: ${item.height}, Mass: ${item.mass}` :
                    planets.length ? ` — Population: ${item.population}, Climate: ${item.climate}` :
                    ` — Model: ${item.model}, Manufacturer: ${item.manufacturer}`}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < items.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}
