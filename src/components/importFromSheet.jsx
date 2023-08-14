import React, { useState } from 'react';
import '../App.css';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import { NotificationManager, NotificationContainer } from 'react-notifications';


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
    createNotification('success');
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
          <div className="center-box">
              {/* Sheet ID input and Valider button */}
              <div className="centered-box">
                  <input 
                      type="text" 
                      placeholder="Enter Sheet ID" 
                      value={sheetId} 
                      onChange={(e) => setSheetId(e.target.value)} 
                  />
                  <p>
                    you sheetID is : https://docs.google.com/spreadsheets/d/SheetID/edit#gid=0
                  </p>
                  <button className='button' onClick={handleValiderClick}>Valider</button>
              </div>
              {/* Search bar */}
              <div className="search-bar">
                  <input type="text" id="search-bar" placeholder="Search" />
              </div>
  
              {/* Table header */}
              <div className={data.length !== 0 ? 'table-header' : "table-header-null"}>
                  {data.length !== 0 ? <div className="content-section-title">table data</div> : null}
              </div>
  
              {/* Table content */}
              {data && <ul>
                  {data.map((element) =>
                      <li key={element.id} className="adobe-product">
                          {/* Your existing code to display each row... */}
                      </li>
                  )}
              </ul>}
          </div>
      
          <NotificationContainer/>
 </div>
  )
  }  
export default ImportFromSheet;
