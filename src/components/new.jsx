import React,{useState} from 'react'
import '../App.css';
import PopUpAdd from './popUpAdd';

function New() {
 
    const [openPopupId, setOpenPopupId] = useState(null);


    const handleOpenPopup = (id) => {
      setOpenPopupId(id === openPopupId ? null : id);
    };
    const data = [
        {
            id: "1",
            name: "John Doe",
            username: "johndoe",
            lastName: "Doe",
            email: "john@example.com",
            phone: "123-456-7890",
            website: "www.johndoe.com",
            company: "Doe Enterprises",
            address: "123 Main St, Cityville",
        },
        {
            id: "2",
            name: "Jane Smith",
            username: "janesmith",
            lastName: "Smith",
            email: "jane@example.com",
            phone: "987-654-3210",
            website: "www.janesmith.com",
            company: "Smith Co.",
            address: "456 Elm Rd, Townsville",
        },
      
        {
            id: "4",
            name: "Emily Williams",
            username: "emilywilliams",
            lastName: "Williams",
            email: "emily@example.com",
            phone: "111-222-3333",
            website: "www.emilywilliams.com",
            company: "Williams Corp.",
            address: "567 Pine St, Hamletville",
        },
        {
            id: "5",
            name: "David Brown",
            username: "davidbrown",
            lastName: "Brown",
            email: "david@example.com",
            phone: "999-888-7777",
            website: "www.davidbrown.com",
            company: "Brown Industries",
            address: "789 Maple Ave, Countryside",
        },
        {
            id: "6",
            name: "Olivia Davis",
            username: "oliviadavis",
            lastName: "Davis",
            email: "olivia@example.com",
            phone: "444-555-6666",
            website: "www.oliviadavis.com",
            company: "Davis Co.",
            address: "123 Cedar Rd, Suburbia",
        },
    ];
 
    
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };   

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };
  
 return (
    <div  className="content-section">

<div className='table-header'>
            <div className="content-section-title">table data</div>
            <div className='header-left'>
                <button className="addBtn" onClick={togglePopup}>
                    Add
                </button>
                <div className="dropdown-container">
                    <button className="addBtn" onClick={toggleDropdown}>
                        Export
                    </button>
                    {isDropdownVisible && (
                        <div className="dropdown-content">
                            <a href="#">Pdf</a>
                            <a href="#">Word</a>
                            <a href="#">Excel</a>
                        </div>
                    )}
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            {isPopupVisible && (
              <PopUpAdd togglePopup = {togglePopup} />
            )}
        </div>
  


    <ul>
   {data.map((element)=>
   
    <li key={element.id} className="adobe-product">
      <div className="products">
      {element.name} 
      </div>
      <div className="products">
      {element.username} 
      </div>
      <div className="products">
      {element.username} 
      </div>
      <div className="products">
      {element.username} 
      </div>
      <div className="products">
      {element.username} 
      </div>
      <div className="products">
      {element.username} 
      </div>
      <div className="products">
      wewe 
      </div>
      <span className="status">
       <span className="status-circle green"></span>
       Updated</span>
      <div className="button-wrapper">
       <button className="content-button status-button open">Open</button>
      <div className="menu">
        <button className="dropdown" onClick={()=>handleOpenPopup(element.id)}>
        {element.id === openPopupId && (
          <ul>
            <li><a href="#">Go to Discover</a></li>
            <li><a href="#">Update</a></li>
          </ul>
        )}
        </button>
       </div>
      </div>
     </li> 
   )}  
</ul>
  
</div>

    
  )
}

export default New