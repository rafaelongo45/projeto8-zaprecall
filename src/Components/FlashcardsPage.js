import React from "react"

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

function FlashcardsPage() {
    return (
        <>
            <Header text="ZapRecall" src="./Assets/img/logo-pequeno.png" />
            <Main />
            <Footer />
        </>
    )
}

function Header({ text, src }) {
    return (
        <header>
            <img src={src} alt="logo"></img>
            <h1>{text}</h1>
        </header>
    )
}

function Main() {
    return (
        <main>
            <article className="play-area">
                <RenderDeck />
            </article>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <p> 0/4 CONCLUÍDOS</p>
        </footer>
    )
}

function RenderDeck() {
    function comparador() {
        return Math.random() - 0.5;
    }

    jsxDeck.sort(comparador);

    const renderCard = jsxDeck.map((card, index) => {
        return (
            <RenderCard key={card.question + index} index={index} question={card.question} answer={card.answer} />
        )
    })

    return renderCard;
}

function RenderCard({ index, question, answer }) {
    const [visible, setVisible] = React.useState(true);
    const classCss = `${!visible ? "selected-" : ""}card`
    const [renderAnswer, setRenderAnswer] = React.useState(false);
    const classQuestionCss = `${!renderAnswer ? "question" : "question hidden"}`

    function RenderFrontBackCard() {
        return visible === true ? (
            <div className="front" onClick={() => { setVisible(false) }}>
                <p className="">Pergunta {index + 1}</p>
                <ion-icon name="play-outline" ></ion-icon>
            </div>
        ) :
            <div className={classQuestionCss}>
                <p>{question}</p>
                <ion-icon name="swap-horizontal-outline" onClick={() => { setRenderAnswer(true) }}></ion-icon>
            </div>
    }

    function RenderAnswer() {
        return renderAnswer === true ? (
            <section>
                <p>{answer}</p>
                <section className="buttons">
                    <RenderButtons />
                </section>
            </section>
        ) :
            <></>
    }

    return (
        <section className={classCss} >
            <RenderFrontBackCard />
            <RenderAnswer />
        </section>
    )
}


function RenderButtons() {
    const buttons = [
        { className: "forgot", text: "Não lembrei" },
        { className: "almost-forgot", text: "Quase não lembrei" },
        { className: "remembered", text: "Zap!" }
    ]

    const renderButton = buttons.map((button, index) => {
        return <button key={index} className={button.className}>{button.text}</button>
    })
    return renderButton;
}

export default FlashcardsPage;