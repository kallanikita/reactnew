import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from '../ListItem/ProductCard';
import axios from 'axios';

export default function ProductAssignment() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let url = 'https://fakestoreapi.com/products';
        let response = await axios.get(url);
        console.log(response.data);
        setProducts(response.data)
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

