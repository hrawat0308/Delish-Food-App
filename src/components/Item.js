import { Row, Col, Button } from 'react-bootstrap';
import classes from './Item.module.css';
import { useRef } from 'react';

const Item = function(props){
    const quantity = useRef();    
    const addToCartHandler = (event) => {
        if(quantity.current.value === ""){
            quantity.current.value = 1;
        }
        else{
            console.log(quantity.current.value);
        }
    }

    return(
        <div className={classes.itemWrapper} key={props.id}>
            <Row xs={8} className={`${classes.itemContainer} justify-content-between`}>
                <Col><h3>{props.dishname}</h3></Col>
                <Col><h3>₹{props.price}</h3></Col>
            </Row>
            <Row xs={8} className={`${classes.itemContainer} justify-content-between`}>
                <Col >
                    <input ref={quantity} type="number" min="1" max="5" placeholder='1' className={classes.itemQuantity}></input>
                    <Button variant="dark" onClick={addToCartHandler}>Add to Cart</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Item;