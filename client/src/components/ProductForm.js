import React, {useState} from 'react';
import axios from "axios";

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title,             setTitle] = useState("");
    const [price,             setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitProductHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => {
                console.log(res)
                console.log(res.data)
                setProduct([...product, res.data])
            })
            .catch(err => console.log(err))
            setTitle("")
            setPrice(0)
            setDescription("")
    };

return (
    <div>
        <h2>Product Manager</h2>
        <form onSubmit={submitProductHandler}>
            <div>
                <label htmlFor='title'>Title: </label>
                <input id='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor='price'>Price: </label>
                <input id='price' type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
            <label htmlFor='description'>Description: </label>
            <input id='description' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type='submit'>Create</button>
        </form>
    </div>
);
};

export default ProductForm;