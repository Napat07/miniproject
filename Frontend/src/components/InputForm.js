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
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_NAME", name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: "CHANGE_PRICE", price: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: "CHANGE_IMG", img: e.target.value })} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="button" class="btn btn-success" onClick={addProduct}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm