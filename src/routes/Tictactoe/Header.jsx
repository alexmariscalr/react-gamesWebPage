import React from 'react';
import {Card} from 'react-bootstrap';
import { LangContext } from '../../App';


export default function Header(props) {
  return (
    <LangContext.Consumer>
      {(context) => {
        return <div>
          <div className='card'>
            <Card style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title id="titulo">
                  {context.dictionary["turno"]}
                </Card.Title>
                <Card.Text>
                  {props.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      }
      }

    </LangContext.Consumer>


  );
}