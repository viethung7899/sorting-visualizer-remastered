import React, {useState} from 'react';

const Slider = () => {
  const [size, setSize] = useState(10);

  const handleChange = (e) => {
    e.preventDefault();
    setSize(e.target.value);
  }

  return (
    <>
    <span>Size</span>
    <input
      class="slider is-fullwidth mx-2"
      step="1"
      min="10"
      max="200"
      type="range"
      value={size}
      onChange={handleChange}
    />
    <span>{size}</span>
    <span></span>
    </>
  );
};

export default Slider;
