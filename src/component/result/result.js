import React from 'react';
import './result.scss'
export default function Result (props) {

   
       return (
          <div id='review' > <h5> <b>{props.data.url}</b></h5>
           <div >                              
               <p>{props.data.body}</p> 

              </div>
          </div>
      )
    
  }