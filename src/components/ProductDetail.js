import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/action/productAction';


const ProductDetail = () => {
    const product = useSelector((state) => state.selectedProduct)
    const { proid } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products/${proid}`).catch((err) => console.log(err));
        dispatch(selectedProduct(res.data));
    }

    useEffect(() => {
        if (proid && proid !== "") fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [proid]);

    const { category, description, id, image, price, rating, title } = product;
    console.log(product)
    return (
        product ?
            <div className="detailpage py-4 w-100 float-start">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            {image ? <img className='w-100' src={product.image} alt="hello" /> : <h1 className='text-center py-5'>Loading...</h1>}
                        </div>
                        <div className="col-sm-7">
                            <h1>{id ? id : "Loading..."}</h1>
                            <h4>Rating: {rating ? rating.rate : "Loading.."}</h4>
                            <h6>People Rate: {rating ? rating.count : "Loading..."}</h6>
                            <h2>{category ? category : "Loading..."}</h2>
                            <p>{title ? title : "Loading..."}</p>
                            <h1>${price ? price : "Loading..."}</h1>
                            <p>{description ? description : "Loading"}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <h1 className='text-center py-5'>Loading...</h1>
    )
}

export default ProductDetail