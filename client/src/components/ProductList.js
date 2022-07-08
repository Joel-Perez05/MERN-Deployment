import React, {useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const ProductList = (props) => {
    const {product, setProduct, removeProductFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then((res) => removeProductFromDom(productId))
            .catch((err) => console.log(err))
    };

    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data)
                setProduct(res.data)
            })
            .catch((err) => console.log(err))
    },[]);

    return (
        <div>
            <h2>All Products:</h2>
            {
                product.map((productObj, idx) => {
                    return(
                        <div key={idx}>
                            <Link to={`/products/${productObj._id}`}>{productObj.title} |</Link>
                            <Link to={`/products/edit/${productObj._id}`}> Edit  |</Link>
                            <button onClick={(e) => {deleteProduct(productObj._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
);
};

export default ProductList;