import reactDom from "react-dom";
import WelcomePage from "./Components/WelcomePage";
import FlashcardsPage from "./Components/FlashcardsPage";

function App(){
    return(
        <FlashcardsPage />
    )
}

const root = document.querySelector('.root');
reactDom.render(<App/>, root);