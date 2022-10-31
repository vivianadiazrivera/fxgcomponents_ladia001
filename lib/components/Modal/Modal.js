import { Button as Buton, Modal } from 'antd';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const App = ({background, color}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Buton style={{ background: `${background}`,color: `${color}` }} onClick={showModal}>
        Ouvrir
      </Buton>
      <Modal title="Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Instruction 1 : Ouvrir la porte</p>
        <p>Instruction 2 : Dire bonjour!</p>
        <p>Instruction 3 : Fermer la porte</p>
      </Modal>
    </>
  );
};

Buton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string 
};
export default App;

