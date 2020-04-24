import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = props => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const getproducts = async () => {
        const result = await axios.get(`https://miniproject-58007.herokuapp.com/api/products`)
        const action = { type: 'GET_products', products: result.data }
        dispatch(action)
    }
    useEffect(() => {
        getproducts()
    }, [])
    if (!products || !products.length)
        return (<h2>No products</h2>)
    return (
        <div className='productlist-container'>
            {
                products.map((product, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <ProductCard  {...product} updateProduct={() => props.updateProduct(product.id)} deleteProduct={() => props.deleteProduct(product.id)} />
                    </div>
                ))
            }
        </div>
    )
}
export default ProductList;