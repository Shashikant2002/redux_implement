import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/action/productAction';
import SingleProduct from './SingleProduct'



const ProductListing = () => {
    const dispatch = useDispatch();

    const url = "https://fakestoreapi.com/products/";
    const fetchProduct = async () => {
        const response = await axios.get(url).catch((err) => console.log(err));
        dispatch(setProduct(response.data))
    }
    useEffect(() => {
        fetchProduct();
    }, [])

    const product = useSelector((state) => state.allProducts.products)

    return (
        <>
            <div className="productListing">
                <div className="container my-5">
                    <div className="d-flex flex-wrap justify-content-center">
                        {
                            product ?
                                product.map((ele, i) => {
                                    const { category, description, id, image, price, rating, title } = ele;
                                    return (
                                        <SingleProduct data={{ category, description, id, image, price, rating, title }} key={i} />
                                    )
                                })
                                : <h1 className='text-center py-5'>Loading...</h1>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListing