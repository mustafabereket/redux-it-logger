import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techItems, setTechItems] = useState([]);

  const getTechItems = async () => {
    let technicians = await fetch("/techs");
    technicians = await technicians.json();
    console.log(technicians);
    setTechItems(technicians);
  };

  useEffect(() => {
    getTechItems();
  }, []);

  return (
    <div className="modal" id="tech-list-modal">
      <div className="modal-content">
        <ul className="collection">
          {techItems.map((tech, index) => (
            <TechItem key={index} tech={tech} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
