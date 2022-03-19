import CheckSuccess from "./CheckSuccess";

function Footer({ numAnsw, answIcon, deck }) {
    return (
        <footer>
            {numAnsw === deck.length ? <CheckSuccess icon = {answIcon} /> : <p> {numAnsw}/{deck.length} CONCLUÍDOS</p>}
            <div>
                {answIcon}
            </div>
        </footer>
    )
}

export default Footer;