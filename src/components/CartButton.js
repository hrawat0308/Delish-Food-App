import {Nav, Button, Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { isCartShowingActions } from '../store/index';
import classes from './Item.module.css';

const CartButton = function(){
    const numbersOfItemInCart = useSelector((state)=>state.addedItem.addedItemArray.length);
    const cartAnimate = useSelector(state=>state.addedItem.isClicked);
    const dispatch = useDispatch();        
    const onCartClickHandler = () => {
        dispatch(isCartShowingActions.showCart());
    }

    return(
        <Nav >
            <Button onClick={onCartClickHandler} size="lg" className={cartAnimate ? classes.animateCartButton :'' }>Cart <Badge pill bg="danger">{numbersOfItemInCart}</Badge> </Button>
        </Nav>
    );
}

export default CartButton;