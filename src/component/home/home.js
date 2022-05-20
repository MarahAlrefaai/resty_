import React, { useState , useEffect}  from 'react'; // useeffect is to loading use state is to get the data 
import Form from '../form/form.js';
import Result from '../result/result.js';
import superagent from 'superagent';// to fetch Data from Api 


  export default function App (props) {  

    const [data, setData] = useState(null);
    const [header, setHeader] = useState({});
    const [isloading, setLoading] = useState(false);
    const [requestParams, setRequest] = useState({});
    
    //============================================
    const handleApiCall = async (requestParams) => {
      //requestParams ==> data that we take it from the form 
      setRequest(requestParams);
      // superagent must take method  in lowercase 
      const response = await superagent[requestParams.method.toLowerCase()](requestParams.url, (requestParams.body) ? (requestParams.body) : null);    
      setHeader( {
        headers: response.headers
      });
      setData({
        results: response.body
      });
    }
    //==================================
    const handleClick = () => setLoading(true);
    useEffect(() => {
        if (isloading) {
        loading().then(() => {
                setLoading(false);
            });}
    }, [isloading]);
//========================================
const loading = () => {return new Promise((resolve) => setTimeout(resolve, 1800));}
    return (
      <>
        <Form handleClick={handleClick} handleApiCall={handleApiCall}  />
     <Result loading={isloading}  data={data}  url={requestParams.url} header={header}  method={requestParams.method} />
      </>
    );
  }
