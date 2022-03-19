function RenderButton({ className, text, showFront }) {
    return <button className={className} onClick={showFront}>{text}</button>
}

export default RenderButton;