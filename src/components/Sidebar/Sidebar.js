import React from "react";
// style
import "./sidebar.scss";
import { Link } from "react-router-dom";
// sidebar data
import { sidebarData } from "../../Data/data";

const Sidebar = ({ extraWidth, sidebar }) => {
  return (
    <>
      <section className={`${sidebar ? "nav-menu active" : "nav-menu"} ${extraWidth && 'extra_width'}`}>
        <div className="main_sidebar">
          <div className="list_items">
            <ul>
              {sidebarData.map((item) => {
                const { icon, path, title, cName, active } = item;
                return (
                  <>
                    <li key={title} className={active}>
                      <Link to={path}>
                        <span className={cName}>{icon}</span>
                        {title}
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
