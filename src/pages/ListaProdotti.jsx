import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainNavbar from '../components/MainNavbar';

const ListaProdotti = () => {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProducts(resp.data)
            });
    }

    useEffect(() => {
        getProducts
    }, [])



    return (
        <>
            <MainNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            Lista Prodotti
                        </h1>
                    </div>
                </div>
                <div className="row g-3">
                    {products.map((product) => {
                        return (
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-image-top">
                                        <img src={product.image} alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{product.title}</h3>
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default ListaProdotti