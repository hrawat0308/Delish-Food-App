import { Modal, Button, ModalBody } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { isCartShowingActions } from '../store/index';
import { useSelector } from 'react-redux';

const CartModal = function(props){   
  const dispatch = useDispatch();        
  const onCartClickHandler = () => {
        dispatch(isCartShowingActions.showCart());
  }

  const ItemsArray = useSelector(state=>state.addedItem.addedItemArray);  
  return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton onClick={onCartClickHandler}>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome to Your Cart !!!
        </Modal.Title>
      </Modal.Header>
      { ItemsArray.length === 0 && <ModalBody> <h5>Your Cart is Empty</h5> </ModalBody>}
      {
        ItemsArray.map((item)=>{
          return(
            <Modal.Body key={item.id}>
              <h4>{item.name}</h4>
              <h6>x{item.quantity}</h6>
              <h6>{item.totalPrice}</h6>
            </Modal.Body>
          );
        })
      }
      
      <Modal.Footer>
        <Button onClick={onCartClickHandler}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CartModal;