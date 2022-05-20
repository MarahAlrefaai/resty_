import React  from 'react'; // useeffect is to loading use state is to get the data 
import Form from '../form/form.js';
import Result from '../result/result.js';

  export default function App (props) {  

    
    let formData={
      method:null,
      url:null,
      body:null
    }
    //============================================
    const handleSubmit = (event) => {
      //to save the data come from the form  in each time i change it 
      event.preventDefault();
      
       formData.method= event.target.method.value;
       formData.url=event.target.url.value;
       formData.body=`{Name : "marah",age :26 ,major : "cs}`;
       console.log("home===> "+formData.url)
      console.log(formData.body)
      console.log(formData.method)
      }
    //==================================
    
    return (
      <>
        <Form  handleSubmit={handleSubmit}  />
     <Result   data={formData}   />
      </>
    );
  }
