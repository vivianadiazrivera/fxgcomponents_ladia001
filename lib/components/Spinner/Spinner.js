import { Alert , Spin as Spins} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const App = ({ size, background }) => (
  <Spins style={{ size:`${size}`, background: `${background}`  }} tip="Chargement en cours...">
    <Alert 
      message="Message d'alerte"
      description="Le chargement de la page prend quelques secondes."
      type="info "
    />
  </Spins>
);

Spins.propTypes = {
    background: PropTypes.string,
    size: PropTypes.string,
    
    
  };
export default App; 

