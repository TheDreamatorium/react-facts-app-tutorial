import navLogo from '../../src/images/logo192.png'

export default function NavBar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={navLogo} alt="logo"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
