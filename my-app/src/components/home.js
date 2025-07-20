import React from 'react';
import photo from '../media/photo.png';
import '../css/home.css'
import { Link } from 'react-router-dom';

export default function Home() {
  
  return (
   
    <div
      style={{
        backgroundImage: `url(${photo})`,
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
      <div className='home1'>
      <p style={{ fontSize: '40px' , fontFamily: 'serif' }}>YOUR SUMMER STARTS HERE</p>
      <p  style={{ fontSize: '30px' , fontFamily: 'cursive'}}>Stay Cool. Stay Stylish</p>
      
      <Link style={{
        position:'relative',
        marginLeft: '220px',
        padding: '12px 28px',
        backgroundColor: '#ffffffcc',
        color: '#003366',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 'bold',
        
      }} to="/shop"> Shop Now</Link>
      
    </div>
    
    </div>
    
  );
};

