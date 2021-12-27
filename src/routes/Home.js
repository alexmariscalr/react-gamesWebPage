//import * as React from 'react';
import React, { useState, useEffect } from 'react';
import '../assets/styles/home.css';

import { LangContext } from '../App';

/*var img = document.createElement("img");
img.src = "../assets/photos/quiz.png";

var src = document.getElementById("foto");
document.write('<img src="../assets/photos/qui.jpeg"')
document.getElementById('pic')*/

let url1 = "https://th.bing.com/th/id/OIP.FqdzXOxq0XcLuojmEiIBFQHaHx?pid=ImgDet&rs=1"
let url2 = "https://img4.viajar.elperiodico.com/de/cf/83/istock-1223692043.jpg"

export default function Home() {
  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `TICTAC-QUIZ`;
  });



  return (
    <LangContext.Consumer>
      {(context) => {
        return <div>
          <main>
            <p></p>
            
            <div id='welcome'>{context.dictionary["welcome"]}</div>
            <h3>{context.dictionary["info"]}</h3>
            <div id='images'>
              <br />
              <br />
              
              <img id='image1' src={url1}/>
              <img id='image2'src={url2}/>
            </div>
            <div className='descripciones'>
              <p id='descTicTac'>{context.dictionary["descTicTac"]}</p>
              <p id='descQuiz'>{context.dictionary["descQuiz"]}</p>
            </div>
          </main>

        </div>
      }
      }

    </LangContext.Consumer>


  );

}


//<link rel="stylesheet" href="../assets/styles/home.css" type="text/css"></link>