import React from 'react';
import '../App.css';
import { Element } from 'react-scroll';

function PopupOpen({ person, onClose }) {
    
    if (!person) return null;
    
    return (
        <div className="popupOpen-container">
            <div className="popupOpen-content">
                <h2>Person Details {person.id} :</h2>
                
                {/* Wrap your content inside the Element component for scrolling */}
                <Element name="scroll-containerOpen" className="scroll-containerOpen">
                
       <div>First Name: {person.firstName} </div>
       <div>Last Name: {person.lastName}</div>
       <div>Gender: {person.gender}</div>
       <div>Age: {person.age}</div>
       <div>Title: {person.title}</div>
       <div>Current Legal Status: {person.currentLegalStatus}</div>
       <div>Current Status: {person.currentStatus}</div>
       <div>Degree Specialty: {person.degreeSpecialty}</div>
       <div>Education Level: {person.educationLevel}</div>
       <div>Received Funding: {person.hasReceivedFunding ? 'Yes' : 'No'}</div>
       <div>Implementation Zone: {person.implementationZone}</div>
       <div>Locale State: {person.localeState}</div>
       <div>Project Description: {person.projectDescription}</div>
       <div>Project State: {person.projectState}</div>
       <div>Projected HR: {person.projectedHR}</div>
       <div>Current HR: {person.currentHR}</div>
       <div>Region: {person.region}</div>
      
                </Element>
                
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopupOpen;
