import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';

import '../../assets/styles/tictactoe.css';

import { LangContext } from '../../App.js';

const PLAYERX = "Xs";
const PLAYER0 = "Os";


export default function Tictactoe() {
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
    ]);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `TICTACTOE`;
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/4539");
      const myjson = await res.json();
      console.log(myjson);
      setTurn(myjson.turn);
      setMoves(myjson.moves);
      setValues(myjson.values);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
  }

  function resetClick(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }


  let text = turn;

  return (
    <LangContext.Consumer>
      {(context) => {
        return <div>
          <div class="tictactoe">
            <div id='cabecera'>
              <Header text={text} />
            </div>            
            <Board values={values} appClick={appClick} />
            <h3 id='moves'>{context.dictionary["numberMov"]} {moves}</h3>
            <Reset resetClick={resetClick}></Reset>
          </div>

        </div>
      }
      }

    </LangContext.Consumer>


  );

}
