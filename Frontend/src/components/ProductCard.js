import React from 'react';
import './ProductCard.css';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    const deleteProduct = async () => {
        const result = await axios.delete(`http://localhost:${process.env.REACT_APP_PP}/api/products/${props.id}`)
        dispatch({type : 'DELETE_PRODUCT', id: props.id})
      }
    
    const updateProduct = async () => {
    const result = await axios.put(`http://localhost:${process.env.REACT_APP_PP}/api/products/${props.id}`,form)
    dispatch({type : 'UPDATE_PRODUCT', id: props.id , product: {...form, id: props.id}})
  }
    return (
        <div className='productcard-container'>
            <div className='productcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='productcard-price'>{props.price}</p>
                <p className='productcard-name'>{props.name}</p>
            </div>
            <div className='productcard-actions'>
                <div type="button" class="btn btn-warning" onClick={updateProduct}>Update</div>
                <div type="button" class="btn btn-danger" onClick={deleteProduct}>Delete</div>
            </div>
        </div>

    )
}

export default ProductCard;