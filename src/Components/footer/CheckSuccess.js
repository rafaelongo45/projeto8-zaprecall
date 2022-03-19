function CheckSuccess({icon}) {
    let success = true;
    for (let i = 0; i < icon.length; i++) {
        if (icon[i].props.class === 'wrong-icon') {
            success = false;
        }
    }
    
    return (success === false ? 
        <RenderResult title = "😥 PUTZ" text = "Ainda faltaram alguns... Mas não desanime!"/> 
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