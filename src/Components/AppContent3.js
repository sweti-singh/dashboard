import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { Divider } from '@chakra-ui/react';
import "../css/appContent.css"

const AppContent3 = () => {
  return (
    <div className='app-content-flex3'>
      <p>Forecast Horizon</p>
      <p>Latest Issue</p>
      <FaAngleDown size={'2rem'} color='white' />
      <RiInformationLine size={'2rem'} color='teal' />
      <Divider
        orientation="vertical"
        height={"3rem"}
        border={"1px solid"}
        color='grey'
      />
    </div>
  )
}

export default AppContent3
