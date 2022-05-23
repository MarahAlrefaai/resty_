import superagent from "superagent";
import { useState } from "react";
import JSONPretty from "react-json-pretty";


function History(props) {
  const [historyState, setHistoryState] = useState({});



  const handleHistory = async (e) => {
    e.preventDefault();
    let arr = e.target.innerText.split(' ');
    let method = arr[0];
    let url = arr[1];
    let body = {}
    props.historyState.history.forEach(element => {
      
      body = element.method === method && element.url === url ? element.body : null;

    });
    console.log(props.historyState.history)
    let response = await superagent[method.toLowerCase()](url, (body) ? (body) : null);
    setHistoryState
      ({
        Header: response.headers,
        body: response.body,
      });

  }

  if (props.historyState.history.length> 0) {

    return (
      <div>
        <ul>
          {
            props.historyState.history.map((item, index) => {
              return (
                <li key={index + "new"} onClick={handleHistory}>
                  <span key={index} > {item.method} {item.url}</span>
                </li>)
            })

          }
        </ul>
        <div>
          {historyState ? <JSONPretty data={historyState} /> : null}

        </div>
      </div>

    )
  } else { }
}
export default History;


