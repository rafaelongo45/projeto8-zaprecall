import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Main from './main/Main.js'

import logoPequeno from '../img/logo-pequeno.png'

import React from "react"

let deck;

function FlashcardsPage({setVisible, inputValue, setInputValue, selectedDeck, setSelectedDeck}) {
    const [numAnsw, setNumAnsw] = React.useState(0);
    const [answIcon, setAnswIcon] = React.useState('');
    
    selectedDeck === "pkmn" ? deck = pkmnDeck : deck = jsxDeck;
    
    return (
        <>
            <Header text="ZapRecall" src={logoPequeno} />
            <Main numAnsw={numAnsw} setNumAnsw={setNumAnsw} answIcon={answIcon} setAnswIcon={setAnswIcon} deck = {deck} />
            <Footer numAnsw={numAnsw} answIcon={answIcon} deck = {deck} setVisible = {setVisible} inputValue = {inputValue} setInputValue = {setInputValue} setSelectedDeck={setSelectedDeck} />
        </>
    )
}

let jsxDeck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __ ", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

let pkmnDeck = [
    { question: "Qual a evolução do pikachu?", answer: "Raichu" },
    { question: "Qual a evolução do ghastly?", answer: "haunter" },
    { question: "Qual a evolução do ratata?", answer: "raticate" },
    { question: "Qual pkmn criou o universo", answer: "Arceus" },
    { question: "Qual o nome do protagonista", answer: "Ash" },
    { question: "Qual o nome do prof que da pkmn", answer: "dr oak" },
    { question: "Qual a evolução do pikachu?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "Qual a evolução do pikachu?", answer: "Uma extensão de linguagem do react" },
]

function comparador() {
    return Math.random() - 0.5;
}

pkmnDeck = pkmnDeck.sort(comparador)
jsxDeck = jsxDeck.sort(comparador)


export default FlashcardsPage;