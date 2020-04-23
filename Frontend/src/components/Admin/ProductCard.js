import React from 'react';
import './ProductCard.css';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)
    const deleteProduct = async () => {
        const result = await axios.delete(`https://miniproject-58007.herokuapp.com/api/products/${props.id}`)
        dispatch({type : 'DELETE_PRODUCT', id: props.id})
      }
    
    const updateProduct = async () => {
    const result = await axios.put(`https://miniproject-58007.herokuapp.com/api/products/${props.id}`,form)
    dispatch({type : 'UPDATE_PRODUCT', id: props.id , product: {...form, id: props.id}})
  }
    return (
        <div className='productcard-container'>
            <div className='productcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='productcard-price'>{props.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ฿</p>
                <p className='productcard-name'>{props.name}</p>
            </div>
            <div className='productcard-actions'>
                <div type="button" class="button is-warning" onClick={updateProduct}>Update</div>
                <div type="button" class="button is-danger" onClick={deleteProduct}>Delete</div>
            </div>
        </div>

    )
}

export default ProductCard;