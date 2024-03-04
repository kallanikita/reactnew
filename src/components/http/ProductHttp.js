import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from '../ListItem/ProductCard';

export default function ProductHttp() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let url = 'https://fakestoreapi.com/products';
        let response = await fetch(url);
        let products = await response.json();
        console.log(products);
        setProducts(products)
    }
     useEffect(() => {
        fetchProducts()
    },[]);

    return <>
        <h2 className='text-center'>Fetch Products data </h2>
        <div className='container'>
            <div className='row'>
                {products.map(product => {
                    return <ProductCard product={product} />
                })}
                    </div>
        </div>
    </>
}

