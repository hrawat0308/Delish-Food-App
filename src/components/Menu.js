import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import classes from './Item.module.css';
import { fetchMeals } from '../store/index';


const Menu = function(){
    const dispatch = useDispatch();
    const MenuItems = useSelector(state=>state.fetchMenu.Menu);
    
    useEffect(()=>{    
        dispatch(fetchMeals());
    }, [dispatch]);

    return(
        <Container className={classes.menuContainer}>
            {
                MenuItems.map((item)=>{
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