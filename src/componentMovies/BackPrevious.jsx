import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate(-1)} className="btn btn-primary">
    <span className='bi bi-arrow-left-circle'></span> PREVIOUS
  </button>
  );
};

export default BackButton;
