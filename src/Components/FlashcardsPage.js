import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Main from './main/Main.js'

import logoPequeno from '../img/logo-pequeno.png'

import React from "react"

let deck;

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
    { question: "Quem criou Pokémon?", answer: "Satoshi Tajiri" },
    { question: "Em que ano foi lançado o primeiro jogo?", answer: "1996" },
    { question: "Em que ano estreou o anime?", answer: "1997" },
    { question: "Qual pokémon usa o crânio da mãe como capacete?", answer: "Cubone" },
    { question: "Hitmonlee foi inspirado em qual ator?", answer: "Bruce Lee" },
    { question: "Quantas vezes o Brock abre os olhos no anime?", answer: "Três vezes" },
    { question: "Qual foi o primeiro pokémon criado?", answer: "Rhydon" },
    { question: "Quem é o criador de tudo?", answer: "Arceus" },
]

pkmnDeck = pkmnDeck.sort(comparador)
jsxDeck = jsxDeck.sort(comparador)

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

function comparador() {
    return Math.random() - 0.5;
}

export default FlashcardsPage;