const Project = ({ Name, Url, Image }) => {
    return (
        <div>
            <a href={Url} target="_blank">
                <div className="project">
                    <div className="project-title">
                        <h2>{Name}</h2>
                    </div>
                    <div className="project-image">
                        <img src={Image} alt={Name} />
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Project;