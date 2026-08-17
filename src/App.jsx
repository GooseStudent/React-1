import React from 'react';
import './App.css';
import ShopItemClass from './components/ShopItemClass';

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
    price: 399,
    currency: '£'
  };

  return (
    <div className="app-container">
      <div className="background-gradient"></div>
      
      <div className="content-wrapper">
        <div className="card-image">
          <img src="/1.png" alt="Product" />
        </div>
        
        <div className="card-text">
          <div className="card-border">      
            <ShopItemClass item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;