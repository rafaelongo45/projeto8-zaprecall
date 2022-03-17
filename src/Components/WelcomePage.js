import FlashcardsPage from "./FlashcardsPage";
import React from 'react';


function WelcomePage(props) {
    const [visible, setVisible] = React.useState(true);

    if(visible === true){
        return (
            <main className="welcome-page">
                <section className="header">
                    <img src="./Assets/img/logo.png" alt="Page logo"></img>
                    <h1>ZapRecall</h1>
                </section>
                
                <button className="start-quizz" onClick = {() => {setVisible(false)}}>Iniciar Recall!</button>
            </main>
        )
    }else{
        return <FlashcardsPage />
    }
    
}

export default WelcomePage;