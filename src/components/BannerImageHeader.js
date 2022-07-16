import classes from './Item.module.css';
import Menu from './Menu';

const BannerImageHeader = function(){
    return(
        <div className={classes.bannerImage}>
            <div className={classes.bannerSlogan}>
                <h1>Take a Bite Out of Hunger!</h1>
            </div>
            <Menu />
        </div>
    );
};

export default BannerImageHeader;