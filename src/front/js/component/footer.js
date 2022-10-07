import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function FooterApp() {
  const [value, setValue] = React.useState(0);

  return (
	<div className='footer'>
	<Box sx={{ width: 500 }}>
      <BottomNavigation className='footerBox'
      >
        <BottomNavigationAction label="Recents" icon={<FacebookIcon/>} />
        <BottomNavigationAction label="Favorites" icon={<InstagramIcon/>} />
        <BottomNavigationAction label="Nearby" icon={<TwitterIcon/>} />
      </BottomNavigation>
    </Box>
	</div>
    
  );
};