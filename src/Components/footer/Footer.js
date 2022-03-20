import CheckSuccess from "./CheckSuccess";

function Footer({ numAnsw, answIcon, deck, setVisible}) {
    return (
        <footer>
            {numAnsw === deck.length ? <CheckSuccess icon = {answIcon} /> : <p> {numAnsw}/{deck.length} CONCLUÍDOS</p>}
            <div>
                {answIcon}
                {numAnsw === deck.length ? <RenderRestartButton setVisible = {setVisible}/> : ""} 
            </div>
            
        </footer>
    )
}

function RenderRestartButton({setVisible}){
    return (
        <>
            <button className = "restart-game" onClick = {()=>{setVisible(true)}}>Reiniciar Recall</button>
        </>
    )
}

export default Footer;