import React from 'react';

export const Board = ({ squares, handleClick, matches }) => {
    return (
        <div className="game-board">
            { squares.map(( square, i ) => {
                return (
                    <button 
                        className={`box ${ matches ? ( matches.includes(i) ? "success" : null ) : null }`} 
                        key={ i }
                        onClick={ () => handleClick(i) }>
                            { square }
                    </button>
                )
            })}
        </div>
    )
}
