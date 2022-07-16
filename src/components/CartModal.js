import { Modal, Button, ModalBody, Row, Col } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { isCartShowingActions } from '../store/index';
import { useSelector } from 'react-redux';
import classes from './Item.module.css'; 
// import {addItemToCartActions} from '../store/index';
import CartItem from "./CartItem";

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
              <Row className="justify-content-between">
                <Col xs={6}>
                  <h4>{item.name}</h4>
                  <h6>x{item.quantity}</h6>
                  <h6>₹{item.price}</h6>  
                </Col>
                <Col xs={6}>
                  <Row>
                    <Col xs={7}>
                      <CartItem id={item.id} />
                    </Col>
                    <Col xs={5}><h4>₹ {item.totalPrice}</h4></Col>
                  </Row>
                </Col>
              </Row>
              <hr></hr>
            </Modal.Body>
          );
        })
      }
      {
        ItemsArray.length !== 0 && <Modal.Body><Row >
        <Col xs={8}><h3>Total Amount :</h3></Col>
        <Col xs={4} className={classes.totalAmountInCart}><h3>₹ {
          ItemsArray.reduce((acc, item)=>{
            return acc + item.totalPrice;
          },0)
        }</h3></Col>
      </Row>
      </Modal.Body>
      }
      
      <Modal.Footer>
        { ItemsArray.length === 0 && <Button onClick={onCartClickHandler}>Close</Button> }
        { ItemsArray.length !==0 && 
            <div>
                <Button onClick={onCartClickHandler} className={classes.closeAndOrderButtonsInCart}>Close</Button>
                <Button className={classes.closeAndOrderButtonsInCart}>Order Now</Button>
              </div>  
        }
      </Modal.Footer>
    </Modal>
    )
}

export default CartModal;