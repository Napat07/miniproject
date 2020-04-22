import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselShop from '../Carousel/CarouselShop'
import ListforUser from '../Users/ListforUser';

const ShopforUsers = () => {

    return (
        <div >
            <CarouselShop /> 
            <br /> <br />
            <br /> <br />
            <ListforUser />
        </div>
    )
}
export default ShopforUsers;
