import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a className="secondary-content">
        <i className="material-icons">delete</i>
      </a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
