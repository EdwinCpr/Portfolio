import { NavLink, useLocation } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
    const location = useLocation();
    const { pathname } = location;
    const toggleMenu = () => {
        const menu = document.querySelector(".nav-options")
        menu.classList.toggle("menu-active")
    };
    return (
        <div className="nav">
            <div className="nav-flex">
                <i className="fa-solid fa-bars menu" onClick={toggleMenu}></i>
            </div>
            <div className="nav-options menu-active">
                <div className="options-x">
                    <button><i className="fa-solid fa-xmark x" onClick={toggleMenu}></i></button>
                </div>
                <div className="options-flex">
                    <NavLink to="/" className={pathname == "/" ? "option-active" : "option"} onClick={toggleMenu}>Home</NavLink>
                    <NavLink to="/aboutme" className={pathname == "/aboutme" ? "option-active" : "option"} onClick={toggleMenu}>Sobre mi</NavLink>
                    <NavLink to="/skills" className={pathname == "/skills" ? "option-active" : "option"} onClick={toggleMenu}>Habilidades</NavLink>
                    <NavLink to="/projects" className={pathname == "/projects" ? "option-active" : "option"} onClick={toggleMenu}>Proyectos</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Nav;