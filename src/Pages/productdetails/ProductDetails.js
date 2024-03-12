import React from 'react';
import { products_list } from '../Store/ProductArray';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const { productid } = useParams();
    const product = products_list.find(product => product.id === productid);

    return (
        <div className="product-details-container">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} className="product-image" />
        </div>
    );
}

export default ProductDetails;
