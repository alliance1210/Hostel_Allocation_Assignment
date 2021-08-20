import React,{useState, useEffect} from 'react'
import '../App.css'
import Hostel from './Hostel'

 function Welcome() {
     const [name, setName]=useState('');
     const handle=() => {
         localStorage.setItem('Name', name);
         setName('newName')
     }
     const remove = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Gender');
        localStorage.removeItem('HostNo');
        setName('Name')
        
     };
     
     useEffect(() => {
         localStorage.getItem("Name");
       }, [localStorage.getItem("Name")]);
       if(localStorage.getItem("HostNo")!==null){
           return(
               <div className="welcome-center">
                   <h1>Welcome, {localStorage.getItem('Name')}</h1>
                   <p>Hello {localStorage.getItem("Name")},  </p>
                   <p>Your Room is {localStorage.getItem("HostNo")} </p>
                   <button onClick={remove}>Reset {console.log(localStorage.getItem("HostNo"))}</button>
               </div>
           )
       }
    return (
        <div className="welcome-center">
           { localStorage.getItem("Name") === null?<>Enter Username: <input placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)}
             required/>
            <button onClick={handle}>Done</button>
            </>:<><h1>Welcome, {localStorage.getItem('Name')}</h1><p><Hostel/></p> <button onClick={remove}>Reset</button></>
            }
        </div>
    )
}
export default Welcome