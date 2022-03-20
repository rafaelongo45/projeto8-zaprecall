import FlashcardsPage from "./FlashcardsPage";
import React from 'react';

import logo from "../img/logo.png"

function WelcomePage() {
    const [visible, setVisible] = React.useState(true);
    const [inputValue, setInputValue] = React.useState(0);
    const [selectedDeck, setSelectedDeck] = React.useState("");
    
    if (visible === true) {
        return (
            <RenderFirstPage setVisible={setVisible} setInputValue={setInputValue} inputValue={inputValue} setSelectedDeck={setSelectedDeck} selectedDeck = {selectedDeck} />
        )
    } else {
        return <FlashcardsPage setVisible={setVisible} inputValue={inputValue} setInputValue={setInputValue} setSelectedDeck={setSelectedDeck} selectedDeck = {selectedDeck} />
    }
}

function RenderFirstPage({ setVisible, setInputValue, inputValue, setSelectedDeck, selectedDeck }) {
    
    function handleKeyPress(pressedKey) {
        var key = pressedKey.key;
        if (key === "Enter") {
            checkInput()
        }
    }

    function checkInput(){
        if (inputValue < 1 || inputValue > 8 || selectedDeck === "") {
            const warning = alert("Escolha um número entre 1 e 8 e selecione um deck!");
            return warning;
        } else {
            setVisible(false);
        }
    }

    function handleValue(option){
        setSelectedDeck(option.target.value);
    }

    return (
        <main className="welcome-page">
            <section className="header">
                <img src={logo} alt="Page logo"></img>
                <h1>ZapRecall</h1>
            </section>
            <select name="decks" defaultValue = "" onChange={handleValue}>
                <option disabled value = "" >Escolha seu deck</option>
                <option value = "jsx">JSX</option>
                <option value = "pkmn">Pokémon</option>
            </select>
            <input placeholder="Qual sua meta de ZAP?" onKeyDown={(pressedKey) => { handleKeyPress(pressedKey) }} onChange={(click) => { setInputValue(click.target.value) }}></input>

            <button type ="submit" className="start-quizz" onClick={checkInput}>Iniciar Recall!</button>
        </main>
    )
}

export default WelcomePage;