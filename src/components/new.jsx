import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import PopUpAdd from './popUpAdd';
import PopupOpen from './PopupOpen'; // import at the top of New.jsx
import EditPopup from './EditPopup';
import '../components/new.css';
import Visibility from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function New() {
    const [isOpenPopupVisible, setIsOpenPopupVisible] = useState(false);
    const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
    const [personToEdit, setPersonToEdit] = useState(null);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteCandidateId, setDeleteCandidateId] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedRows, setHighlightedRows] = useState([]);

    const handleEdit = (person) => {
        setPersonToEdit(person);
        setIsEditPopupVisible(true);
    };
    const fetchData = () => {
        axios.get(`http://localhost:8080/api/v1/googlesheets/persons`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const closeEditPopup = (refresh) => {
        setIsEditPopupVisible(false);
        if (refresh) {
            fetchData();  // Refresh data if edit was successful
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleOpenPopup = (id) => {
        fetchPersonDetails(id);
    };
  
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/googlesheets/persons/${id}`);
            // If delete was successful, show the archive confirmation popup
            setShowDeleteConfirmation(true);
            fetchData(); 
        } catch (error) {
            console.error("Error deleting person:", error);
        }
    };
    
    const fetchPersonDetails = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/googlesheets/persons/${id}`);
            setSelectedPerson(response.data);
            setIsOpenPopupVisible(true);  // Open the popup AFTER we have the data.
        } catch (error) {
            console.error("Error fetching person details:", error);
        }
    };
    const [ openPopupId, setOpenPopupId] = useState(null);
    const [selectedPerson, setSelectedPerson] = useState(null); // State for selected person
    const [data, setData] = useState([]);
   
    function renderActionButton(params) {
        return (
            <div className="action-icons-wrapper">
                <button 
                    className="action-button"
                    onClick={() => handleOpenPopup(params.row.id)}
                >
                    <Visibility style={{ color: '#5c6bc0' }} />
                </button>
                <button 
                className="action-button"
                onClick={() => handleEdit(params.row)}
            >
                <EditIcon style={{ color: '#9ccc65' }} />
            </button>
            <button 
            className="action-button"
             onClick={() => {
        setDeleteCandidateId(params.row.id);
        handleDelete(params.row.id);
    }}
>
    <DeleteIcon style={{ color: '#ef5350' }} />
</button>
            </div>
        );
    }
    
    

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => setIsPopupVisible(!isPopupVisible);
    const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/googlesheets/persons`)
            .then(response => {
                setData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if(query) {
            const matchedRows = data.filter(row => 
                Object.values(row).some(value => 
                    String(value).toLowerCase().includes(query.toLowerCase())
                )
            ).map(row => row.id);
            setHighlightedRows(matchedRows);
        } else {
            setHighlightedRows([]);
        }
    };
    const [showUpdatePopupword, setShowUpdatePopupword] = useState(false);
    const [showUpdatePopupPpt, setShowUpdatePopupPpt] = useState(false);
    const [showUpdatePopupDocs, setShowUpdatePopupDocs] = useState(false);
    const [showUpdatePopupSlide, setShowUpdatePopupSlide] = useState(false);

    const updateword = async () => {
        try {
            axios.get(`http://localhost:8080/api/populateWordDocForAll`);
            setShowUpdatePopupword(true);
        } catch (error) {
            console.error("Error updating Google Doc:", error);
        }
    };
    const updateppt = async () => {
        try {
            axios.get(`http://localhost:8080/api/populatePptForAll`);
            setShowUpdatePopupPpt(true);
        } catch (error) {
            console.error("Error updating Google Doc:", error);
        }
    };
    const updateGoogleDocs = async () => {
        try {
            axios.get(`http://localhost:8080/api/updateGoogleDoc/AllDocuments`);
            setShowUpdatePopupDocs(true);
        } catch (error) {
            console.error("Error updating Google Doc:", error);
        }
    };
    const updateGoogleSlide = async () => {
        try {
            axios.get(`http://localhost:8080/api/UpdateGoogleSlide/AllPresentation`);
            setShowUpdatePopupSlide(true);
        } catch (error) {
            console.error("Error updating Google Doc:", error);
        }
    };
    return (
        <div className="content-section">
            <div className='table-header'>
                <div className="content-section-title"> Data Person</div>
                <div className='header-left'>
                    <button className="addBtn" onClick={togglePopup}>Add</button>
                    <div className="dropdown-container">
                        <button className="addBtn" onClick={toggleDropdown}>Export</button>
                        {isDropdownVisible && (
                            <div className="dropdown-content">
                         <button className="link-like-button" onClick={updateGoogleDocs}>Google Docs</button>

                         <button className="link-like-button" onClick={updateGoogleSlide}>Google Slide</button>

                         <button className="link-like-button" onClick={updateword}>Word</button>

                         <button className="link-like-button" onClick={updateppt}>powerpoint</button>

                            </div>
                        )}
                    </div>
                    <div className="search-bar">
            <input 
                type="text" 
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange} 
            />
        </div>
                </div>
                {isPopupVisible && (
    <PopUpAdd 
        togglePopup={() => {
            togglePopup();
            fetchData(); // Fetch data after adding a new person.
        }} 
    />
)}
{
    showUpdatePopupword && (
        <div className="update-popup">
            <p>All documents in your device</p>
            <button onClick={() => setShowUpdatePopupword(false)}>Close</button>
        </div>
    )
}
{
    showUpdatePopupPpt && (
        <div className="update-popup">
            <p>All ppt slide in your device</p>
            <button onClick={() => setShowUpdatePopupPpt(false)}>Close</button>
        </div>
    )
}
{
    showUpdatePopupDocs&& (
        <div className="update-popup">
            <p>All  document in your drive      
          <a href="https://drive.google.com/drive/folders/1nULvtk_AvRaTu0lFZlVk6L0G-jAGS-Xr" target="_blank" rel="noopener noreferrer">https://drive.google.com/drive/folders/1nULvtk_AvRaTu0lFZlVk6L0G-jAGS-Xr</a>
</p>
            <button onClick={() => setShowUpdatePopupDocs(false)}>Close</button>
        </div>
    )
}{
    showUpdatePopupSlide && (
        <div className="update-popup">
            <p>All  slide in your drive  
            <a href="https://drive.google.com/drive/folders/1SBEIko84GyPLRZO_9oFsAkruTC7r9kGS" target="_blank" rel="noopener noreferrer">https://drive.google.com/drive/folders/1nULvtk_AvRaTu0lFZlVk6L0G-jAGS-Xr</a>

            </p>
            <button onClick={() => setShowUpdatePopupSlide(false)}>Close</button>
        </div>
    )
}
            </div>

            <div  style={{ height: 400, width: '96%',padding: '20px' }}>
                <h2>Data <b>Details</b></h2>
                <TableContainer component={Paper}>
                
               
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <DataGrid 
                    rows={data}
                    columns={[
                        { field: 'id', headerName: 'ID', width: 70 },
                        { field: 'lastName', headerName: 'NOM', width: 130 },
                        { field: 'firstName', headerName: 'PRENOM', width: 130 },
                        { field: 'gender', headerName: 'GENRE', width: 90 },
                        { field: 'title', headerName: 'TITRE', width: 130 },
                        { field: 'localeState', headerName: 'ETAT DU LOCALE', width: 170 },
                        { field: 'projectState', headerName: 'PROJECT STATE', width: 130 },
                        { field: 'age', headerName: 'AGE', width: 70 },
                       
                        { field: 'actions', headerName: 'Actions', width: 200, renderCell: renderActionButton, sortable: false, filterable: false },
                    ]}
                    getRowClassName={(params) => {
                        return highlightedRows.includes(params.id) ? "highlighted-row" : "";
                    }}
                    pageSize={5}
                    checkboxSelection
                />
                </Table>
                    </TableContainer>

            </div>
            {
                isEditPopupVisible && (
                    <EditPopup 
                        person={personToEdit} 
                        onClose={(refresh) => {
                            closeEditPopup(refresh); 
                            if (refresh) fetchData(); // Fetch data if edit was successful.
                        }} 
                    />
                )
            }
  
  {
    isOpenPopupVisible && (
        <PopupOpen 
        togglePopup={togglePopup} 
        person={selectedPerson} 
        onClose={() => setIsOpenPopupVisible(false)} 
    />
    )
}
{
    showDeleteConfirmation && (
        <div className="delete-confirmation-popup">
            <p>Do you want to archive this person?</p>
            <button 
                style={{ backgroundColor: 'green' }} 
                onClick={() => {
                    console.log("Person archived");  // Implement archival logic here if needed
                    setShowDeleteConfirmation(false);
                    setDeleteCandidateId(null);
                }}
            >
                Yes
            </button>
            <button 
                style={{ backgroundColor: 'red' }} 
                onClick={() => {
                    setShowDeleteConfirmation(false);
                    setDeleteCandidateId(null);
                }}
            >
                No
            </button>
        </div>
    )
}


        </div>
    );
}

export default New;