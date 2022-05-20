import React  from "react";
import "./form.scss";
function Form(props) {  
 
    
    return ( 
        <form className="form" onSubmit={props.handleSubmit}>
            <div >
                <input className="input" type="text" name="url" placeholder="http://api.url.here"  />
               
                <button type="submit"  > Go!  </button>
            </div>
            <div className="methods">
                <button className="method" id="method" name ="method" >GET</button>
                <button  className="method" id="method" name = "method" >POST</button>
                <button  className="method" id="method" name = "method" >PUT</button>
                <button  className="method" id="method" name = "method" >DELETE</button>

            </div>
            <textarea name="body"  id="textdata"defaultValue="{}"/>
        </form>)
}
export default Form;