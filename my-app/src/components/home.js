import React from 'react';
import photo from '../media/photo.png';



const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1>Welcome to Wave 🌊</h1>
    </div>
  );
};

export default Home;
