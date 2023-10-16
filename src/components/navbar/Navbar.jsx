import "./navbar.scss";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
const Navbar = () => {

  
  return (
    <div className="navbar">
      {/* // & sidebar */}
      <div className="wrapper">
        <span>Super Duper Portfolio</span>
        <div className="social">
          <a href="">
            <img src={github} alt="github" />
          </a>
          <a href="">
            <img src={linkedin} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
