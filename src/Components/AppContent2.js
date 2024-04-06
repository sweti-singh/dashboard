import React from 'react'
import "../css/appContent.css";
import { Divider,Switch } from '@chakra-ui/react';
import { FaRegFilePowerpoint } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const AppContent2 = () => {
  return (
    <div className="app-content-flex2">
        <FaRegFilePowerpoint size={'2rem'} color='grey' />
        <p>SPECIAL REQUIREMENTS</p>
        <Switch id='email-alerts' width={'3rem'} colorScheme='teal' />
        <p>INCLUDE</p>
      <Divider
        orientation="vertical"
        border={"1px solid"}
        color='grey'
      />
      <FaAngleDown size={'2rem'} color='white' />
    </div>
  )
}

export default AppContent2
