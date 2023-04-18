import React from "react";
import './css/Main.css';
import { handleSubmit, newUser } from '../fbhandles/handleSubmit';
import { useRef } from 'react';

const Header = () => {

    const dataRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        handleSubmit(dataRef.current.value)
        dataRef.current.value = "";
      }


      

    return (
        <div className="header">
            <div className="headerLeft">
              <h1>Runeterra Hub</h1>
                <p>A place to view your Legends of Runeterra
                    match history and stats.
                </p>  

                <form onSubmit={submitHandler}>
        <input type="text" ref={dataRef}/>
        <button type='submit'>Save</button>
      </form>
            </div>
            
        </div>
    )
}

export default Header;