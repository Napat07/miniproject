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
      <h1>Cats</h1>
      <ProductList  />
      <h1>--------------------------------------</h1>
      <InputForm />
      <h2>--------------------------------------</h2>
    </div>
	)
}
export default ListStaff
