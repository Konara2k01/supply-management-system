import { Link, NavLink, useMatch } from "react-router-dom";
import "./menu.scss";
import { menu } from "./data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <NavLink
              className={`listItem ${useMatch(listItem.url) ? "active" : ""}`}
              to={listItem.url}
              key={listItem.id}
            >
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
