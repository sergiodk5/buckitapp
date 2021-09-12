import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
    faHome,
    faTachometerAlt,
    faTruck,
    faShoppingCart,
    faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ show }) => {
    return (
        <div
            className={`d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar ${
                show ? "active" : ""
            }`}
        >
            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <FontAwesomeIcon icon={faApple} size="2x" className="me-2" />
                <span className="fs-4">Sidebar</span>
            </div>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        <FontAwesomeIcon icon={faHome} className="me-2" />
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon
                            icon={faTachometerAlt}
                            className="me-2"
                        />
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faTruck} className="me-2" />
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon
                            icon={faShoppingCart}
                            className="me-2"
                        />
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        <FontAwesomeIcon icon={faUserCircle} className="me-2" />
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt=""
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                    />
                    <strong>mdo</strong>
                </a>
                <ul
                    className="dropdown-menu dropdown-menu-dark text-small shadow"
                    aria-labelledby="dropdownUser1"
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
