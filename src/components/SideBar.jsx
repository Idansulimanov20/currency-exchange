import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './css/SideBar.css'


export default function SideBar() {
    const [currencies, setCurrencies] = useState(null);

    useEffect(() => {
        fetch('https://api.vatcomply.com/currencies')
            .then(res => res.json())
            .then(data => setCurrencies(data))
    }, []);
  
    return (
        <div className="sidebar">
            <h1>Currencies</h1>
            {currencies ? (
                Object.entries(currencies).map(([code, details]) => (
                    <NavLink
                        to={`/currency/${code}`}
                        key={code}
                        className="currency-link"
                    >
                        {details.name} ({details.symbol})
                    </NavLink>
                ))
            ) : (
                <span>Loading...</span>
            )}
        </div>
    );
}
/**
 * Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
 * In this context, it is used to iterate over the currencies object, where each entry is an array containing the currency code and its details.
 */