import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';


const DetailProduct = () => {

    // recupero il paramentro dinamico dalla rotta
    const { id } = useParams();

    // definiszione della variabile di stato che conterrà il prodotto
    const [product, setProduct] = useState({})

    // definizione della funzione che recupera il prodotto
    const getSingleProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        });
    }

    useEffect(() => {
        getSingleProduct();
    }, []);

    return (
        <div>
            <h1>Dettaglio prodotto</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='image-container'>
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h1>{product.title}</h1>
                        <span>
                            <em>{product.price} &euro;</em>
                        </span>
                        <span>
                            <strong>{product.category}</strong>
                        </span>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct