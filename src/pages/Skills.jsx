import "../styles/skills.css";
import Git from "../images/git.webp";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JavaScript from "../images/javascript.png";
import React from "../images/react.png";
import ReactRouterDOM from "../images/react-router.png";
import Redux from "../images/redux.png";
import TailwindCSS from "../images/tailwind.png";
import Node from "../images/node.webp";
import Postgres from "../images/postgres.webp";
import Express from "../images/express.webp";
// import Sequelize from "../images/sequelize.png";
import LogoTecnique from "../components/LogoTecnique";


const Skills = () => {
    return (
        <div className="container">
            <div className="skills" data-aos="fade-right">
                <div className="skills-title">
                    <h1>Habilidades</h1>
                </div>
                <div className="skills-techniques">
                    <div className="techniques-title">
                        <h2>Tecnicas</h2>
                    </div>
                    <div className="techniques-list">
                        <div className="list-grid">
                            <LogoTecnique Name={"Git"} Image={Git} />
                            <LogoTecnique Name={"HTML"} Image={HTML} />
                            <LogoTecnique Name={"CSS"} Image={CSS} />
                            <LogoTecnique Name={"JavaScript"} Image={JavaScript} />
                            <LogoTecnique Name={"React"} Image={React} />
                            <LogoTecnique Name={"React-Router"} Image={ReactRouterDOM} />
                            <LogoTecnique Name={"Redux toolkit"} Image={Redux} />
                            <LogoTecnique Name={"TailwindCSS"} Image={TailwindCSS} />
                            <LogoTecnique Name={"NodeJs"} Image={Node} />
                            <LogoTecnique Name={"PostgreSQL"} Image={Postgres} />
                            <LogoTecnique Name={"Express"} Image={Express} />
                            {/* <LogoTecnique Name={"Sequelize"} Image={Sequelize} /> */}
                        </div>
                    </div>
                </div>
                <div className="skills-soft">
                    <div className="soft-title">
                        <h2>Blandas</h2>
                    </div>
                    <div className="soft-list">
                        <p>🌟Adaptabilidad</p>
                        <p>🌟Aprendizaje rápido</p>
                        <p>🌟Trabajo en equipo</p>
                        <p>🌟Autoevaluación</p>
                        <p>🌟Resolución de problemas</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;