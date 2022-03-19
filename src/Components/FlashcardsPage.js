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

function comparador() {
    return Math.random() - 0.5;
}

jsxDeck.sort(comparador);


const buttons = [
    { className: "forgot", text: "Não lembrei" },
    { className: "almost-forgot", text: "Quase não lembrei" },
    { className: "remembered", text: "Zap!" }
]

function FlashcardsPage() {
    const [numAnsw, setNumAnsw] = React.useState(0);
    const [answIcon, setAnswIcon] = React.useState('');

    return (
        <>
            <Header text="ZapRecall" src="./Assets/img/logo-pequeno.png" />
            <Main numAnsw = {numAnsw} setNumAnsw = {setNumAnsw} answIcon = {answIcon} setAnswIcon = {setAnswIcon}/>
            <Footer numAnsw = {numAnsw} answIcon = {answIcon}/>
        </>
    )
}

function Header({ text, src}) {
    return (
        <header>
            <img src={src} alt="logo"></img>
            <h1>{text}</h1>
        </header>
    )
}

function Main({numAnsw, setNumAnsw, answIcon, setAnswIcon}) {
    return (
        <main>
            <article className="play-area">
                <RenderDeck numAnsw = {numAnsw} setNumAnsw = {setNumAnsw} answIcon = {answIcon} setAnswIcon = {setAnswIcon}/>
            </article>
        </main>
    )
}

function Footer({numAnsw, answIcon}) {
    return (
        <footer>
            <p> {numAnsw}/{jsxDeck.length} CONCLUÍDOS</p>
            <div>
                {answIcon}
            </div>
        </footer>
    )
}

function RenderDeck({numAnsw, setNumAnsw, answIcon, setAnswIcon}) {
    const renderCard = jsxDeck.map((card, index) => {
        return (
            <RenderCard key={card.question + index} index={index} question={card.question} answer={card.answer} numAnsw = {numAnsw} setNumAnsw = {setNumAnsw} answIcon = {answIcon} setAnswIcon = {setAnswIcon}/>
        )
    })

    return renderCard;
}

function RenderCard({ index, question, answer, numAnsw, setNumAnsw, answIcon, setAnswIcon }) {
    const [visible, setVisible] = React.useState(true);
    const [renderAnswer, setRenderAnswer] = React.useState(false);
    const [iconName, setIconName] = React.useState('play-outline')
    const [cssStyle, setCssStyle] = React.useState('');
    const [iconCss, setIconCss] = React.useState('');
    const classCss = `${!visible ? "selected-" : ""}card`
    const classQuestionCss = `${!renderAnswer ? "question" : "question hidden"}`

    function showFront(text, n) {
        setVisible(true);
        setRenderAnswer(false);
        setNumAnsw(n+1)
        if (text === "forgot") {
            answIcon = [...answIcon,  <ion-icon class = 'wrong-icon' name='close-circle' ></ion-icon>]
            setIconName('close-circle');
            setCssStyle('wrong');
            setIconCss('wrong-icon');
            setAnswIcon(answIcon);
        } else if (text === "almost-forgot") {
            answIcon = [...answIcon, <ion-icon class = 'almost-icon' name='help-circle' ></ion-icon>]
            setIconName('help-circle');
            setCssStyle('almost');
            setIconCss('almost-icon');
            setAnswIcon(answIcon);
        } else if (text === "remembered") {
            answIcon = [...answIcon, <ion-icon class = 'right-icon' name='checkmark-circle' ></ion-icon>]
            setIconName('checkmark-circle');
            setCssStyle('right');
            setIconCss('right-icon');
            setAnswIcon(answIcon);
        }
    }

    function RenderFrontBackCard({ iconName, cssStyle, iconCss }) {
        return visible === true ? (
            <div className="front" onClick={() => { setVisible(false) }}>
                <p className={cssStyle}>Pergunta {index + 1}</p>
                <ion-icon class={iconCss} name={iconName} ></ion-icon>
            </div >
        ) :
        <div className={classQuestionCss}>
            <p>{question}</p>
            <ion-icon name="swap-horizontal-outline" onClick={() => { setRenderAnswer(true) }}></ion-icon>
        </div>
    }

    function RenderAnswer() {
        const renderButton = buttons.map((button, index) => {
            return <RenderButton key={index + button.text} index={index} className={button.className} text={button.text} showFront={() => { showFront(button.className, numAnsw) }} />
        })
        return renderAnswer === true ? (
            <section>
                <p>{answer}</p>
                <section className="buttons">
                    {renderButton}
                </section>
            </section>
        ) :
            <></>
    }

    return (
        <section className={classCss} >
            <RenderFrontBackCard cssStyle = {cssStyle} iconName={iconName} iconCss = {iconCss} />
            <RenderAnswer />
        </section>
    )
}


function RenderButton({ className, text, showFront }) {
    return <button className={className} onClick={showFront}>{text}</button>
}

export default FlashcardsPage;