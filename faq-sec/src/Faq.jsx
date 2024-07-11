import React from 'react'
import { useState } from 'react';
import { questions } from './data/ques';
import './App.css';

export default function Faq() {

    let[currId, setCurrId] = useState(questions[0].id)
    
    let items = questions.map((itemData, i)=>{
        let itemDetails ={
            itemData,
            currId,
            setCurrId
        }

        return(
        <faqItems itemDetails ={itemDetails} key ={i}/>
        )
    })
  return (
    <div>
         <h1>FAQ</h1>
         <div className='faqOuter'>
            <faqItems/>
         </div>
    </div>
  )
}

function FaqItems({itemDetails}){
    let{itemsData, currId,setCurrId} =itemDetails
  return(
    <div className='faqItems'>
    <h2 onClick={()=>setCurrId()}>{itemsData.ques}</h2>
    <p className={currId===itemDetails.itemData.id ? 'activeAns' : ''}> {itemDetails.itemData.ans}</p>
</div>
  )  
}