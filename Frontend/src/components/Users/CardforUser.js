import React from 'react';
import './CardforUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardforUser = props => {

    return (
        <div className='productcard-container'>
            <div className='productcard' style={{ backgroundImage: `url('${props.img}')` }}>
                <p className='productcard-price'>{props.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ฿</p>
                <p className='productcard-name'>{props.name}</p>
            </div>
            <div className='productcard-actions'>
                <div type="button" class="button is-info " >Buy</div>
            </div>
        </div>

    )
}

export default CardforUser;