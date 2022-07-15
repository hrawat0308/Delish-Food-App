import {Nav, Button, Badge} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { isCartShowingActions } from '../store/index';


const CartButton = function(){
    const dispatch = useDispatch();        
    const onCartClickHandler = () => {
        dispatch(isCartShowingActions.showCart());
    }
    
    return(
        <Nav >
            <Button onClick={onCartClickHandler} size="lg">Cart <Badge pill bg="danger">4</Badge> </Button>
        </Nav>
    );
}

export default CartButton;