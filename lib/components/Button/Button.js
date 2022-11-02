import {Button as ReactButton} from 'antd';
import PropTypes from 'prop-types';

 const Button = ( {color, width, backgroundColor}) => {
  
  

  return (
    <>
        <ReactButton style={{backgroundColor: `${backgroundColor}`, width: `${width}`, color: `${color}`}}>Button</ReactButton>{' '}
    </>
  );
}
Button.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Button