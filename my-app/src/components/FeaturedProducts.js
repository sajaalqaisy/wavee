import React from 'react';
import { Box, Grid, Typography, Modal, Button } from '@mui/material';
import image2 from '../media/image2.png';
import { useState } from 'react';
const categories = [
  { label: "swimwear ", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvMMrzMj5-B_bdwnVCM2VL-wVoa_webs2bg&s", desc: "High-quality swimwear for beach fun!" },
  { label: "Sun Hat", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXAjgKyhTilU0QEEl4_En893pYtBFnt9SMQ&s", desc: "Protect your face with stylish sun hats." },
  { label: "Swim Ring", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh-gfuJSTEFAIjw-F1TUImZUWVp-62eSm2sw&s", desc: "Fun and safe swim rings for all ages." },
  { label: "Beach Bag", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zWgJ-iIUOyqb455tsNFkzY97YK_VrS7AJA&s", desc: "Spacious and trendy beach bags." },
];


export default function CategoriesGrid() {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    
    <div
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
          }}
        >
    <Box sx={{ backgroundColor: 'transparent', padding: '50px 20px' , marginBottom:'810px'}}>
      <Typography variant="h4" align="center" sx={{ color: '#004C8C', mb: 5 , marginTop:'80px'}}>
        Featured Products
      </Typography>
     
      <Grid container spacing={4} justifyContent="center">
        {categories.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <img src={item.img} alt={item.label} style={{ width: '130px', height: 'auto', marginBottom: '10px' }} />
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {item.label}
              </Typography>
              <Typography
                  variant="body2"
                  sx={{ color: '#004C8C', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => handleOpen(item)}
                >
                  Quick View
                </Typography>
            </Box>
           
          </Grid>
          
        ))}
    
      </Grid>
       <p style={{
        color: '#004C8C',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '16px',
        letterSpacing: '1px',
         fontFamily: 'serif'}}>  Free Shipping Over $50  🚚</p>
    </Box>
       <Modal open={open} onClose={handleClose} sx={{ backdropFilter: "blur(2px)" }}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 2,
          p: 3,
          textAlign: 'center',
          
        }}>
          {selectedItem && (
            <>
              <img src={selectedItem.img} alt={selectedItem.label} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
              <Typography variant="h6" sx={{ mb: 1, color: '#004C8C' }}>{selectedItem.label}</Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#333' }}>{selectedItem.desc}</Typography>
              <Button variant="contained" onClick={handleClose}>Close</Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
    
  );
}
