import React from "react";
import PropTypes from "prop-types";

const Breadcrumbs = (props) => (
  <nav className={`breadcrumb`} style={props.customStyles}>
    <ul className="breadcrumb-list">
      {props.breadcrumbs.map((breadcrumb, i) => (
        <li key={i} className="breadcrumb-item">
          <a
            href={breadcrumb.active ? "#" : breadcrumb.url}
            className={breadcrumb.active ? "active" : ""}
          >
            {breadcrumb.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;

Breadcrumbs.propTypes = {
  className: PropTypes.object,
  children: PropTypes.string,
};
