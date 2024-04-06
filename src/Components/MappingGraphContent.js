import React from 'react'
import AppContent from './AppContent'
import "../css/mappingGraph.css"
import AppContent2 from './AppContent2'
import AppContent3 from './AppContent3'
import Graph from './Graph'
import Table from './Table'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AppContext } from '../Context/context'
import { useContext } from 'react'

const MappingGraphContent = () => {
  const { sidebarOpen, setSidebarOpen,stackId,setStackId } = useContext(AppContext);
  const handleClosingOfSidebar = () =>{
     setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className='mapping-graph-content'>
      <div className='up-down-button'>
      <FaArrowAltCircleLeft size={'4rem'} onClick={handleClosingOfSidebar} />
      </div>
      <AppContent/>
      <AppContent2/>
      <AppContent3/>
      <Graph/>
      <Table/>
    </div>
  )
}

export default MappingGraphContent
