import React from 'react'
import '../App.css';
import logo  from '../assets/images/import.png';

function UploadFromDevice() {
    const handleImportClick = () => {
        const fileInput = document.getElementById('file');
        if (fileInput) {
          fileInput.click(); // Clicking the hidden input element
        }
      };
      
  return (
    <div className="import-section">
    <div className='import-container'>
      <p >Import from my device ur sheet</p>
      <img className='logo' src={logo} alt='we'/>
      <div >
        <button  className="custom-content-button" onClick={handleImportClick}>Import</button>
        <input type="file" id="file" className="inputfile" hidden  accept='.csv'/>  
      </div>
    

    </div>
  </div>
  )
}

export default UploadFromDevice