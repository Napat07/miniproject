import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../Admin/ProductList'
import InputForm from '../Admin/InputForm'
import '../Admin/InputForm.css'

const ShopforAdmin = () => {
    return (
        <div>
            <InputForm />
            <img src='Products.png' width='260' />
            <br />
            <ProductList />
        </div>
    )
}
export default ShopforAdmin;
