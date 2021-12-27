import React from 'react';
import { Button } from 'react-bootstrap';
import { LangContext } from '../../App';

import './../../assets/styles/tictactoe.css'

export default function Reset(props) {
  function click() {
    props.resetClick();
  }


  return (
    <LangContext.Consumer>
      {(context) => {
        return <div>
          <Button id='boton' onClick={click} >
            {context.dictionary["reset"]}
          </Button>

        </div>
      }
      }

    </LangContext.Consumer>


  );

}