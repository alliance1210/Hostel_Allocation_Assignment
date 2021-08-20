import React,{useState} from 'react'
import { facebookProvider, googleProvider } from '../config/authMethod'
import socialMediaAuth from '../service/auth';
import Welcome from './Welcome';
import '../App.css'

 function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    
    const handleOnClick= async(provider) => {
              

        const res = await socialMediaAuth(provider);
        
        setLoggedIn(true);
    }
    return (
        <div>
           { !loggedIn? <div className="login-center">
            <h2>Hostel Allocation</h2>
             <p>Please Sign-in</p>
           <button className="login-btn" onClick={()=>{handleOnClick(googleProvider)}}>Google</button><br/>
           <button  className="login-btn" onClick={()=>handleOnClick(facebookProvider)}>Facebook</button></div> : <Welcome />
            
            }
        </div>
    )
}
export default Login