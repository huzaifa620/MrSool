import React, { useState } from 'react';

const ImageWithZoom = ({ src }) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0.1) {
      setZoomLevel(zoomLevel - 0.1);
    }
  };

  const zoomContainerStyle = {
    
    overflow: 'hidden', // Hide any overflowing content
  };

  const zoomedImageStyle = {
    width: `${zoomLevel * 100}%`, // Adjust the width based on the zoom level
    height: `${zoomLevel * 100}%`, // Adjust the height based on the zoom level
    transformOrigin: 'top left', // Set the origin of the transformation to top left
    transition: 'transform 0.2s ease', // Apply a smooth transition effect
  };

  return (
    <div className="image-container" style={zoomContainerStyle}>
      <button onClick={handleZoomIn}>+</button>
      <button onClick={handleZoomOut}>-</button>
      <img src={src} alt="Zoomable Image" style={zoomedImageStyle} />
    </div>
  );
};

export default ImageWithZoom;
