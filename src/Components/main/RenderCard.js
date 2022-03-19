import RenderButton from "./RenderButton";

import React from 'react';

function RenderCard({ index, question, answer, numAnsw, setNumAnsw, answIcon, setAnswIcon }) {
    const [visible, setVisible] = React.useState(true);
    const [renderAnswer, setRenderAnswer] = React.useState(false);
    const [iconName, setIconName] = React.useState('play-outline')
    const [cssStyle, setCssStyle] = React.useState('');
    const [iconCss, setIconCss] = React.useState('');
    const classCss = `${!visible ? "selected-" : ""}card`
    const classQuestionCss = `${!renderAnswer ? "question" : "question hidden"}`

    function showFront(text, n) {
        setVisible(true);
        setRenderAnswer(false);
        setNumAnsw(n + 1)
        if (text === "forgot") {
            answIcon = [...answIcon, <ion-icon key = {n}class='wrong-icon' name='close-circle' ></ion-icon>]
            setIconName('close-circle');
            setCssStyle('wrong');
            setIconCss('wrong-icon');
            setAnswIcon(answIcon);
        } else if (text === "almost-forgot") {
            answIcon = [...answIcon, <ion-icon key = {n} class='almost-icon' name='help-circle' ></ion-icon>]
            setIconName('help-circle');
            setCssStyle('almost');
            setIconCss('almost-icon');
            setAnswIcon(answIcon);
        } else if (text === "remembered") {
            answIcon = [...answIcon, <ion-icon key = {n} class='right-icon' name='checkmark-circle' ></ion-icon>]
            setIconName('checkmark-circle');
            setCssStyle('right');
            setIconCss('right-icon');
            setAnswIcon(answIcon);
        }
    }

    function RenderFrontOrBackCard({ iconName, cssStyle, iconCss }) {
        return visible === true ? (
            <div className="front" onClick={() => { setVisible(false) }}>
                <p className={cssStyle}>Pergunta {index + 1}</p>
                <ion-icon class={iconCss} name={iconName} ></ion-icon>
            </div >
        ) :
            <div className={classQuestionCss}>
                <p>{question}</p>
                <ion-icon name="swap-horizontal-outline" onClick={() => { setRenderAnswer(true); }}></ion-icon>
            </div>
    }

    function RenderAnswer() {
        const renderButton = buttons.map((button, index) => {
            return <RenderButton key={index + button.text} index={index} className={button.className} text={button.text} showFront={() => { showFront(button.className, numAnsw) }} />
        })
        return renderAnswer === true ? (
            <section>
                <p>{answer}</p>
                <section className="buttons">
                    {renderButton}
                </section>
            </section>
        ) :
            <></>
    }

    return (
        <section className={classCss} >
            <RenderFrontOrBackCard cssStyle={cssStyle} iconName={iconName} iconCss={iconCss} />
            <RenderAnswer />
        </section>
    )
}

const buttons = [
    { className: "forgot", text: "Não lembrei" },
    { className: "almost-forgot", text: "Quase não lembrei" },
    { className: "remembered", text: "Zap!" }
]


export default RenderCard;