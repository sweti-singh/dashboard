import React from 'react'
import TitleBar from '../Components/TitleBar'
import "../css/title.css"

const withTitleBar = (OriginalComponent) => {
  return (props)=>{
    return (
        <div className='page-layout'>
            <TitleBar/>
            <OriginalComponent {...props}/>
        </div>
      )
  } 
}

export default withTitleBar
