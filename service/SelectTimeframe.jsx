import React, { useEffect, useState } from 'react';
export const SelectTimeframe = ({ onTimeframeSelected }) => {
    return (
        <>
            <h2>Please select time frame</h2>
            <div className="grid">
                {['yesterday', 'today', 'tomorrow'].map((timeframes) => (
                    <button className='sign' key={timeframes}
                        onClick={() => onTimeframeSelected(timeframes)}>{timeframes}</button>

                ))
                }
            </div>
        </>

    )
}