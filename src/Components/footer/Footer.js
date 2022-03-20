import CheckSuccess from "./CheckSuccess";

function Footer({ numAnsw, answIcon, deck, setVisible, inputValue, setInputValue, setSelectedDeck}) {
    return (
        <footer>
            {}
            {numAnsw === deck.length ? <CheckSuccess icon = {answIcon} inputValue = {inputValue} /> : <p> {numAnsw}/{deck.length} CONCLUÍDOS</p>}
            <div className = 'answer-icons'>
                {answIcon}
            </div>

            <div>
            {numAnsw === deck.length ? <RenderRestartButton setVisible = {setVisible} setInputValue = {setInputValue} setSelectedDeck={setSelectedDeck} /> : ""} 
            </div>
            
        </footer>
    )
}

function RenderRestartButton({setVisible,setInputValue, setSelectedDeck}){
    return (
        <>
            <button className = "restart-game" onClick = {()=>{setVisible(true); setInputValue(0); setSelectedDeck("")}}>Reiniciar Recall</button>
        </>
    )
}

export default Footer;