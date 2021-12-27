import React from "react";
import '../../assets/styles/image.css';
import { LangContext } from "../../App";

export default function Image (props) {

    const urlFotoQuiz = props.pregunta.attachment;
    const urlFotoPorDefecto = "https://images.emojiterra.com/google/android-11/512px/2753.png"

    var urlFoto = urlFotoPorDefecto;

    function putFoto() {
        if (urlFotoQuiz === null ||urlFotoQuiz==="") {
            urlFoto = urlFotoPorDefecto
        }
        else urlFoto = urlFotoQuiz.url;
    }

    putFoto();

return( 
        <LangContext.Consumer>
            {(context) => {
                return  <div className="imagen">
                            <img src={urlFoto}/>                
                        </div>
            }}
        </LangContext.Consumer>
    
    
        );
}