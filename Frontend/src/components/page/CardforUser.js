import React from 'react';
import './CardforUser.css';
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

const CardforUser = props => {

    const dispatch = useDispatch()
    const form = useSelector(state => state.form)

    return (
        <div className='productcard-container'>
            <div className='productcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='productcard-price'>{props.price} ฿</p>
                <p className='productcard-name'>{props.name}</p>
            </div>
            <div className='productcard-actions'>
                <div type="button" class="btn btn-primary" >Buy</div>
            </div>
        </div>

    )
}

export default CardforUser;