import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo.png";

function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        <a className="navbar-brand">
          <img src={Logo} alt="" width="40px" height="40px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/#home" className="nav-link active">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="/#menu" className="nav-link active">
                Product
              </a>
            </li>

            <li className="nav-item">
              <a href="/#about" className="nav-link active">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
