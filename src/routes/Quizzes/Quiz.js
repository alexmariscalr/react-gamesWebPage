//React
import React, { useState, useEffect, Component } from 'react';
//Quizzes
//import {quizzes} from "../../assets/mock-data";
//Componentes
import Game from './Game';
import Author from './Author';
import Answer from './Answer';
import Previous_Next from './Actionbar/Previous_Next';
import Submit from './Actionbar/Submit';
import Score from './Score';
import Image from './Image';
import Save from './Actionbar/Save';

//Estilos
import '../../assets/styles/quiz.css';
import Shortcuts from './Actionbar/Shortcuts';



//const preguntas = quizzes;

const PREGUNTAS_URL = "https://core.dit.upm.es/api/quizzes/random10wa?token=d18330fe90196aaed0d3"

export default function Quiz(props) {

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setcurrentQuiz] = useState(0);
  const [quizzes, setQuizzes] = useState([]);
  const [answers, setAnswers] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [inputInfo, setInputInfo] = useState(['', '', '', '', '', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    document.title = `QUIZ`;
  });

  useEffect(() => {
    fetch(PREGUNTAS_URL)
      .then((response) => response.json())
      .then((datos) => {
        setQuizzes(datos);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  /* useEffect(() => {
    document.title = `QUIZ`;
  });

*/



  /*
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/2omd"); 
      //SI NO USAR http://myjson.dit.upm.es/api/bins/9bth
      const myjson = await res.json();
      console.log(myjson);
      setScore(myjson.score);
      setFinished(myjson.finished);
      setcurrentQuiz(myjson.currentQuiz);
    }

    fetchData();
  }, []);

  */


  function clear() {
    document.getElementById("respuesta").value = "";
  }

  if (!finished) {
    return (
      <div >

        <div className='titulo'>
          <h4 title='Página de quizzes'>QUIZ APP</h4>
        </div>

        <p></p>

        <div id='container'>

          <div id='shortcuts'>
            <Shortcuts currentQuiz={currentQuiz}
              setcurrentQuiz={setcurrentQuiz}
              clear={clear} />
          </div>

          {/*Mostramos la pregunta y la foto del quiz*/}
          <div id='entornoJuego'>

            <Game currentQuiz={currentQuiz}
              pregunta={quizzes[currentQuiz]} />


            <Image currentQuiz={currentQuiz}
              pregunta={quizzes[currentQuiz]} />

            <Answer answers={answers}
              currentQuiz={currentQuiz}
              setInputInfo={setInputInfo} />

            <div id="botones">
              <Save preguntas={quizzes}
                currentQuiz={currentQuiz}
                setcurrentQuiz={setcurrentQuiz}
                clear={clear}
                answers={answers}
                setAnswers={setAnswers}
                inputInfo={inputInfo}
                setInputInfo={setInputInfo}
              />
            </div>

            <Author currentQuiz={currentQuiz} pregunta={quizzes[currentQuiz]} />
          </div>

          <div id='botones'>
            {/*Anterior y siguiente*/}
            <Previous_Next preguntas={quizzes}
              currentQuiz={currentQuiz}
              setcurrentQuiz={setcurrentQuiz}
              clear={clear}
              answers={answers}
              setAnswers={setAnswers}
              inputInfo={inputInfo}
              setInputInfo={setInputInfo}
            />




            {/*Entregar*/}
            <Submit preguntas={quizzes}
              currentQuiz={currentQuiz}
              setFinished={setFinished}
              finished={finished}
              answers={answers}
              setAnswers={setAnswers}
              setScore={setScore}
              score={score}
            />

          </div>



        </div>

        {/*Mostramos los botones*/}

      </div>
    );
  }

  return (
    <Score score={score} />
  )
}
