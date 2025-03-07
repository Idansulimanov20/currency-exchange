import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './css/ExchangeRate.css';

export default function ExchangeRate() {
    const { currencyCode } = useParams(); 
    console.log(currencyCode);
    
    const [rate, setRate] = useState(null);
    const [symbols, setSymbols] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.vatcomply.com/rates?base=${currencyCode}`)
            .then(res => res.json())
            .then(data => {
                setRate(data.rates)
                setLoading(false)
            })

    }, [currencyCode]);

    useEffect(() => {
        fetch('https://api.vatcomply.com/currencies')
            .then(res => res.json())
            .then(data => setSymbols(data))
    }, []);

    return (
       <div className='back'>
        <div className="exchange-rate">
            <h2>Exchange Rate for 1 {currencyCode}</h2>
           
            {!loading && symbols ? 
                    Object.entries(rate).map(([currency, rate]) => {
                        const symbol = symbols[currency]?.symbol || '';  // Get symbol property, fallback to empty string
                        return (
                            <p key={currency}>
                                {currency} :{rate} {symbol}
                            </p>
                        );
                    }) :
                    <p>Loading...</p>
                }
        </div>
       </div>
    );
}