import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import ProductList from './ProductList'
import InputForm from './InputForm'
import Carousel from './Carousel/Carousel'
import Nav from './Nav';
import Main from './main/main'

const ListStaff = () =>{

	return(
		<div class ='cen'>
      <Nav/>
      <Carousel/>
      <Main/>
      <InputForm />
      <h2>--------------------------------------</h2>
      <h1>Products</h1>
      <ProductList  />
      <h1>--------------------------------------</h1>

    </div>
	)
}
export default ListStaff
