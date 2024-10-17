import Spinner from 'react-bootstrap/Spinner';
import "./WaitSpinner.css";
function WaitSpinner(props) {
  return (
   <div className='spinner-div'>
      <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
      <div className='spinner-text'>Loading ...</div>
    </div>
  );
}

export default WaitSpinner;