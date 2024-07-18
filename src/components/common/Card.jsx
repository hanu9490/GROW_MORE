import React from 'react'

const Card = ({image, link, paragraph, heading}) => {
    const cardStyle = {
        width: '100%',
        maxWidth: '200px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '15px',
        margin: '15px auto',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'left'
    };

    const headingStyle = {
        fontSize: '24px',
        color: '#333'
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#666'
    };

    const linkStyle = {
        display: 'inline-block',
        marginTop: '15px',
        color: '#007bff',
        textDecoration: 'none'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto'
    };

    return (
        <div style={cardStyle}>
            <img style={imageStyle} src={image} alt="Card" />
            <h1 style={headingStyle}>{heading}</h1>
            <p style={paragraphStyle}>{paragraph}</p>
            <a style={linkStyle} href={link}>Read More →</a>
        </div>
    )
}

export default Card