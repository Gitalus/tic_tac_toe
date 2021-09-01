import React from 'react';

export const Board = ({ squares, onClick }) => {
    return (
        <div className="game-board">
            { squares.map(( square, i ) => {
                return (
                    <button 
                        className="box" 
                        key={ i }
                        onClick={ () => onClick(i) }>
                            { square }
                    </button>
                )
            })}
        </div>
    )
}
