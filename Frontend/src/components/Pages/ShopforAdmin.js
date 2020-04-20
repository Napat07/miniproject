import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../Admin/ProductList'
import InputForm from '../Admin/InputForm'
import Carousel from '../Carousel/Carousel'


const ShopforAdmin = () =>{

	return(
	    <div>
            <Carousel/>
            <InputForm />
            <h2>--------------------------------------</h2>
            <h1>Products</h1>
            <ProductList  />
        </div>
	)
}
export default ShopforAdmin;
