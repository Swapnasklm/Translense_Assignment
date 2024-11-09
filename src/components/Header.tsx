import React from 'react';
import headImage from '../biscuit.jpg'; // Ensure the image path is correct

const Header: React.FC = () => (
  <header
    className="mb-4"
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      height: '300px', // Adjust height as needed
      padding: '20px',
      marginLeft: '-2%', // Optional: move the entire section slightly to the left if needed
    }}
  >
    {/* Image container expanded and styled without borders */}
    <div
      style={{
        backgroundImage: `url(${headImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '60%',
        height: '100%',
      }}
    />
    
    {/* Text container positioned closer to the image */}
    <div style={{ maxWidth: '35%', textAlign: 'left', marginLeft: '-10%' }}> {/* Adjust this marginLeft to move text left */}
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'red',
          marginBottom: '10px',
          letterSpacing: '0.5px',
        }}
      >
        Partner With Us
      </h1>
      <p
        style={{
          fontSize: '0.9rem', // Slightly reduced font size for paragraph
          color: '#444444', // Softer black color for paragraph
          fontWeight: 'bold', // Bold text
          lineHeight: '1.5',
        }}
      >
        Be our partner in just a few steps and start increasing your reach by
         gaining new customers.
      </p>
    </div>
  </header>
);

export default Header;