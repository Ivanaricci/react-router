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
        <div className='container'>
            <h1 className='py-5'>Dettaglio prodotto</h1>
            <div>
                <div className="row">
                    <div className="col-12">
                        <div className='image-container'>
                            <img className='img-fluid' src={product.image} alt={product.title} />
                        </div>
                        <div>
                            <h1 className='pt-5'>{product.title}</h1>
                            <p>
                                <em>{product.price} &euro;</em>
                            </p>
                            <p>
                                <strong>{product.category}</strong>
                            </p>
                            <p><strong>Descrizione:</strong> {product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct