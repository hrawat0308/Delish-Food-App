import { Row, Col, Button } from 'react-bootstrap';
import classes from './Item.module.css';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {addItemToCartActions} from '../store/index';


const Item = function(props){
    const dispatch = useDispatch();
    const itemsArray = useSelector(state=>state.addedItem.addedItemArray);
    const quantity = useRef(); 
    const name = useRef();
    const price = useRef();
    const dishId = useRef();

    useEffect(()=>{
        if(itemsArray.length === 0) return;
        dispatch(addItemToCartActions.addItemToCartButtonClick());
        const timer = setTimeout(()=>{
            dispatch(addItemToCartActions.addItemToCartButtonClick());
        },300);
        return ()=>{
            clearTimeout(timer);
        };
    },[itemsArray, dispatch]);
    

    const addToCartHandler = (event) => {
        event.preventDefault();
        dispatch(addItemToCartActions.addItemToCart({
            id : dishId.current.value,
            name : name.current.value,
            price : price.current.value,
            quantity : quantity.current.value,
            totalPrice : price.current.value * quantity.current.value,
        }));
    }

    

    return(
        <form className={classes.itemWrapper} key={props.id} onSubmit={addToCartHandler}>
            <Row xs={8} className={`${classes.itemContainer} justify-content-between`}>
                <input ref={dishId} type="text" defaultValue={props.id}  hidden/>
                <Col>
                    <label><h3>{props.dishname}</h3></label>
                    <input ref={name} type="text" defaultValue={props.dishname} hidden />
                </Col>
                <Col>
                    <label><h3>₹{props.price}</h3></label>
                    <input ref={price} type="number" defaultValue={props.price} hidden />
                </Col>
            </Row>
            <Row xs={8} className={`${classes.itemContainer} justify-content-between`}>
                <Col >
                    <input ref={quantity} type="number" min="1" max="5" defaultValue={1} className={classes.itemQuantity}></input>
                    <Button variant="dark" type="submit">Add to Cart</Button>
                </Col>
            </Row>
        </form>
    );
};

export default Item;