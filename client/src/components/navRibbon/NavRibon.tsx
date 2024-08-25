import "./navRibbon.scss";
import { NavLink, useMatch } from "react-router-dom";

interface Props {
  titles: { id: number; title: string; link: string }[];
  direction?: "row" | "column";
}

const NavRibbon = ({ titles, direction }: Props) => {
  return (
    <div>
      <div className={`navigation-ribbon ${direction}`}>
        {titles.map((t) => (
          <NavLink
            key={t.id}
            end
            className={`nav-box ${useMatch(t.link) ? "active" : ""}`}
            to={t.link}
          >
            {t.title}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavRibbon;
