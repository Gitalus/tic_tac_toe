import React, { useState} from 'react';
import { calculateWinner } from '../helper.js';
import { Board } from './Board';

export const Game = () => {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    function handleClick(i) {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [ ...current ];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select square
        squares[i] = xO;
        setHistory([ ...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    }

    return (
        <div className="container">
            <h1>TicTacToe in React.js</h1>
            <h3>{ winner ? "Winner: " + winner : "Next Player: " + xO }</h3>
            <Board squares={ history[stepNumber] } onClick={ handleClick } />
        </div>
    )
}
