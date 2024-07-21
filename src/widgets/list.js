// src/widgets/list.js
import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({ characters = [], planets = [], starships = [], films = [], species = [], vehicles = [] }) {
    const items = characters.length ? characters : planets.length ? planets : starships.length ? starships : films.length ? films : species.length ? species : vehicles;

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items.map((item, index) => (
                <React.Fragment key={item.name || item.title}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={item.name || item.title} src={`https://via.placeholder.com/40?text=${(item.name || item.title)[0]}`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Link to={`/${characters.length ? 'character' : planets.length ? 'planet' : starships.length ? 'starship' : films.length ? 'film' : species.length ? 'specie' : 'vehicle'}/${item.url.match(/\/([0-9]*)\/$/)[1]}`}>
                                    {item.name || item.title}
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
                                        {item.name || item.title}
                                    </Typography>
                                    {characters.length ? ` — Height: ${item.height}, Mass: ${item.mass}` :
                                        planets.length ? ` — Population: ${item.population}, Climate: ${item.climate}` :
                                            starships.length ? ` — Model: ${item.model}, Manufacturer: ${item.manufacturer}` :
                                                films.length ? ` — Release Date: ${item.release_date}` :
                                                    species.length ? ` — Classification: ${item.classification}, Language: ${item.language}` :
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
