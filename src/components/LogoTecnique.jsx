const LogoTecnique = ({ Name, Image }) => {
    return (
        <div>
            <div className="list-logo">
                <p>{Name}</p>
                <img src={Image} alt="logo-tecnique" />
            </div>
        </div>
    );
};

export default LogoTecnique;