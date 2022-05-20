import React from 'react';
import './result.scss'
import PrettyJson from 'react-json-pretty';
export default function Result (props) {

   if(!props.loading){
       return (
          <div id='review' > <div > <h5>{props.Method} <b>{props.url}</b></h5> </div><div >
               <PrettyJson className='headerStyle' data={props.header}/>                 
               <PrettyJson data={props.data}/>
              
              </div>
          </div>
      )
  } else {
      return (
         <div id='review'> <h5>{props.Method}</h5> <b>{props.url}</b> <h5>Loading....</h5></div>
        
      )
  }  
  }