import React, { useState } from 'react';
import image2 from '../media/image2.png';

const products = [
  { id: 1, name: 'BlueBerry Ice Cream', price: 3.2, category: 'icecream', img: "https://i.pinimg.com/736x/72/b5/00/72b500540780561c395aba6e44a89d47.jpg" },
  { id: 2, name: 'Vanilla Ice Cream', price: 2.5, category: 'icecream', img: "https://i.pinimg.com/736x/0b/59/8a/0b598a38331d0edd578b2b41fde779c0.jpg" },
  { id: 3, name: 'Chocolate Ice Cream', price: 3.0, category: 'icecream', img: "https://i.pinimg.com/736x/f3/41/d4/f341d485091b685262871875ea681469.jpg" },
  {id: 4, name: 'Pistachio Ice Cream', price: 2.8, category: 'icecream', img: 'https://i.pinimg.com/736x/85/8d/56/858d5624a6799aabfc83b25e97ad4a9b.jpg' } ,
  { id: 5, name: 'Strawberry Ice Cream', price: 2.5, category: 'icecream', img: "https://i.pinimg.com/736x/21/d2/05/21d2051d78e7242c0cbcdbc3f1f5b501.jpg" },
  { id: 6, name: 'Mango Juice', price: 3.0, category: 'juice', img: 'https://previews.123rf.com/images/jenifoto/jenifoto1704/jenifoto170400104/77066586-healthy-mango-smoothie-in-a-glass-with-mint-and-straw-isolated-on-white.jpg' },
  { id: 7, name: 'Orange Juice', price: 2.8, category: 'juice', img: 'https://3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/15729/mango-orangesmoothies.jpg' },
  { id: 8, name: 'Strawberry Juice', price: 3.2, category: 'juice', img: 'https://i.pinimg.com/736x/76/fc/b4/76fcb4ddab1229d4cccedee97d648c6f.jpg' },
  {id: 9, name: 'lemon mint Juice', price: 2.8, category: 'juice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2fYtW7zMpn7u0SG9iT0q1HHTTONPorG2-pPx0qUMh3Mv7T7cYbjktjdKHKTiyKl43FZ0&usqp=CAU' },
  {id: 10, name: 'BlueBerry Juice', price: 2.8, category: 'juice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOPUzvYamNPHB59UrXxM2-jnRwGp-qCaVX2l3EHHMDwhBzuNjjTFZCjAw03LL9vqhPZA&usqp=CAU' },
  
];

export default function ChillCorner() {
  const [category, setCategory] = useState('');
  // بخزن الكميات لكل منتج (key: id, value: count)
  const [counts, setCounts] = useState({});

  const filteredProducts = products.filter(p => category === '' || p.category === category);

  const increment = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setCounts(prev => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 20px',
        color: 'white',
        textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#03719c', marginTop: '40px' }}>Ice Cream & Juices</h1>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '8px 12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #03719c' }}
        >
          <option value=''>All Products</option>
          <option value='icecream'>Ice Cream</option>
          <option value='juice'>Juices</option>
        </select>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 30,
          
        }}
      >
        {filteredProducts.map(product => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#e0f7fa',
              borderRadius: 12,
              padding: 20,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              textAlign: 'center',
              color: '#014f61',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ color: '#026f99', margin: '15px 0 5px' }}>{product.name}</h3>
            <p style={{ fontWeight: 'bold' }}>{product.price}$</p>

           
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
              <button
                onClick={() => decrement(product.id)}
                style={{
                  padding: '5px 10px',
                  fontSize: 18,
                  cursor: 'pointer',
                  borderRadius: 6,
                  border: 'none',
                  backgroundColor: '#cdd2d4ff',
                  color: 'white',
                }}
              >
                -
              </button>
              <span style={{ minWidth: 20, textAlign: 'center', fontWeight: 'bold' }}>{counts[product.id] || 0}</span>
              <button
                onClick={() => increment(product.id)}
                style={{
                  padding: '5px 10px',
                  fontSize: 18,
                  cursor: 'pointer',
                  borderRadius: 6,
                  border: 'none',
                  backgroundColor: '#cdd2d4ff',
                  color: 'white',
                }}
              >
                +
              </button>
            </div>

            <button
              style={{
                marginTop: 10,
                padding: '8px 15px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                width: '100%',
              }}
              onClick={() => alert(`You ordered ${counts[product.id] || 0} , ${product.name}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
