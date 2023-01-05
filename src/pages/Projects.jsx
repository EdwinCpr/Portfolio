import "../styles/projects.css";
import CRUD from "../images/Crud.png"
import RickyMorty from "../images/Project.png"
import Project from "../components/Project";

const Projects = () => {
    return (
        <div className="container">
            <div className="projects">
                <div className="projects-title">
                    <h1>Proyectos</h1>
                </div>
                <div className="projects-list">
                    <Project Name={"Lista de tareas"} Url={"https://cruuddd.netlify.app/"} Image={CRUD}/>
                    <Project Name={"Rick y Morty"} Url={"https://rickproject.netlify.app/"} Image={RickyMorty}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;