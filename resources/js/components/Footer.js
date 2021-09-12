import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faApple,
    faFacebookF,
    faInstagram,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="p-3 my-4 border-top">
            <div className="container-fluid">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        >
                            <FontAwesomeIcon icon={faApple} size="2x" />
                        </a>
                        <span className="text-muted">© 2021 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="#">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
