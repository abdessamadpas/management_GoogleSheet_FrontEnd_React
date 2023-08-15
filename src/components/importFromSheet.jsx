import React, { useState } from 'react';
import '../App.css';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import exclamation from '../assets/images/exclamation.png';

function ImportFromSheet() {
  const [openPopupId, setOpenPopupId] = useState(null);
  const [data, setData] = useState([]);
  const [sheetId, setSheetId] = useState('');

  const handleOpenPopup = (id) => {
      setOpenPopupId(id === openPopupId ? null : id);
  };

  const createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Success message', 'Operation Successful');
        break;
      case 'error':
        NotificationManager.error('Error message', 'Operation Failed', 5000);
        break;
      default:
        break;
    }
  };

  const handleValiderClick = async () => {
  if (!sheetId) {
    createNotification('info');
    return;
  }
  
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/googlesheets/${sheetId}`);
    
    setData(prevData => [...prevData, response.data]);
    setSheetId('');
    createNotification('success',200);
  } catch (error) {
    // Axios puts the response inside the error in case of HTTP errors
    if (error.response) {
      console.error("There was a response error:", error.response.data);
    } else if (error.request) {
      console.error("The request was made but no response was received");
    } else {
      console.error("Error setting up the request", error.message);
    }
    createNotification('error');
  }
};
    return (
      <div className="center-container">
     
            
              <div className="search-bar">
                <h1> Enter ur sheet id</h1>
                <div className='section1'>
                   <input type="text" id="search-bar"  placeholder="Enter Sheet ID" 
                      value={sheetId} 
                      onChange={(e) => setSheetId(e.target.value)}  />
                  
                  <div class="tooltip-container">
                    <img src={exclamation}  />
                    <span class="tooltip">https://docs.google.com/spreadsheets/d/SheetID/edit#gid=0</span>
                  </div>
                </div>
                 
<button className='button' onClick={handleValiderClick}>Valider</button>
              </div>
  
        
             
          <NotificationContainer/>
          </div>
      

  )
  }  
export default ImportFromSheet;
