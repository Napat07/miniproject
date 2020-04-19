import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const InputForm = props => {
    const { data, onChange } = props;

    const dispatch = useDispatch({})
    const products = useSelector(state => state.products)
    const form = useSelector(state => state.form)

    const addProduct = async () => {
        const result = await axios.post(`http://localhost:${process.env.REACT_APP_PP}/api/products/`, form)
        dispatch({ 
            type: "ADD_PRODUCT", 
            product: {...form,id:products.length > 0 ? products[products.length - 1].id+1 : 0} 
        })
    }

    return (
        <div className='form-container'>
            <h2>Add Product</h2>
            
           
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label ">Name</label>
                        <div class="col-sm-7">
                        <input type="text" class="form-control"  placeholder="Input Product" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Price</label>
                        <div class="col-sm-7">
                        <input type="number" class="form-control"  placeholder="Input Price" onChange={(e) => dispatch({ type: "CHANGE_PRICE", price: e.target.value })} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Image </label>
                        <div class="col-sm-7">
                            <input type="text" class="form-control" placeholder="Input Product Image" onChange={(e) => dispatch({ type: "CHANGE_IMG", img: e.target.value })} /> <br />
                            </div>
                    </div>
                    <div class="form-group row">
                    <div class="col-sm-5">
                            <button type="button" class="btn btn-success" onClick={addProduct}>CREATE</button>
                            </div>
                    </div>
      
        </div>
    )
}

export default InputForm