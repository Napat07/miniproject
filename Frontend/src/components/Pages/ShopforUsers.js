import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../Carousel/Carousel'
import ListforUser from '../Users/ListforUser';

const ShopforUsers = () => {

    return (
        <div >
            <Carousel />
            <ListforUser />
        </div>
    )
}
export default ShopforUsers;