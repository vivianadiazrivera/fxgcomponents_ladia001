import { Avatar as Avatare} from 'antd';
import { Badge as Badges} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

export const Badge = ({size, shape}) => (
  <a href="#">
    <Badges  count={5} >
      <Avatare size={`${size}`} shape= {`${shape}`} />
    </Badges>
  </a>
);
Badge.propTypes = {
    size: PropTypes.string,
    shape: PropTypes.string
    
  };
export default Badge;