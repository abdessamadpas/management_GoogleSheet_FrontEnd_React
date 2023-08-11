import React from 'react'
import {Link} from 'react-router-dom'
import logo1  from '../assets/images/1.png';
import logo2 from '../assets/images/2.png';

import '../App.css';

function ChooseType({ onImportClick, onUploadClick }) {
  return (
    <div className="content-wrapper-header">
        
    <div className='custom-header'> <h2 className="img-content">
    Choose what you need to export
    </h2>
        <div className='box-content'>
          <div className="content-wrapper-context">
         
        <img className="content-wrapper-img" src={logo1} alt=""/>     
         <Link to="/ChooseType/ImportFromSheet"> <button  className="content-button">Import from google cheet</button> </Link>
         </div>
         <div  className="content-wrapper-context">
         
         <img className="content-wrapper-img" src={logo2} alt=""/>     
         <Link to="/ChooseType/UploadFromDevice">   <button  className="content-button">Import from my device</button> </Link>
       </div> 
        </div>
             
    </div>
  </div>
  )
}

export default ChooseType