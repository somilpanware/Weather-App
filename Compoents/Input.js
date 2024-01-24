
"use client"

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Place from './Place';




const Input = () => {
  
  const[our,Setdeta]=useState()
  const [city,Setcity]=useState([])
  const [display,Setdisplay]=useState([])
  const[wind,Setwind]=useState()
  const[cloud,Setcloud]=useState()
  const[humidit,Sethumidit]=useState()
  
  
  const [temp_c,Settempc]=useState([]);
  async function weather(){
    const result= await axios.get(`https://api.weatherapi.com/v1/current.json?key=1c13ba108bbc4ad2a64141311231311&q=${city}&aqi=no`);
    
  
    const tempe=result.data.current.temp_c;
    const wind=result.data.current.wind_kph
    const Cloudy=result.data.current.condition.text;
    const humadity=result.data.current.humidity;
    Settempc(tempe+" °C ");
    Sethumidit(humadity);
    Setwind(wind);
    Setcloud(Cloudy);
     console.log(result.data.current);
    
     
     
    }
    
  
    return (
      <>
      { <Place temp={temp_c} city={display}/>}
      <div className='main-box'>
      
      
      
        
    <div className='right-box'>
    
       <input  
       type='text'
       value={city}
       className='input-box'
       placeholder='Enter city'
       onChange={(e) => {
        Setcity(e.target.value)
        }}
        
        />
         
        
        
        
       <button onClick={()=>{
        {<Place check ={true}/>}
        Setdisplay(city);
        // detail();
         weather();
        }
       }
          className='btn'>
        FIND
       </button>
     
</div>

       
       <div className='detail-box'>

        <h3>Wind</h3>
        <h3>Cloud</h3>
        <h3>humidity</h3>
        <div className='ans'>
        <h3>{wind}</h3>
        <h3>{cloud}</h3>
        <h3>{humidit}</h3>

        </div>
        
       </div>
       



    


       <ToastContainer/>
   
    
    </div>
    </>
  )
}

export default Input
