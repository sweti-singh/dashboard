import React from "react";
import "../css/appContent.css";
import { useContext } from "react";
import { AppContext } from "../Context/context";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import sidebarData from "../DummyData/sidebar.json";
import { Divider } from "@chakra-ui/react";
import widgetData from "../DummyData/widget.json";

const AppContent = () => {
  const { sidebarOpen, setSidebarOpen, stackId } = useContext(AppContext);
  const id = window.location.pathname.split("/");

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const handleOpeningSidebar = () => {
    return (
      <div className="sidebar-icon" onClick={handleToggle}>
        {sidebarOpen ? (
          <MdKeyboardDoubleArrowLeft size={"2.5rem"} />
        ) : (
          <MdKeyboardDoubleArrowRight size={"2.5rem"} />
        )}
      </div>
    );
  };
  return (
    <div className="app-content-flex1">
      {handleOpeningSidebar()}
      <div className="app-content-heading">
        <FiAlertTriangle color="yellow" size={"2rem"} />
        <p>Sample Stack</p>
      </div>
      <Divider
        orientation="vertical"
        borderColor={"red"}
        height={"3rem"}
        border={"1px solid"}
        color='grey'
      />
      <div className="app-content-stackid-individual">
        <p>{`Stack Id : ${stackId?.innerId ?? ""}${stackId?.outerId ?? ""}`}</p>
      </div>
      <div className="app-content-forecast">
        {widgetData.map((city) => {
          return(
            <>
            {city.id == id[2] ? (
            <div className="app-content-forecast-flex">
              <div className="app-content-stackid">
                <p>FORECAST</p>
                <p>{city.forecast}</p>
              </div>
              <div className="app-content-stackid">
                <p>FORECAST</p>
                <p>{city.percentage}</p>
              </div>
            </div>
          ) : null}
            </>
          )
          
        })}
      </div>
    </div>
  );
};

export default AppContent;
