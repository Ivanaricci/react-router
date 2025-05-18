import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MainNavbar from '../components/MainNavbar';
import { NavLink } from 'react-router-dom';

const ListaProdotti = () => {

    const [products, setProducts] = useState([]);



    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProducts(resp.data)
            });
    }, [])



    return (
        <>
            <MainNavbar />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='pb-5'>
                            Lista Prodotti
                        </h1>
                    </div>
                </div>
                <div className="row g-3">
                    {products.map((product) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4" key={product.id}>
                                <NavLink to={`/products/${ListaProdotti.id}`}>
                                    <div className="card">
                                        <div className="card-image-top">
                                            <img src={product.image} className='img-fluid' alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{product.title}</h3>
                                            <p>{product.price}</p>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default ListaProdotti