import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../Admin/ProductList'
import InputForm from '../Admin/InputForm'
import Carousel from '../Carousel/Carousel'


const ShopforAdmin = () =>{

	return(
	    <div>
            <br />
            <br />
            <InputForm />
            <br />
            <br />
            <h1>Products</h1>
            <br />
            <ProductList  />
        </div>
	)
}
export default ShopforAdmin;
