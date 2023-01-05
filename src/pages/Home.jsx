import "../styles/home.css";
import MyPhoto from "../images/download.png";

const Home = () => {
    return (
        <div className="container">
            <div className="home" data-aos="fade-right">
                <div className="home-image">
                    <img src={MyPhoto} alt="my-photo" />
                </div>
                <div className="home-info">
                    <div className="info-name">
                        <h1>Edwin Echeverria</h1>
                    </div>
                    <div className="info-cv">
                        <button><a href="" download>Descargar CV</a></button>
                    </div>
                    <div className="info-contacts">
                        <div className="contacts-flex">
                            <div className="contacts-circle">
                                <a href="https://www.facebook.com/codernettt" target="_blank"><i className="fa-brands fa-facebook-f icon-contact"></i></a>
                            </div>
                            <div className="contacts-circle">
                                <a href="https://api.whatsapp.com/send?phone=04242874025" target="_blank"><i className="fa-brands fa-whatsapp icon-contact"></i></a>
                            </div>
                            <div className="contacts-circle">
                                <a href="https://www.linkedin.com/in/edwin-echeverria-9862b41b9/" target="_blank"><i className="fa-brands fa-linkedin-in icon-contact"></i></a>
                            </div>
                            <div className="contacts-circle">
                                <a href="mailto:edwindanielnow@gmail.com" target="_blank"><i class="fa-regular fa-envelope icon-contact"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;