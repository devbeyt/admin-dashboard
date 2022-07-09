import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { sidebarSelector } from "./sidebarSlice";


const Sidebar = () => {
  const links = useSelector(sidebarSelector.selectAll);
  const [active, setActive] = useState(false);
  const [logo, setLogo] = useState(false);
  const [title, setTitle] = useState(false);

  const activateNav = () => {
    setActive(!active);
    setLogo(!logo);
    setTitle(!title);
  };

  const renderedLinks = links.map((link) => {
    return (
      <li className="ul_Li">
        {link.icon}
        <Link to="/" className="Link">
          {link.name}
        </Link>
        {title ? <span className="link_title">{link.title}</span> : null}
      </li>
    );
  });

  return (
    <div className={active ? "sidebar" : "sidebar-mobile"}>
      <div className="menu-icon" onClick={activateNav}>
        {/* show & close icons.... */}
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="menu" />
        )}
      </div>

      {/* sidebar navigation */}
      <nav className="nav">
        <ul className={active ? "ul-item " : "ul-item oicon"}>
          {logo ? (
            <div className="top">
              <div className="top_content">
                <img
                  src="https://www.certificationplanner.com/images/male.svg"
                  className="avatar"
                />
                <span className="logo">Jhone Doe</span>
              </div>
            </div>
          ) : null}
          {renderedLinks}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
