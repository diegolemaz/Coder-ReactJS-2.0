import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div>
    <Spinner animation="border" role="status">
    </Spinner>
    <span>Loading...</span>
    </div>
  );
}

export default Loading;