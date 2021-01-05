import React, { useState, useEffect } from 'react';
import Lawyers from './Lawyers';
import apiService from '../services/api';

export default function index() {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiService.getReviews()
            .then((res) => {
                setData(res.data)
            })
            .catch((err) =>{
                console.log(err)
            });
    }, []);

    return (
        <div className="container">
            <Lawyers data = { data }/>
        </div>
    )
}
