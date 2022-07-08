import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();
    const [title,             setTitle] = useState("");
    const [price,             setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch((err) => console.log(err))
    },[]);

    const updatedProductHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res)
                navigate("/home")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Update this Product</h1>
            <form onSubmit={updatedProductHandler}>
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
            <button type='submit'>Update</button>
        </form>
        </div>
);
};

export default Update;