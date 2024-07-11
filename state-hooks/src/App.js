
import './App.css';
import {useState} from 'react';

function App() {

// let[menuStatus,setMenuStatus] = useState(false);
let[modalStatus, setModalStatus] = useState(false)
  return(
    
    <div className= 'App'>
      <button className='en' onClick ={()=>setModalStatus(!modalStatus)}>Enquiry Now</button>
      <div className={`modalOverLay ${modalStatus ?'modalShow' :''}`}>  </div>
        <div className={`modalDiv ${modalStatus ?'divShow' :''}`}>
          <h1>Enquiry Now<span onClick ={()=>setModalStatus(!modalStatus)}>&times;</span></h1>
      
      </div>







      {/* **********************logIn*************************** */}
       {/* <h1>Hello</h1>
       <button className ='micon' onClick ={()=>setMenuStatus(!menuStatus)}>
        {
          menuStatus?
            <span> &times;</span>
            :
            <span> &#9776;</span>
        }
       </button>

          <div className= {`menu ${menuStatus ?' activeMenu' : ''}`}>
          <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Contact</li>
          </ul>
        </div> */}



  </div>
  
  );
  // ---------------------------show/hide----------------------------------------------------
  // let [pStatus, setpStatus] = useState(false)
  // return (
  //   <div className="App">
  //     <input type = {pStatus ? 'text' :'password'}/>
  //      <button onClick = {()=>setpStatus(!pStatus)}>{pStatus ? 'hide' :'show'} </button>
  //   </div>
  // );
}

export default App;
