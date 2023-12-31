import React, { useState } from 'react';
import axios from 'axios';
import close from '../assets/images/remove.png';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { Element } from 'react-scroll';
import 'react-notifications/lib/notifications.css';
import './PopUpAdd.css';
import PropTypes from 'prop-types';
function PopUpAdd({ togglePopup } ) {

  
  PopUpAdd.propTypes = {
    togglePopup: PropTypes.func.isRequired,
    person: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
 };
 PopUpAdd.defaultProps = {
    togglePopup: () => console.warn('togglePopup function is not provided!'),
 };
   const createNotification = (type, message, title = 'Notification', duration = 5000, callback = null) => {
    switch (type) {
      case 'success':
        NotificationManager.success(message, title);
        break;
      case 'error':
        NotificationManager.error(message, title, duration, callback);
        break;
        case 'warning':
          NotificationManager.warning(message, title, duration, callback);
          break;
        case 'info':
          NotificationManager.info(message, title, duration);
          break;
      default:
        break;
    }
  };
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: null, // Set initial value to null
    gender: '',
    implementationZone: '',
    title: '',
    localeState: '',
    educationLevel: '',
    degreeSpecialty: '',
    currentStatus: '',
    currentLegalStatus: '',
    projectDescription: '',
    projectState: '',
    hasReceivedFunding: '',
    currentHR: null, // Set initial value to null
    projectedHR: null, // Set initial value to null
    region: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: ['id', 'age', 'currentHR', 'projectedHR'].includes(name) && value !== '' ? Number(value) : value
    }));
  };
  
  const handleSubmit = () => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== '' && value !== null);
  
    if (!allFieldsFilled) {
      createNotification('warning', 'You need to fill all data', 'Warning');
      return;
    }
    axios.post('http://localhost:8080/api/v1/googlesheets/persons', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log("Data added successfully:", response.data);
      createNotification('success', 'Data added successfully', 'Success');
      setTimeout(() => {
        if (typeof togglePopup === 'function') {
           togglePopup();
        } else {
           console.error('togglePopup is not a function');
        }
     }, 1000);
      

    })
    .catch(error => {
      console.error("Error:", error);
      if (error.response && error.response.data) {
        console.error("Error response data:", error.response.data);
        createNotification('warning', error.response.data.message || 'You need to fill all data', 'Warning', 5000, () => {
          alert('callback');
        });
      } else {
        createNotification('error', 'Unknown error occurred', 'Error');
      }
    });
   

  };
  
 
  return (
    <div className="popup">
      <div className='popupHeader'>
        <h1>Add</h1>
        <button className="closePopup" onClick={togglePopup}
        style={{ background: 'none', border: 'none' }} >
          <img src={close} alt="Close"  className="noBackground"/>
         
        </button>
      </div>
      <Element name="scroll-containerAdd" className="scroll-containerAdd">

      <div className="popupContainer">
        {[
         { label: 'First Name', name: 'firstName' },
         { label: 'Last Name', name: 'lastName' },
         { label: 'Age', name: 'age' },
         { label: 'Gender', name: 'gender', type: 'select', options: ['', 'female', 'male'] },
         { label: 'Implementation Zone', name: 'implementationZone' },
         { label: 'Title', name: 'title' },
         { label: 'Locale State', name: 'localeState' },
         { label: 'Education Level', name: 'educationLevel' },
         { label: 'Degree Specialty', name: 'degreeSpecialty' },
         { label: 'Current Status', name: 'currentStatus' },
         { label: 'Current Legal Status', name: 'currentLegalStatus' },
         { label: 'Project Description', name: 'projectDescription' },
         { label: 'Project State', name: 'projectState' },
         { label: 'Has Received Funding', name: 'hasReceivedFunding', type: 'select', options: ['', 'true', 'false'] },
         { label: 'Current HR', name: 'currentHR' },
         { label: 'Projected HR', name: 'projectedHR' },
         { label: 'Region', name: 'region' }
        ].map(field => (
          field.type !== 'select' ? 
              <div className='inputContainer' key={field.name}>
                  <label className="label">{field.label}</label>
                  <input 
                      className='inputCustom' 
                      name={field.name} 
                      value={formData[field.name]} 
                      onChange={handleInputChange} 
                  />
              </div>
          :
              <div className='inputContainer' key={field.name}>
                  <label className="label">{field.label}</label>
                  <select 
                      className='selectCustom' 
                      name={field.name} 
                      value={formData[field.name]} 
                      onChange={handleInputChange}
                  >
                      {field.options.map(option => <option key={option} value={option}>{option}</option>)}
                  </select>
              </div>
      ))}
        <div className='submit'>
          <button className='submitBtn' onClick={handleSubmit}>Add</button>
        </div>
      </div>
      <NotificationContainer/>
      </Element>
      
   
    </div>
  )
}

export default PopUpAdd;
