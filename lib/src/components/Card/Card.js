import {Card as ReactCard} from 'antd';
import PropTypes from 'prop-types';

 const Card = ( {backgroundColor, color, width}) => {

  

  return (
    <>

    <ReactCard style={{width: `${width}`, backgroundColor: `${backgroundColor}`, color: `${color}`}}
      
      cover={<img src="assets/img/286x180.jpg"/>}
      >    
        
        <h1 style={{color: `${color}`}}>Card Title</h1>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </ReactCard>
    </>
  );
}
Card.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  backgroundColor: PropTypes.string
};

export default Card