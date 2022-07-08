import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const ProductDetails = (props) => {
    const [product, setProdcut] = useState({})
    const {id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data)
                setProdcut(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
    <div>
        <h1>{product.title}</h1>
        <h2>Price: ${product.price}</h2>
        <h2>Description: {product.description}</h2>
        <Link to="/">Home</Link>
    </div>
);
};

export default ProductDetails;