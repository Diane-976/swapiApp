import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({ characters }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {characters.map((character, index) => (
        <React.Fragment key={character.name}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={character.name} src={`https://via.placeholder.com/40?text=${character.name[0]}`} />
        </ListItemAvatar>
        <ListItemText
          primary={character.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {character.name}
              </Typography>
              {` — Height: ${character.height}, Mass: ${character.mass}`}
            </React.Fragment>
          }
        />
      </ListItem>
      {index < characters.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
        ))}
    </List>
    );
    }