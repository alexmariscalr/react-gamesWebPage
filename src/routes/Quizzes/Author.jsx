import React from "react";
import { LangContext } from "../../App";
import './../../assets/styles/author.css'



export default function Author(props) {
   
    let autorConFoto = props.pregunta.author.photo.url
    let autorSinFoto = "https://media.istockphoto.com/vectors/user-icon-vector-male-person-symbol-profile-circle-avatar-sign-in-vector-id951316070?k=6&m=951316070&s=170667a&w=0&h=cVuAFmKDNTGIXAqL8I5muA_rC82fV6xgXD3k7rS3nPE="
    let isAdmin = props.pregunta.author.isAdmin

    let autorConUsername = props.pregunta.author.profileName
    let autorSinUsername = ""

    let fotoAutor = autorSinFoto
    let usernameAutor = autorSinUsername

    function existeUsername(){
        if (autorConUsername !== undefined || autorConFoto !== undefined || isAdmin === true) {
            fotoAutor = autorConFoto
            usernameAutor = autorConUsername || "admin"
        } else if (autorConUsername === null || autorConFoto === undefined) {
            fotoAutor = autorSinFoto
            usernameAutor = autorSinUsername
        }
    }

    existeUsername() 
    
    return( 
    <LangContext.Consumer>
        {(context) => {
            return <div id="autor">
                {context.dictionary["Created_by"]}: {usernameAutor} 
                <img src={fotoAutor}/>
                
                
            </div>
        }}
    </LangContext.Consumer>


    );
}