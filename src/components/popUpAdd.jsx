import React , {useState} from 'react'

import close from '../assets/images/remove.png'
function PopUpAdd({     togglePopup}) {

  return (
    <div className="popup">
    <div className='popupHeader'>        <h1>Popup title</h1>

       <button className="closePopup" onClick={togglePopup}>
        <img src={close} />
    </button>
    </div>
   

    <div className="popupContainer">
      <div className='firstSection'>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
      </div>
      <div className='firstSection'>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
      </div>
      <div className='firstSection'>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
      </div>
      <div className='firstSection'>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>
        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
      </div>
      <div className='firstSection'>
    <div className='inputConatiner'>
        <label>Label</label>
        <select className='selectCustom'>
            <option  value='option1'>Option 1</option>
            <option  value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
            {/* Add more options as needed */}
        </select>
    </div>

        
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
      </div>
      <div className='firstSection'>
        <div className='inputConatiner'><label>wewe</label>
        <input className='inputCustom'/>

        </div>
        
        <div className='inputConatiner'><label>Label</label>
        <input className='inputCustom'/>

        </div>
        
      </div>
      <div className='submit'>
        <button className='submitBtn'>Add</button>
        </div>
    </div>
   
</div>
  )
}

export default PopUpAdd