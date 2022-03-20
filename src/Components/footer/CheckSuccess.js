function CheckSuccess({icon, inputValue}) {
    let success = false;
    let numZap = 0;
    let numWrong = 0;
    for (let i = 0; i < icon.length; i++) {
        if (icon[i].props.class === 'right-icon') {
            numZap++
        }

        if (icon[i].props.class === 'wrong-icon') {
            numWrong++
        }
    }

    if(numZap >= inputValue && numWrong ===0){
        success = true;
    }
    
    return (success === false ? 
        <RenderResult title = "😥 PUTZ" text = "Ainda faltaram alguns ou você errou um card... Mas não desanime!"/> 
        : 
        <RenderResult title = "🥳Parabéns!" text = "Você não esqueceu de nenhum flashcard!"/>
    )
}

function RenderResult({title, text}){
    return(
        <>
            <h1>{title}</h1>
            <p>{text}</p>
        </>
    )
}

export default CheckSuccess;