import { Carousel as Caroussel } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


export const Carousel = ({width,background,height,color,lineHeight,textAlign}) =>{
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Caroussel afterChange={onChange} style={{ width: `${width}`}}>
      <div>
        <h3 style={{ background: `${background}`, 
        height: `${height}`,
        color: `${color}`,
        lineHeight: `${lineHeight}`,
        textAlign: `${textAlign}`}}>1</h3>
      </div>
      <div>
      <h3 style={{ background: `${background}`, 
        height: `${height}`,
        color: `${color}`,
        lineHeight: `${lineHeight}`,
        textAlign: `${textAlign}`}}>2</h3>
      </div>
      <div>
      <h3 style={{ background: `${background}`, 
        height: `${height}`,
        color: `${color}`,
        lineHeight: `${lineHeight}`,
        textAlign: `${textAlign}`}}>3</h3>
      </div>
      <div>
      <h3 style={{ background: `${background}`, 
        height: `${height}`,
        color: `${color}`,
        lineHeight: `${lineHeight}`,
        textAlign: `${textAlign}`}}>4</h3>
      </div>
    </Caroussel>
  );
}
Carousel.propTypes = {
  width: PropTypes.string,
  background: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  lineHeight: PropTypes.string,
  textAlign: PropTypes.string
};