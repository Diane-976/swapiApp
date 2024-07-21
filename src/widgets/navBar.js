import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FaceIcon from '@mui/icons-material/Face';
import PublicIcon from '@mui/icons-material/Public';
import RocketIcon from '@mui/icons-material/Rocket';
import { useNavigate } from 'react-router-dom';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import MovieIcon from '@mui/icons-material/Movie';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/planets');
        break;
      case 2:
        navigate('/starships');
        break;
        case 3:
            navigate('/species');
        break;
        case 4:
            navigate('/films');
        break;
        case 5:
            navigate('/vehicles');
        break;
        default:
        break;
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigationChange}
      >
        <BottomNavigationAction label="Characters" icon={<FaceIcon />} />
        <BottomNavigationAction label="Planets" icon={<PublicIcon />} />
        <BottomNavigationAction label="Starships" icon={<RocketIcon />} />
        <BottomNavigationAction label="Species" icon={<SettingsAccessibilityIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Vehicles" icon={<DirectionsCarIcon />} />
      </BottomNavigation>
    </Box>
  );
}