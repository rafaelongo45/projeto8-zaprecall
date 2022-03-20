import CheckSuccess from "./CheckSuccess";

function Footer({ numAnsw, answIcon, deck, setVisible, inputValue, setInputValue}) {
    return (
        <footer>
            {}
            {numAnsw === deck.length ? <CheckSuccess icon = {answIcon} inputValue = {inputValue} /> : <p> {numAnsw}/{deck.length} CONCLUÍDOS</p>}
            <div className = 'answer-icons'>
                {answIcon}
            </div>

            <div>
            {numAnsw === deck.length ? <RenderRestartButton setVisible = {setVisible} setInputValue = {setInputValue}/> : ""} 
            </div>
            
        </footer>
    )
}

function RenderRestartButton({setVisible,setInputValue}){
    return (
        <>
            <button className = "restart-game" onClick = {()=>{setVisible(true); setInputValue(0)}}>Reiniciar Recall</button>
        </>
    )
}

export default Footer;