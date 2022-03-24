import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({addToCard}) => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className='products'>
            {
              products.map(product=><Product
                 key={product.id} 
                 product={product}
                 addToCard={addToCard}
                 ></Product>)  
            }
        </div>
    );
};

export default Products;