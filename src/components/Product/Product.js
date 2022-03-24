import React from 'react';
import './Product.css'

const Product = ({product,addToCard}) => {
    // console.log(product)
    const {image,title,price,}=product
    return (
        <div className='product'>
            <div className='m-4'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>Price:${price}</p>
            </div>
            <div className='all-bt m-4'>
            <button onClick={()=>addToCard(product)}>Add to Card</button>
            <button>Detaols</button>
            <button>Delete</button>
            </div>
        </div>
    );
};

export default Product;