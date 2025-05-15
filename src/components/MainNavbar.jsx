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
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li key={index}>
                                <li><NavLink to={link.path}>{link.label}</NavLink></li>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar