import { useEffect, useRef, useState } from "react";
import "./sideProfile.scss";
import { Link } from "react-router-dom";

const sideProfile = () => {
  const [active, setActive] = useState(false);

  //   useEffect(() => {
  //     let handler = (e: MouseEvent) => {
  //       if (!refOne.current?.contains(e.target as Node)) {
  //         setActive(false);
  //       }
  //     };
  //     document.addEventListener("click", handler);
  //   }, []);

  const refOne = useRef<HTMLDivElement | null>(null);
  const refTwo = useRef<HTMLSpanElement | null>(null);

  //   const handleOutsideClick = (e: MouseEvent) => {
  //     if (!refOne.current?.contains(e.target as Node)) {
  //       setActive(false);
  //     }
  //   };

  //   const handleClick = () => {
  //     setActive(!active);
  //   };

  return (
    <>
      <div className="sideProfile">
        <span className="main" ref={refTwo} onClick={() => setActive(!active)}>
          J
        </span>
        {active && (
          <div ref={refOne} className="menu">
            <Link to="/profile">
              <div className="title" onClick={() => setActive(false)}>
                <span className="secondary">J</span>
                <span className="username">Jane Conner</span>
              </div>
            </Link>
            <div className="body"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default sideProfile;
