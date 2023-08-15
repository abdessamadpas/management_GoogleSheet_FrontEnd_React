import React from 'react';
import axios from 'axios';
import '../App.css';
import logo from '../assets/images/import.png';
import { NotificationManager, NotificationContainer } from 'react-notifications';

import 'react-notifications/lib/notifications.css';
function UploadFromDevice() {
  const createNotification = (type, message, title = 'Notification', duration = 5000, callback = null) => {
    switch (type) {
      case 'success':
        NotificationManager.success(message, title);
        break;
      case 'error':
        NotificationManager.error(message, title, duration, callback);
        break;
      default:
        break;
    }
  };
    const handleImportClick = () => {
        const fileInput = document.getElementById('file');
        if (fileInput) {
            fileInput.click(); // Clicking the hidden input element
        }
    };

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          const formData = new FormData();
          formData.append('file', file);
          axios.post('http://localhost:8080/api/excel/import', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          }).then(response => {
              createNotification('success', 'File uploaded successfully!', 'Success');
          }).catch(error => {
              console.error('Error uploading file:', error);
              createNotification('error', 'Error uploading file. Please try again!', 'Error');
          });
      }
  }
  

    return (
        <div className="import-section">
            <div className='import-container'>
                <p>Import from my device your excel </p>
                <img className='logo' src={logo} alt='we' />
                <div>
                    <button className="custom-content-button" onClick={handleImportClick}>Import</button>
                    <input type="file" id="file" className="inputfile" hidden accept='.xlsx' onChange={handleFileChange} />
                </div>
            </div>
            <NotificationContainer />
        </div>
    )
}

export default UploadFromDevice;
