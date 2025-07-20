import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box sx={{
     
  backgroundColor: '#003366',
  color: 'white',
  textAlign: 'center',
  padding: '30px 10px',
}}>

        
     
    
      <Typography variant="h6" >
        Stay Connected
      </Typography>

      <Box>
        <IconButton     href="https://facebook.com" target="_blank" sx={{ color: 'white' }}>
          <FacebookIcon />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" sx={{ color: 'white' }}>
          <InstagramIcon />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" sx={{ color: 'white' }}>
          <TwitterIcon />
        </IconButton>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Link href="/contact" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Contact Us
        </Link>
        <Link href="/shop" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Shop
        </Link>
        <Link href="/collection" underline="hover" color="inherit" sx={{ mx: 1 }}>
          Collection
        </Link>
      </Box>

      <Typography variant="body2" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </Typography>
    </Box>
  );
}
