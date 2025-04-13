import { useRef, useState, useEffect } from 'react';

const CustomSlider = ({ min = 0, max = 100, value = 50, onChange, children }) => {
  const sliderRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(value);

  const getPositionFromValue = (val) => {
    const range = max - min;
    const percentage = (val - min) / range;
    return percentage * 100;
  };

  const getValueFromPosition = (pos) => {
    const sliderWidth = sliderRef.current.offsetWidth;
    const percentage = Math.min(Math.max(pos / sliderWidth, 0), 1);
    return Math.round(min + percentage * (max - min));
  };

  const updateSlider = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    let pos;

    if (e.type.includes('touch')) {
      pos = e.touches[0].clientX - sliderRect.left;
    } else {
      pos = e.clientX - sliderRect.left;
    }

    const newValue = getValueFromPosition(pos);
    setSliderValue(newValue);
    if (onChange) onChange(newValue);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleMouseDown = (e) => {
      updateSlider(e);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
      updateSlider(e);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('touchstart', (e) => {
      e.preventDefault();
      updateSlider(e);
      document.addEventListener('touchmove', updateSlider);
      document.addEventListener('touchend', () => {
        document.removeEventListener('touchmove', updateSlider);
      });
    });

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      style={{ position: 'relative', height: '4px', background: '#e0e0e0', borderRadius: '2px' }}>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          background: '#4a90e2',
          borderRadius: '2px',
          width: `${getPositionFromValue(sliderValue)}%`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          background: '#4a90e2',
          borderRadius: '50%',
          top: '50%',
          left: `${getPositionFromValue(sliderValue)}%`,
          transform: 'translate(-50%, -50%)',
          cursor: 'grab',
        }}
      />
      {children}
    </div>
  );
};

export default CustomSlider;
