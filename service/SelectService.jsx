import React, { useEffect, useState } from 'react';
export const SelectSign = ({ onSignsSelected }) => {

    const [signs, setSigns] = useState([]);
    useEffect(() => {
        fetch("http://sandipbgt.com/theastrologer/api/sunsigns")
            .then(response => response.json())
            .then(setSigns);

    }, [])
    return (
        <>
            <h2>Please select your sign</h2>
            <div className="grid">
                {signs.map((sign) => (
                    <button className='sign' key={sign} onClick={() => onSignsSelected(sign)}>{sign}</button>

                ))
                }
            </div>
        </>
    )

}