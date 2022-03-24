import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products,setProducts]=useState([]);
    console.log(products)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            
            show all products
        </div>
    );
};

export default Products;