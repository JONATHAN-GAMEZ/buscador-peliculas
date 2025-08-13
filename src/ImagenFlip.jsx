import React, { useState } from 'react';
import './ImagenFlip.css';

const ImagenFlip = ({ movie }) => {
  const [girado, setGirado] = useState(false);

  const manejarClick = () => {
    setGirado(!girado);
  };

  return (
    <div className="contenedor-flip" onClick={manejarClick}>
      <div className={`tarjeta ${girado ? 'girado' : ''}`}>
        <div className="frente">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="dorso">
          <h2 className='titulo'>{movie.title}</h2>
          <p className='detalle'>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
export default ImagenFlip;