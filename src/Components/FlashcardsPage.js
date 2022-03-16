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
            <img src="./Assets/img/logo-pequeno.png"></img>
            <h1>ZapRecall</h1>
        </header>
    )
}

function Main() {
    return (
        <main>
            <article className="play-area">
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>
                <section class="card">
                    <p>Pergunta 100</p>
                    <ion-icon name="play-outline"></ion-icon>
                </section>

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

export default FlashcardsPage;