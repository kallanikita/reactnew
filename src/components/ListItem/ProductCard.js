import React from 'react'

export default function ProductCard({ product }) {
    let { id, title, rating , rating: { rate }, price } = product;
    return <div className='col-sm-3'>
        <div className="card text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <p className="card-text">title : {title}</p>
                <p className="card-text">rating : {rate}</p>
                <p className="card-text">Price : {price}</p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    </div>
}