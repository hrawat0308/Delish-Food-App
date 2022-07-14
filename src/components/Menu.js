import { Container } from 'react-bootstrap';
import Item from './Item';
import classes from './Item.module.css';

const DUMMY_ITEMS = [
    {
        id: "i1",
        name: "Chicken Momos",
        price: 100,
    },
    {
        id: "i2",
        name: "Chili Paneer",
        price: 149,
    },
    {
        id: "i3",
        name: "Start Up Spring Roll Veg",
        price: 99,
    },
    {
        id: "i4",
        name: "Start Up Honey Chilli Potato",
        price: 120,
    },
    {
        id: "i5",
        name: "Wow! Noodles Veg Soup",
        price: 245,
    },
];

const Menu = function(){
    return(
        <Container className={classes.menuContainer}>
            {
                DUMMY_ITEMS.map((item)=>{
                    return(
                        <Item key={item.id} id={item.id} dishname={item.name} price={item.price} />
                    )
                })   
            }
            {/* <Item />
            <Item /> */}
        </Container>
    );
};

export default Menu;