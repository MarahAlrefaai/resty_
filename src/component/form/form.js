import React,{ useState } from "react";
import "./form.scss";

function Form(props) {
  //-----------------------------------------
 const [url , setUrl]=useState(); 
 const [method , setMethod]=useState("Get");
 const [body, setBody] = useState(null);

 const handleURL = (event) => {
   //to save the url in each time i change it 
    event.preventDefault();
    setUrl(event.target.value);

  } 
  const handleSubmit = event => {
    //to save the data come from the form  in each time i change it 
    event.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: null
    };
    if (body) 
    {formData.body = body;}
    props.handleApiCall(formData);//send the data to this function to use it in axios 
  }
 const handleMethod = (event) => {
    event.preventDefault();
    setMethod(event.target.id);
  }
  const handleBody = (event) => {
    event.preventDefault();
    setBody(event.target.value);
  }
  
  
  //-----------------------------------------
    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <div >
                <input onChange={handleURL} className="input" type="text" name="url" placeholder="http://api.url.here"  />
               
                <button type="submit"  onClick={!props.isloading ? props.handleClick : null}  > {method}  </button>
            </div>
            <div className="methods">
                <button onClick={handleMethod} className="method" id="GET" name ="GET" >GET</button>
                <button onClick={handleMethod} className="method" id="POST" name = "POST" >POST</button>
                <button onClick={handleMethod} className="method" id="PUT" name = "PUT" >PUT</button>
                <button onClick={handleMethod} className="method" id="DELETE" name = "DELETE" >DELETE</button>

            </div>
            <textarea name="body" onChange={handleBody} id="textdata"defaultValue="{}"/>
        </form>)
}
export default Form;