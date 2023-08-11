import React,{useState} from 'react'
import '../App.css';
function ImportFromSheet() {
    const [openPopupId, setOpenPopupId] = useState(null);

  
    const handleOpenPopup = (id) => {
      setOpenPopupId(id === openPopupId ? null : id);
    };
    const data = [
        // {
        //   "id": 1,
        //   "name": "Leanne Graham",
        //   "username": "Bret",
        //   "email":""
        // },
        // {
        //   "id": 2,
        //   "name": "Ervin Howell",
        //   "username": "Antonette",
        //   "email":""
        // },
        
        // {
        //   "id":3,
        //   "name": "Ervin Howell",
        //   "username": "Antonette",
        //   "email":""
        // },
      ]
  return (

    <div  className="content-section">
       <div className={ data.length != 0 ? 'table-header' : "table-header-null"}>
        {data.length != 0 ?     <div className="content-section-title">table data</div>  : null}
        <div className="search-bar">
          <input type="text" id="search-bar" placeholder="Search"/>
        </div>
      </div> 
    {data &&   <ul>  
  
    { data.map((element) =>
   
    <li key={element.id} className="adobe-product">
      <div className="products">
        <img className="profile-img" src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
        wewe 
      </div>
      <div className="products">
       wewe 
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
  
</ul>  }
   
  
   </div>

    )
}

export default ImportFromSheet