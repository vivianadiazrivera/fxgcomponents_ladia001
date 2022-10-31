import { Progress as Progres } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const Progress = ({background, width}) => (
  <>
 
    <Progres  style={{ background: `${background}`}} type ="dashboard" />&nbsp;&nbsp;&nbsp;
   
    <Progres  style={{  background: `${background}`, width: `${width}`}} gapDegree={30}/>
  </>
  
);

Progress.propTypes = {
  background: PropTypes.string,
  width: PropTypes.string
};
export default Progress;

