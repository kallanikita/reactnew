import React from 'react';
import ProductsArr from '../ListItem/products.json';
import { Link } from 'react-router-dom';

export default function Products() {
    return <>
        <div className='container'>
            <div className='row mt-3'>
                {ProductsArr.map(Products => {
                    return <div className='col-sm-3 mb-1' key={Products.id}>
                        <div className="card">
                            <img src={Products.image} className="card-img-top" style={{ height: '200px' }} alt='something' />
                            <div className="card-body text-center" >
                                <h5 className="card-title">{Products.category}</h5>
                                <p className="card-text text-truncate" title={Products.description}>{Products.description}</p>
                                <p className="card-text text-truncate" title={Products.price}>{Products.price}</p>
                                <Link to={`/ProductDetails/${Products.id}`}>View</Link>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}