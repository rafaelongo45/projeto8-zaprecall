import RenderDeck from './RenderDeck';

function Main({ numAnsw, setNumAnsw, answIcon, setAnswIcon, deck }) {
    return (
        <main>
            <article className="play-area">
                <RenderDeck numAnsw={numAnsw} setNumAnsw={setNumAnsw} answIcon={answIcon} setAnswIcon={setAnswIcon} deck = {deck} />
            </article>
        </main>
    )
}

export default Main;