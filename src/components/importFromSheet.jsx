import React, { useState } from 'react';
import './importsheet.css';
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

  const handleValiderClick = async () => {
    // Check if sheetId is empty
    if (!sheetId) {
      createNotification('info');
      return;
    }
    
    // Log the sheetId for debugging
    console.log("Sheet ID:", sheetId);
  
    try {
      // Send GET request to your backend with the sheetId
      const response = await axios.get(`http://localhost:8080/api/v1/googlesheets/${sheetId}`);
      
      // If successful, update the data state with the new data
      setData(prevData => [...prevData, response.data]);
      
      // Clear the sheetId state (and consequently the input field)
      setSheetId('');
      
      // Display a success notification
      createNotification('success');  // Corrected this line
    } catch (error) {
      // Log errors for debugging and user information
      if (error.response) {
        console.error("There was a response error:", error.response.data);
      } else if (error.request) {
        console.error("The request was made but no response was received");
      } else {
        console.error("Error setting up the request", error.message);
      }
      
      // Display an error notification
      createNotification('error');
    }
  };
  const createNotification = (type) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'success':
        NotificationManager.success('Importation avec succès');  // Adjusted the message to your desired text
        break;
      case 'error':
        NotificationManager.error('Error message', 'Operation Failed', 5000);
        break;
      default:
        break;
    }
  };
  
  
    return (
      <div className="center-container">
     
            
              <div className="search-bar">
                <h1> Enter ur sheet id</h1>
                <div className='section1'>
                   <input type="text" placeholder="Enter Sheet ID" 
                      value={sheetId} 
                      onChange={(e) => setSheetId(e.target.value)}  />
                  
                  <div class="tooltip-container">
                    <img src={exclamation}  />
                    
                    <span class="tooltip">
                    <p>
                    Comment trouver votre Sheet ID ?</p>
                <p>1-Ouvrez votre Google Sheet.</p>    
                <p>2-Dans l'URL, repérez la partie après "/d/" et avant "/edit" - c'est votre Sheet ID.</p>      
                <p> 3-Copiez ce code et collez-le ci-dessous:</p>     
                    
                      https://docs.google.com/spreadsheets/d/<span class="green">SheetID</span>/edit#gid=0</span>
                  </div>

                </div>
                 
<button className='button' onClick={handleValiderClick}>Valider</button>
              </div>
    <NotificationContainer/>
        
             
        
          </div>
      

  )
  }  
export default ImportFromSheet;