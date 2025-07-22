import React, { useState } from 'react';
import image2 from '../media/image2.png';

const products = [
  { id: 1, name: 'Vanilla Ice Cream', price: 2.5, category: 'icecream', img: 'https://i.pinimg.com/736x/f3/41/d4/f341d485091b685262871875ea681469.jpg' },
  { id: 2, name: 'Strawberry Ice Cream', price: 2.5, category: 'icecream', img: 'https://i.pinimg.com/736x/21/d2/05/21d2051d78e7242c0cbcdbc3f1f5b501.jpg' },
  { id: 3, name: 'Mango Juice', price: 3.0, category: 'juice', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Orange Juice', price: 2.8, category: 'juice', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Chocolate Ice Cream', price: 3.0, category: 'icecream', img: 'https://i.pinimg.com/736x/8f/0a/a8/8f0aa8b0c91e79099723e364febe9f37.jpg' },
  { id: 6, name: 'Pineapple Juice', price: 3.2, category: 'juice', img: 'https://images.unsplash.com/photo-1572441710217-6eaa50d0c998?auto=format&fit=crop&w=400&q=80' },
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
              style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: '8px' }}
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
                  backgroundColor: '#0288d1',
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
                  backgroundColor: '#0288d1',
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
              onClick={() => alert(`You ordered ${counts[product.id] || 0} x ${product.name}`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
