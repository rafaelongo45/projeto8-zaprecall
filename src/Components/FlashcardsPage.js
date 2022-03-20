import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import Main from './main/Main.js'

import logoPequeno from '../img/logo-pequeno.png'

import React from "react"

function FlashcardsPage({setVisible, inputValue, setInputValue}) {
    const [numAnsw, setNumAnsw] = React.useState(0);
    const [answIcon, setAnswIcon] = React.useState('');

    console.log(inputValue)

    return (
        <>
            <Header text="ZapRecall" src={logoPequeno} />
            <Main numAnsw={numAnsw} setNumAnsw={setNumAnsw} answIcon={answIcon} setAnswIcon={setAnswIcon} deck = {deck}/>
            <Footer numAnsw={numAnsw} answIcon={answIcon} deck = {deck} setVisible = {setVisible} inputValue = {inputValue} setInputValue = {setInputValue}/>
        </>
    )
}

const jsxDeck = [
    { question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __ ", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __ ", answer: "passar diferentes informações para componentes " },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

function comparador() {
    return Math.random() - 0.5;
}

const deck = jsxDeck.sort(comparador);

export default FlashcardsPage;