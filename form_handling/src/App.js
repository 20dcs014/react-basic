
import './App.css';
import {useState} from 'react';

function App() {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("")
  let handleSubmit=(event)=>{
      event.preventDefault();
      console.log(uname,password);
  }
  // let getUname =(event)=>{
  //   setUname(event.target.value);
  // }
  return (
    <div className ="App">
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
              <form onSubmit={handleSubmit}>
                <div className='text-start my-3'>
                  <label>UserName</label>
                  <input type="text" onChange={(event)=>setUname(event.target.value)} className='form-control' name={uname}/>
                </div>
                <div className='text-start my-3'>
                  <label>Password</label>
                  <input type="text"  onChange={(event)=>setPassword(event.target.value)} className='form-control' name ={password}/>
                </div>
                <div className='text-start my-3'>
                  <button>LogIn</button>
                 </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
