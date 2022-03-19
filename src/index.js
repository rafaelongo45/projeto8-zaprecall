import reactDom from "react-dom";
import WelcomePage from "./Components/WelcomePage";

import "./css/reset.css";
import "./css/welcome-page.css";
import "./css/flashcards-page.css";

function App() {
    return (
        <>
            <WelcomePage />
        </>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root);