import React, { useState} from 'react';
import { calculateWinner } from '../helper.js';
import { Board } from './Board';

export const Game = () => {

    const [ squares, setSquares ] = useState( Array(9).fill(null) );
    const [ xIsNext, setXIsNext ] = useState( true );
    const winner = calculateWinner( squares );
    const xO = xIsNext ? "X" : "O";

    function handleClick(i) {
        const _squares = [ ...squares ];
        // return if won or occupied
        if (winner || _squares[i]) return;
        // select square
        _squares[i] = xO;
        setSquares([ ..._squares ]);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="container">
            <h1>TicTacToe in React.js</h1>
            <h1>{ winner ? `Winner:  ${ winner }` : "Next Player: " + xO }</h1>
            <button className="resetbtn" onClick={ () => { setSquares(Array(9).fill(null)) }}>Start Again</button>
            <Board squares={ squares } onClick={ handleClick } />
        </div>
    )
}
