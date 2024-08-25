import { Link } from "react-router-dom";
import "./navbar.scss";
import SideProfile from "../sideProfile/SideProfile";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">
          <img className="comapanyImg" src="/company.jpg" alt="" />
          <span>A Company</span>
        </div>
      </Link>
      <div className="icons">
        {/* <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div> */}
        <div className="user">
          {/* <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          /> */}
          <SideProfile />
        </div>
        <img id="settings" src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
