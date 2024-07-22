import React from 'react';

const Card = ({ image, link, paragraph, heading }) => {
  const cardStyle = {
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '0',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    backgroundColor: '#fff',
    height: '100%',
  };

  const headingStyle = {
    fontSize: '20px',
    color: '#F57C00',
    margin: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    color: '#666',
    margin: '10px',
  };

  const linkStyle = {
    display: 'inline-block',
    color: '#007bff',
    textDecoration: 'none',
    margin: '10px',
    fontSize: '14px',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <div className="card-container" style={cardStyle}>
      <img className="card-image" style={imageStyle} src={image} alt="Card" />
      <h1 style={headingStyle}>{heading}</h1>
      <p style={paragraphStyle}>{paragraph}</p>
      <a style={linkStyle} href={link}>Read More →</a>
    </div>
  );
};

export default Card;
