import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <h1 className="logo">MOHAMMED</h1>
        </div>

        <div className="nav-list">
          <ul>
            <li>HOME</li>
            <li>ABOUT ME</li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>EXPERIENCE</li>
          </ul>
        </div>

        <button className="btn contact-btn">CONTACT</button>
      </nav>
    </div>
  );
}
export default Navbar;
