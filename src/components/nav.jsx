import React from 'react'
import '../App.css';
 import { Link } from 'react-router-dom';
import excelLogo from '../assets/images/excel.png'
import googlesheet from '../assets/images/googlesheets.png'

function Nav() {
  return (
    <div className="left-side">
      <div className="side-wrapper">
       <div className="side-title">Apps</div>
       <div className="side-menu">
       <Link to="/"> 
        <a > 
          <svg viewBox="0 0 512 512">
            <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
            </g>
            <path xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" fill="currentColor" data-original="#82b1ff" />
            <path xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0" fill="currentColor" data-original="#bfc9d1" />
          </svg>
          All Apps
          </a> 
        </Link>
        <Link to="/new">   <a href="#">
         <svg viewBox="0 0 488.932 488.932" fill="currentColor">
          <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
         </svg>
         Person Table
        </a>
        </Link>
      
       <div className="side-menu">
       
       <Link to="/ChooseType/UploadFromDevice">  
       <a href="#"> 
    <img src={excelLogo} alt="Excel" width="25" height="25" style={{ marginRight: '10px' }}/>
         Excel
         </a>
         </Link>
         <Link to="/ChooseType/ImportFromSheet"><a href="#">
        <img src={googlesheet} alt="Googlesheet" width="25" height="25"  style={{ marginRight: '10px' }}/>
         Google sheet
        
        </a>
        </Link>
        
       
       
       </div>
      </div>
      </div>
     </div>
  )
}

export default Nav