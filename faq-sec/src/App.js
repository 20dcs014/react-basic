import logo from './logo.svg';
import faq from './Faq';
import { useState } from 'react';
import { questions } from './data/ques';
import './App.css';

function App() {

  return(
    <faq/>
  )
  // let[showAns,setShowAns] = useState(questions[0].id)
  // return (
  //   <div className="App">
  //     <div>
  //       <h1>FAQ</h1>
  //       <div className='faqOuter'>

  //         {
  //         questions.map((faqItems,i)=>{
  //           return(
  //           <div className='faqItems'>
  //           <h2 onClick ={()=>setShowAns(faqItems.id)} >{faqItems.ques}</h2>
  //           <p className={showAns == faqItems.id ?'activeAns':''}>{faqItems.ans}</p>
  //         </div>
  //         )
  //     })}
          
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default App;
