import React, { useState } from "react";
import "../css/sidebar.css";
import {
  Box,
  Checkbox,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import sidebarData from "../DummyData/sidebar.json";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { AppContext } from "../Context/context";
import { useContext } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(0);
  const [isSelected, setIsSelected] = useState(0);
  const { sidebarOpen, setStackId } = useContext(AppContext);

  const handleButtonClick = (index) => {
    setClicked(index);
  };

  const handleHorizontalSectionSelected = (index, innerId, outerId, tabid) => {
    setIsSelected(index);
    setStackId({
      innerId: innerId.id_items,
      outerId: outerId.id,
      tabId: tabid.tab_id,
    });
  };

  const handleBottomDisplay = () => {
    return (
      <>
        {sidebarData.map((item, index) => {
          return clicked == index ? (
            <>
              <div className="heading">{item.heading}</div>
              <Tabs>
                <TabList className="tablist-container">
                  {item.tabs &&
                    item.tabs.map((tab) => {
                      return (
                        <Tab
                          className="tabs"
                          _selected={{
                            fontWeight: 700,
                            borderBottom: "2px solid #007aff",
                            color: "#99AABB",
                          }}
                        >{`${tab.name} (${tab.item_no})`}</Tab>
                      );
                    })}
                </TabList>

                <TabPanels>
                  {item.tabs &&
                    item.tabs.map((tab) => {
                      return (
                        <TabPanel className="tabpanels">
                          {tab.items &&
                            tab.items.map((insideTabs, index) => {
                              return (
                                <div
                                  className={`tabpanels-sections-global ${
                                    isSelected === index ? "clicked" : ""
                                  }`}
                                  onClick={() =>
                                    handleHorizontalSectionSelected(
                                      index,
                                      insideTabs,
                                      item,
                                      tab
                                    )
                                  }
                                >
                                  <div className="tabpanels-sections">
                                    <input type="checkbox" />
                                    <button>
                                      <FaArrowUp /> {insideTabs.button[0]}
                                    </button>
                                    <button>
                                      <FaArrowDown /> {insideTabs.button[1]}
                                    </button>
                                    <Spacer />
                                    <MdMarkEmailUnread
                                      color="aqua"
                                      size={"1.5rem"}
                                    />
                                  </div>
                                  <p>{insideTabs.subHeading}</p>
                                </div>
                              );
                            })}
                        </TabPanel>
                      );
                    })}
                </TabPanels>
              </Tabs>
            </>
          ) : null;
        })}
      </>
    );
  };

  return (
    <div className={sidebarOpen ? "sidebar active" : "sidebar inactive"}>
      <div className="icon">
        <FaArrowLeft
          color="white"
          size={"2.5rem"}
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      {/* {handleOpeningSidebar()} */}

      <div>
        <div className="button-icons-container">
          {Array(5)
            .fill("")
            .map((item, index) => (
              <button
                onClick={() => handleButtonClick(index)}
                className={`button ${clicked === index ? "clicked" : ""}`}
              ></button>
            ))}
        </div>
        {handleBottomDisplay(clicked)}
      </div>
    </div>
  );
};

export default Sidebar;
