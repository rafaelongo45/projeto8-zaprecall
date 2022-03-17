function FlashcardsPage() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

function Header() {
    return (
        <header>
            <img src="./Assets/img/logo-pequeno.png" alt = "logo"></img>
            <h1>ZapRecall</h1>
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

    const renderCard = jsxDeck.map((card, index) => {
        return (
            <section key = {index} className="card">
                <p className = "">Pergunta {index + 1}</p>

                <div className="icon">
                    <ion-icon name="play-outline" ></ion-icon>
                </div>

                <div className="question hidden">
                    <p>{card.question}</p>
                    <ion-icon name="swap-horizontal-outline"></ion-icon>
                </div>

                <section className="buttons hidden">
                    <p>{card.answer}</p>
                    <RenderButtons />
                </section>
            </section>
        )
    })

    return renderCard;
}

function RenderButtons(){
    const buttons = [
        {className: "forgot", text: "Não lembrei"},
        {className: "almost-forgot", text: "Quase não lembrei"},
        {className: "remembered", text: "Zap!"}
    ]

    const renderButton = buttons.map((button, index) => {
        return <button key = {index} className={button.className}>{button.text}</button>
    })
    return renderButton;
}

export default FlashcardsPage;