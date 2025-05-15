import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
    {
        path: '/',
        label: "Homepage",
    },
    {
        path: '/chisiamo',
        label: "Chi Siamo",
    },
    {
        path: '/prodotti',
        label: "Prodotti",
    },
]

const MainNavbar = () => {
    return (
        <header>
            <nav>
                <ul className='list-unstyled d-flex'>
                    {links.map((link, index) => {
                        return (
                            <li className='mx-2' key={index}>
                                <NavLink className="custom-link" to={link.path}>{link.label}</NavLink>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar