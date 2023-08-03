import  { useState } from 'react';
import PropTypes from 'prop-types';
import './Slider.css';

const VerticalSlider = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="slider-container">
      
      <div className="slider-content">
      <i className="slider-button up" onClick={handlePrev}></i>
        <div className="slider-item top" style={{ backgroundImage: `url(${photos[currentIndex]})` }}></div>
        <div className="slider-item bottom" style={{ backgroundImage: `url(${photos[(currentIndex + 1) % photos.length]})` }}></div>
        <i className="slider-button down" onClick={handleNext}></i>
      </div>
      
    </div>
  );
};

VerticalSlider.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VerticalSlider;