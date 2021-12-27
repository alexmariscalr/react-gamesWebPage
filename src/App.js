//import * as React from 'react';
import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './routes/Home';
import Tictactoe from './routes/Tictactoe/Tictactoe';
import Quiz from './routes/Quizzes/Quiz';

import LangSelector from './idiomas/LangSelector';
import es from './idiomas/es.json';
import en from './idiomas/en.json';

import './assets/styles/app.css'

const dictionaryList = { es, en };


export const LangContext = React.createContext({userLang: 'es', dictionary: es});


export default function App() {

	const [lang, setLang] = useState('es');

  const handleLanguageChange = (event) => {
		setLang(event.target.value);
	}
  
  const choose = useContext(LangContext);

  return (
    <div>
     
     <LangContext.Provider value={{ handleLanguageChange: handleLanguageChange,
        userLang: lang, dictionary: dictionaryList[lang] }}>
        <LangSelector />
        <Link className='titulo' to="/">
          <h1>TICTAC-QUIZ</h1>
        </Link>
                
        <nav>
          <div class="links">
            <Link to="/" className="link">Home</Link> {' '}
            <Link to="/tictactoe" className="link">TicTactoe</Link>
            <Link to="/quiz" className="link">Quiz</Link>
            <div id='indicator'></div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="tictactoe" element={<Tictactoe />} />
          <Route path="quiz" element={<Quiz />} />
        </Routes>
      </LangContext.Provider>
      
  <footer class="page-footer font-small blue">

  
  <div class="footer-copyright text-center py-3">© 2021 Autores:
    Alejandro Mariscal - Gabriel Artero
  </div>
  </footer>
    </div>
    
  );
}
  
