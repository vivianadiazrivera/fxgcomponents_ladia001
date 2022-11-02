import React, { useState } from 'react';
import {Popover as ReactPopover} from 'antd';
import {Button} from 'antd';

import PropTypes from 'prop-types';

 const Popover = ( {backgroundColor, color, width, shape}) => {
    const [open, setOpen] = useState(false);
    const hide = () => {
      setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
      setOpen(newOpen);
    };
  

  return (
    <>

    <ReactPopover 
      content={<a onClick={hide}>Option B</a>}
      title="Option A"
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
      <Button type="primary" shape={`${shape}`} style={{width: `${width}`, backgroundColor: `${backgroundColor}`, color: `${color}`}}>Clique ici</Button>
      </ReactPopover>
    </>
  );
}
Popover.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  shape: PropTypes.string
};

export default Popover