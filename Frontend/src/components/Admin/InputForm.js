import React from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = props => {
    const { data, onChange } = props;
    const dispatch = useDispatch({})
    const products = useSelector(state => state.products)
    const form = useSelector(state => state.form)
    const addProduct = async () => {
        const result = await axios.post(`https://miniproject-58007.herokuapp.com/api/products/`, form)
        dispatch({ 
            type: "ADD_PRODUCT", 
            product: {...form,id:products.length > 0 ? products[products.length - 1].id+1 : 0} 
        })
    }
    return (
        <div className=''>
            <a ><img src='addProduct.png' width='260'/></a>
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
                            <button type="button" class="button is-success is-large" onClick={addProduct}>CREATE</button>
                            </div>
                    </div>
        </div>
    )
}
export default InputForm;