import FlashcardsPage from "./FlashcardsPage";
import React from 'react';


function WelcomePage() {
    const [visible, setVisible] = React.useState(true);

    if (visible === true) {
        return (
           <RenderFirstPage setVisible = {setVisible}/>
        )
    } else {
        return <FlashcardsPage />
    }

}

function RenderFirstPage({setVisible}) {
    return (
        <main className="welcome-page">
            <section className="header">
                <img src="./Assets/img/logo.png" alt="Page logo"></img>
                <h1>ZapRecall</h1>
            </section>

            <button className="start-quizz" onClick={() => { setVisible(false) }}>Iniciar Recall!</button>
        </main>
    )
}


export default WelcomePage;