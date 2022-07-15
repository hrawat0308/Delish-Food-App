import {Nav, Button, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isCartShowingActions } from '../store/index';


const CartButton = function(){

    const numbersOfItemInCart = useSelector((state)=>state.addedItem.addedItemArray.length);
    const dispatch = useDispatch();        
    const onCartClickHandler = () => {
        dispatch(isCartShowingActions.showCart());
    }
    
    return(
        <Nav >
            <Button onClick={onCartClickHandler} size="lg">Cart <Badge pill bg="danger">{numbersOfItemInCart}</Badge> </Button>
        </Nav>
    );
}

export default CartButton;