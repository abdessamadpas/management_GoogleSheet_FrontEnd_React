import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sheel from './pages/sheel';
import UploadFromDevice from './components/uploadFromDevice';
import ImportFromSheet from './components/importFromSheet';
import ChooseType from './components/chooseType';
import Nav from './components/nav';
import New from './components/new';
import Header from './components/header';

function App() {
  const [selectedStep, setSelectedStep] = useState('chooseType');
 
    return (
    <div className="app">
       <Router> <Header/>
    <div className="wrapper">
    
     <Nav/>

     <div className="main-container">
      <div className="content-wrapper">
    
          <Routes>
              <Route path="/" element={<ChooseType />}  />
              <Route path="/ChooseType/ImportFromSheet" element={<ImportFromSheet />} />
              <Route path="/ChooseType/UploadFromDevice" element={<UploadFromDevice />} />
              <Route path="/new" element={<New />} />
          </Routes>
       
      </div>
     </div>
    </div> </Router>
   </div>
  );
}

export default App;
