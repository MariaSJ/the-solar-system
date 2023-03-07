import { NavLink } from 'react-router-dom';
import { UilTimes } from '@iconscout/react-unicons';
import { UilBars } from '@iconscout/react-unicons';
import '../styles/core/reset.scss';
import '../styles/core/variables.scss';
import '../styles/components/header.scss';

const Header = (props) => {

    return (
        <>
            <header className="header">
                <nav className="nav">
                    <p className="nav__name">The Solar System</p>

                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__planet">
                                <NavLink className="nav__link">Sun</NavLink>
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
                                <NavLink className="nav__link">Marts</NavLink>
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
                        <UilTimes className="nav__close"/>
                    </div>
                    <div className="nav__toggle">
                        <UilBars/>
                    </div>
                </nav>
            </header>
        </>
    );
}


export default Header;