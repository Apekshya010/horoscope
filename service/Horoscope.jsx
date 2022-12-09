import React, { useEffect, useState } from 'react';
export const Horoscope = ({ sign, timeframe }) => {
    const [horoscope, setHoroscope] = useState([]);
    useEffect(() => {
        fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${timeframe}`)
            .then(response => response.json())
            .then(({ horoscope }) => horoscope)
            .then(setHoroscope);

    }, [])
    return (
        <div>{horoscope}</div>
    )

}