import { Fragment } from "react";
import classes from './Item.module.css'; 
import {addItemToCartActions} from '../store/index';
import { useRef } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const CartItem = function(props){
   
    const dispatch = useDispatch();
    const itemId = useRef();

    const addItemHandler = ()=>{
        dispatch(addItemToCartActions.incrementItem({id : itemId.current.value}));
    }

    const removeItemHandler = ()=>{
        dispatch(addItemToCartActions.decrementItem({id : itemId.current.value}));
    }
 
 
 
    return(
    <Fragment>
        <form>
            <input type="text" ref={itemId} defaultValue={props.id} hidden />
            <Button variant="outline-dark" className={classes.buttonInCartModal} onClick={addItemHandler}>+</Button>
            <Button variant="outline-dark" className={classes.buttonInCartModal} onClick={removeItemHandler}>-</Button>
        </form>
    </Fragment>
 )
}

export default CartItem;