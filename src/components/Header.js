import { NavLink } from 'react-router-dom';
import { UilTimes } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';

const Header = (props) => {

    const handlerChangeShowMenu = (ev) => {
        ev.preventDefault();
        props.handlerShowMenu();
    };

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <p className={props.showName ? "nav__name" : "hidden"}>The Solar System</p>

                    <div className={props.showMenu ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list">
                            <li className="nav__planet">
                                <NavLink className="nav__link" to="/solar-system/sun">Sun</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link" >Mercury</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Venus</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Earth</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Mars</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Jupiter</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Saturn</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Uranus</NavLink>
                            </li>
                            <li className="nav__planet">
                                <NavLink className="nav__link">Neptune</NavLink>
                            </li>
                        </ul>
                        <UilTimes className="nav__close" onClick={handlerChangeShowMenu}/>
                    </div>
                    <div className={props.showName ? "nav__toggle" : "hidden"} onClick={handlerChangeShowMenu}>
                        <UilBars/>
                    </div>
                </nav>
            </header>
        </>
    );
}


export default Header;