import logo from '../../assets/logos/logo.png'
import './Header.css'
import { useState } from 'react';

function Header() {

    const [displayBurger, setDisplayBurger] = useState('-50%');
    const [dropShadow, setDropShadow] = useState('0');

    function controlMenu() {
        if (displayBurger === '-50%') {
            setDisplayBurger('0');
            setDropShadow('100%');
        } else if (displayBurger === '0') {
            setDisplayBurger('-50%');
            setDropShadow('0');
        }
    }

    return (
        <header className="header">

            <div className="burger-icon" onClick={controlMenu}>
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


            <div className='burger-menu' style={{ left: displayBurger }}>

                <div className="burger-menu-logo">
                    <img className="burger-menu-logo-image" src={logo} alt="Логотип" />
                </div>

                <div className='burger-menu-close' onClick={controlMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                </div>

                <ul className="burger-menu-list">
                    <li className="burger-menu-list-item"> <a href="/"> Projects </a> </li>
                    <li className="burger-menu-list-item"> <a href="/"> About </a> </li>
                    <li className="burger-menu-list-item"> <a href="/"> News </a> </li>
                    <li className="burger-menu-list-item"> <a href="/"> Team </a> </li>
                    <li className="burger-menu-list-item"> <a href="/"> Contact </a> </li>
                </ul>

                <div className='burger-menu-button-container'>
                    <div className="burger-menu-button">
                        <a href="/" > Get Template </a>
                    </div>
                </div>

            </div>

            <div className='burger-bck-shadow' style={{ width: dropShadow }}>

            </div>

        </header>
    );
}

export default Header;