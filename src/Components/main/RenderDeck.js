import RenderCard from "./RenderCard";

function RenderDeck({ numAnsw, setNumAnsw, answIcon, setAnswIcon, deck}) {
    const renderCard = deck.map((card, index) => {
        return (
            <RenderCard key={card.question + index} index={index} question={card.question} answer={card.answer} numAnsw={numAnsw} setNumAnsw={setNumAnsw} answIcon={answIcon} setAnswIcon={setAnswIcon} deck = {deck}/>
        )
    })

    return renderCard;
}

export default RenderDeck;