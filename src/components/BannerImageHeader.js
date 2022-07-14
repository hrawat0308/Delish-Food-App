import { Container, Image } from "react-bootstrap";
import imagesrc from '../images/FoodAppBanner.jpg';

const BannerImageHeader = function(){
    return(
        <Container>
            <Image src={imagesrc} fluid></Image>
        </Container>
    );
};

export default BannerImageHeader;