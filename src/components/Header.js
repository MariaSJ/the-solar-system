import { NavLink } from 'react-router-dom';

const Header = (props) => {

    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <p className={props.showName ? "nav__name" : "hidden"}>The Solar System</p>

                    <div className={props.showMenu ? "nav__menu show-menu" : "nav__menu"}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <NavLink className="nav__link">Sun</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link" >Mercury</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Venus</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Earth</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Marts</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Jupiter</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Saturn</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Uranus</NavLink>
                            </li>
                            <li className="nav__item">
                                <NavLink className="nav__link">Neptune</NavLink>
                            </li>
                        </ul>

                    </div>
                    <div className="nav__toggle">
                    </div>
                </nav>
            </header>
        </>
    );
}


export default Header;