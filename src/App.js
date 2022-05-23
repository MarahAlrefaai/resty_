import './App.scss';
import React from 'react'

import Header from './component/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//to move between pages using routes
/////////////////////////////////////////////
//pages
import History from '../src/component/history/history.js';
import Help from './component/help/help.js';
import Home from '../src/component/home/home.js';
import Footer from '../src/component/footer/footer.js';
import {useReducer} from 'react' //to save all data globaly 
import historyReducer , {addAction} from '../src/reducer/Reducer.js' // to call the reducerHook

const initialState = {
  history: [],
}
export default function App() {

   

    const [state, dispatch] = useReducer(historyReducer, initialState);
    console.log(state);
    const newHistory = (action) => {
      dispatch(addAction(action));
    } 
  return (
   <>
 <BrowserRouter>
        <Header />
        <Routes>
         
        <Route path="/" element={<Home  newHistory={newHistory} />} />
        <Route path="/history" element={<History historyState = {state} />} />
        <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
     <Footer />
   </>
  );}

