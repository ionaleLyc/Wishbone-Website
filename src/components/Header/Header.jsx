import logo from '../../assets/logos/logo.png'
import './Header.css'

function Header() {
    return (
        <header className="header">

            <div className="burger-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>

            <div className="header-logo">
                <img className="header-logo-image" src={logo} alt="Логотип" />
            </div>

            <div className="header-control">

                <ul className="header-control-list">
                    <li className="header-control-list-item"> <a href="/"> Projects </a> </li>
                    <li className="header-control-list-item"> <a href="/"> About </a> </li>
                    <li className="header-control-list-item"> <a href="/"> News </a> </li>
                    <li className="header-control-list-item"> <a href="/"> Team </a> </li>
                    <li className="header-control-list-item"> <a href="/"> Contact </a> </li>
                </ul>

                <div className="header-control-button">
                    <a href="/" > Get Template </a>
                </div>
            </div>


            <div className='burger-menu'>
                <ul className="header-control-list burger">
                    <li className="header-control-list-item"> <a href="/"> Projects </a> </li>
                    <li className="header-control-list-item"> <a href="/"> About </a> </li>
                    <li className="header-control-list-item"> <a href="/"> News </a> </li>
                    <li className="header-control-list-item"> <a href="/"> Team </a> </li>
                    <li className="header-control-list-item"> <a href="/"> Contact </a> </li>
                </ul>
            </div>

        </header>
    );
}

export default Header;