import React, { useState } from 'react';
import '../components/EditPopUp.css';
import { Element } from 'react-scroll';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
    import PropTypes from 'prop-types';

    function EditPopup({togglePopup,   person, onClose }) {
        const [updatedPerson, setUpdatedPerson] = useState(person);
        EditPopup.propTypes = {
            togglePopup: PropTypes.func.isRequired,
            person: PropTypes.object.isRequired,
            onClose: PropTypes.func.isRequired,
         };
         EditPopup.defaultProps = {
            togglePopup: () => console.warn('togglePopup function is not provided!'),
         };
                  
        const handleInputChange = (e) => {
            setUpdatedPerson({
                ...updatedPerson,
                [e.target.name]: e.target.value
            });
        };
        
     
    
        const handleSubmit = async () => {
            
            try {
                
                await axios.put(`http://localhost:8080/api/v1/googlesheets/persons/${updatedPerson.id}`, updatedPerson);
                
                createNotification('success', 'Data saved successfully', 'Success');
                setTimeout(() => {
                    onClose(true);
                    if (typeof togglePopup === 'function') {
                       togglePopup();
                    } else {
                       console.error('togglePopup is not a function');
                    }
                 }, 1000);

            } 
                catch (error) {
                    console.error("Error updating person details:", error);
                    createNotification('error', 'Unknown error occurred', 'Error');
                }
                
            
        };
    
    const createNotification = (type, message, title = 'Notification', duration = 5000, callback = null) => {
        switch (type) {
          case 'success':
            NotificationManager.success(message, title, duration);
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
    return (
        <div className="popupEdit-container">
            <div className="popupEdit-content">
                <h2>Edit Person Details {person.id} :</h2>
                
                <Element name="scroll-container" className="scroll-container">
    <div>
        <label>First Name: </label>
        <input name="firstName" value={updatedPerson.firstName} onChange={handleInputChange} />
    </div>
    <div>
        <label>Last Name: </label>
        <input name="lastName" value={updatedPerson.lastName} onChange={handleInputChange} />
    </div>
    <div>
        <label>Gender: </label>
        <select name="gender" value={updatedPerson.gender} onChange={handleInputChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div>
        <label>Age: </label>
        <input type="number" name="age" value={updatedPerson.age} onChange={handleInputChange} />
    </div>
    <div>
        <label>Title: </label>
        <input name="title" value={updatedPerson.title} onChange={handleInputChange} />
    </div>
    <div>
        <label>Current Legal Status: </label>
        <input name="currentLegalStatus" value={updatedPerson.currentLegalStatus} onChange={handleInputChange} />
    </div>
    <div>
        <label>Current Status: </label>
        <input name="currentStatus" value={updatedPerson.currentStatus} onChange={handleInputChange} />
    </div>
    <div>
        <label>Degree Specialty: </label>
        <input name="degreeSpecialty" value={updatedPerson.degreeSpecialty} onChange={handleInputChange} />
    </div>
    <div>
        <label>Education Level: </label>
        <input name="educationLevel" value={updatedPerson.educationLevel} onChange={handleInputChange} />
    </div>
    
<div>
    <label>Implementation Zone: </label>
    <input name="implementationZone" value={updatedPerson.implementationZone} onChange={handleInputChange} />
</div>
<div>
    <label>Locale State: </label>
    <input name="localeState" value={updatedPerson.localeState} onChange={handleInputChange} />
</div>
<div>
    <label>Project Description: </label>
    <input name="projectDescription" value={updatedPerson.projectDescription} onChange={handleInputChange} />
</div>
<div>
    <label>Project State: </label>
    <input name="projectState" value={updatedPerson.projectState} onChange={handleInputChange} />
</div>

    <div>
    <label>Received Funding: </label>

    <div className="radio-group">
        <div className="radio-container">
            <input 
                type="radio" 
                id="fundingTrue"
                name="hasReceivedFunding" 
                value="true"
                checked={updatedPerson.hasReceivedFunding === true}
                onChange={e => setUpdatedPerson(prev => ({ ...prev, hasReceivedFunding: e.target.value === "true" }))}
                />
            <label htmlFor="fundingTrue">True</label>
        </div>

        <div className="radio-container">
            <input 
                type="radio" 
                id="fundingFalse"
                name="hasReceivedFunding" 
                value="false"
                checked={updatedPerson.hasReceivedFunding === false}
                onChange={e => setUpdatedPerson(prev => ({ ...prev, hasReceivedFunding: e.target.value === "true" }))}
                />
            <label htmlFor="fundingFalse">False</label>
        </div>
    </div>
</div>
<div>
    <label>Projected HR: </label>
    <input name="projectedHR" value={updatedPerson.projectedHR} onChange={handleInputChange} />
</div>
<div>
    <label>Current HR: </label>
    <input name="currentHR" value={updatedPerson.currentHR} onChange={handleInputChange} />
</div>
<div>
    <label>Region: </label>
    <input name="region" value={updatedPerson.region} onChange={handleInputChange} />
</div>


</Element>

            <button onClick={handleSubmit}>Save Changes</button>
            <button onClick={() => onClose(false)}>Cancel</button>
            <NotificationContainer/>
        </div>
           
           
        </div>
    );
}

export default EditPopup;
