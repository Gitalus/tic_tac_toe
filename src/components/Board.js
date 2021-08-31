import React from 'react';
import { Square } from './Square';

export const Board = ({ squares, onClick }) => {
    return (
        <div className="game-board">
            { squares.map(( square, i ) => {
                return <Square key= { i } value={ square } onClick= { () => onClick(i) } />
            })}
        </div>
    )
}
