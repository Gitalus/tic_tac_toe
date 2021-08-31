import React from 'react';
import ReactDOM from 'react-dom';
import { TicTacToe } from './components/TicTacToe';

const centerStyle = {
    backgroundColor: "DarkSeaGreen",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "98vh"
}

ReactDOM.render(
    <div style={ centerStyle }>
        <TicTacToe />
    </div>
    ,document.getElementById('root')
);

