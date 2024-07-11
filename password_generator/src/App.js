import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {LC, UC, SC,NC} from './data/passChar.jsx';

function App() {

  let[upperCase,setUpperCase] = useState(false)
  let[lowerCase,setLowerCase] = useState(false)
  let[number,setNumber] = useState(false)
  let[symbol, setSymbol] = useState(false)
  let[passLen, setpassLen]= useState(10)
  let[fPass, setPass] = useState('')

  let createPassword= ()=>{
    let charset =''
    let finalPass=''
    if(upperCase || lowerCase || number || symbol){
      if(upperCase) charset+=UC;
      if(lowerCase) charset+=LC;
      if(number)  charset+=NC;
      if(symbol) charset+=SC ;
      for(let i =0; i<passLen;i++){
        finalPass += charset.charAt(Math.floor(Math.random()* charset.length))
      }
      setPass(finalPass);
     }
    else{
      alert("Please check one checkbox..................")
    }
  }

  let copyPass =()=>{
    navigator.clipboard.writeText(fPass)
  }
  

  return (
    <>
    <div className="passwordBox">
      <h2>Password Generator</h2>

      <div className='passboxin'>
        <input type ='text' readOnly value={fPass} /><button onClick ={copyPass}>Copy</button>
      </div>

      <div classname ="passLength">
        <label>Password length</label>
        <input type ='number' value={passLen} min ={10} max ={15} onChange ={(e)=>setpassLen(e.target.value)}/>
      </div>

      <div className ="passLength">
        <label>Including Upper Case</label>
        <input type ='checkbox' checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
      </div>

      <div className ="passLength">
        <label>Including Lower Case</label>
        <input type ='checkbox' checked={lowerCase} onChange={()=>setLowerCase(!lowerCase)}/>
      </div>

      <div className ="passLength">
        <label>Including Numbers</label>
        <input type ='checkbox'checked={number} onChange={()=>setNumber(!number)} />
      </div>

      <div class ="passLength">
        <label>Including special symbol</label>
        <input type ='checkbox' checked={symbol} onChange={()=>setSymbol(!symbol)}/>
      </div>

      <button classname= 'btn' onClick={createPassword}>Generate Password</button>
      </div>
      </>
  );
}

export default App;
