import React from 'react';

export const Square = ({ value, onClick }) => {
    return (
        <button 
            className="box" 
            onClick={ onClick }>
                { value }
        </button>
    )
}
