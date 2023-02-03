import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({ data }) => {
    const { category, description, id, image, price, rating, title } = data;
    return (
        <Link to={`/product/${id}`}>
            <div className="card mx-3 my-3 px-2 py-3" style={{ width: "20rem", cursor:"pointer" }}>
            <img src={image} style={{ objectFit: "cover", objectPosition: "top" }} className="card-img-top w-100" height="250px" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-dark">${price}</h5>
                <p className='m-0 text-dark'><b>{category}</b></p>
                <p className="card-text text-dark">{title && title.slice(0, 20)}{ title && title.length>20 ? "...": ""}</p>
                <button href="/" className="btn btn-primary">View Product</button>
            </div>
        </div>
        </Link>
    )
}

export default SingleProduct