import { Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { isCartShowingActions } from '../store/index';

const CartModal = function(props){   
  const dispatch = useDispatch();        
  const onCartClickHandler = () => {
        dispatch(isCartShowingActions.showCart());
    }
  
  return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onCartClickHandler}>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Item 1</h4>
        <p>
          Momos, x1 : 234
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onCartClickHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CartModal;