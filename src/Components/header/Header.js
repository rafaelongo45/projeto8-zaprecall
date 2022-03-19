function Header({ text, src }) {
    return (
        <header>
            <img src={src} alt="logo"></img>
            <h1>{text}</h1>
        </header>
    )
}

export default Header;