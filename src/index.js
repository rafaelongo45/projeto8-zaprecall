import reactDom from "react-dom";
import WelcomePage from "./Components/WelcomePage";

function App() {
    return (
        <>
            <WelcomePage />
        </>
    )
}

const root = document.querySelector('.root');
reactDom.render(<App />, root);