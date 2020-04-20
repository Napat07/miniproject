import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel/Carousel'
import Main from './main/main'
import Footer from './Footer'

const ListProduct = () =>{

	return(
      <div class ='cen'>
      <Carousel/>
      <Main/>
      <Footer/>


    </div>
	)
}
export default ListProduct;
