import React, { useState } from "react";
import withTitleBar from "../Hocs/withTitleBar";
import Sidebar from "./Sidebar";
import "../css/details.css";
import { AppContext } from "../Context/context";
import MappingGraphContent from "./MappingGraphContent";

const DetailsPage = () => {
  const [stackId, setStackId] = useState({
    innerId: "101",
    outerId: "1001",
    tabId: "1239",
  });
  const [dataValue, setDataValue] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <AppContext.Provider
      value={{
        stackId,
        setStackId,
        sidebarOpen,
        setSidebarOpen,
        dataValue,
        setDataValue,
      }}
    >
      <div className="details-page">
        <Sidebar />
        <MappingGraphContent />
      </div>
    </AppContext.Provider>
  );
};
export default withTitleBar(DetailsPage);
