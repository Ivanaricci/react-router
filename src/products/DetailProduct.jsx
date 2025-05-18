import React from 'react'
import { useParams } from 'react-router-dom'

const DetailProduct = () => {

    const { id } = useParams;

    return (
        <div>
            <h1>Dettaglio prodotto</h1>
        </div>
    )
}

export default DetailProduct