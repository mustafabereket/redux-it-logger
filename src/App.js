import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize";
import Logs from "./components/logs/Logs";
import "./App.css";
import { AppSearchBar } from "./components/layout/AppSearchBar";
import { AddButton } from "./components/layout/AddButton";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/logs/techs/AddTechModal";
import TechListModal from "./components/logs/techs/TechListModal";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <AppSearchBar />
      <div className="container">
        <AddButton />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
