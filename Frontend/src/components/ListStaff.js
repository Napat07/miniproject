import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import BearList from './BearList'
import InputForm from './InputForm'


const ListStaff = () =>{

	return(
		<div class ='cen'>
      <h1>Cats</h1>
      <BearList  />
      <h1>--------------------------------------</h1>
      <InputForm />
      <h2>--------------------------------------</h2>
    </div>
	)
}
export default ListStaff