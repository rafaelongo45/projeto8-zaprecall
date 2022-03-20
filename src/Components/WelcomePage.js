import FlashcardsPage from "./FlashcardsPage";
import React from 'react';

import logo from "../img/logo.png"

function WelcomePage() {
    const [visible, setVisible] = React.useState(true);
    const [inputValue, setInputValue] = React.useState(0)
    if (visible === true) {
        return (
           <RenderFirstPage setVisible = {setVisible} setInputValue = {setInputValue} inputValue = {inputValue}/>
        )
    } else {
        return <FlashcardsPage setVisible = {setVisible} inputValue = {inputValue} setInputValue = {setInputValue}/>
    }

}

function RenderFirstPage({setVisible, setInputValue, inputValue}) {
    function handleKeyPress(pressedKey) {
        var key = pressedKey.key;
        if (key === "Enter") {
            if(inputValue < 1 || inputValue > 8){
                const warning = alert("Escolha um número entre 1 e 8");
                return warning;
            }else{
                setVisible(false)
            }
        }
    }


    return (
        <main className="welcome-page">
            <section className="header">
                <img src={logo} alt="Page logo"></img>
                <h1>ZapRecall</h1>
            </section>
            <input placeholder= "Qual sua meta de ZAP?" onKeyDown={(pressedKey)=>{handleKeyPress(pressedKey)}} onChange = {(click)=>{setInputValue(click.target.value)}}></input>
            
            <button className="start-quizz" onClick={() => { setVisible(false) }}>Iniciar Recall!</button>
        </main>
    )
}


export default WelcomePage;