import React, {useState} from 'react'
import Buttons from './Buttons'
import '../App.css'
function Hostel() {
    const [gender, setGender] = useState(0)

    const handleClick1=() => {
        setGender(1)
        localStorage.setItem('Gender', gender);
        
     
        
    }
    const handleClick2=() => {
        setGender(2)
        localStorage.setItem('Gender', gender);
        
        
    }
if(gender===0){
    return (
        <div>
            <h2>Choose your Hostel</h2>
            <div className="Hostel-buttons" ><button id="girls"onClick={handleClick1}>Girls</button><button id="boys" onClick={handleClick2}>Boys</button></div>
            
        </div>
    )
}
else if(gender === 1){
   


    return(
        <div>
            <container>
                <Buttons id="1"  name="G1"/>
                <Buttons id="2" name="G2"/>
                <Buttons id="3"  name="G3"/>
                <Buttons id="4"  name="G4"/>
                <Buttons id="5"  name="G5"/>
                <Buttons id="6"  name="G6"/>

            </container>

        </div>
    )
}
else if(gender === 2){
    return(
        <div>
            <container>
            <Buttons id="1"  name="B1"/>
            <Buttons id="2"  name="B2"/>
            <Buttons id="3"  name="B3"/>
            <Buttons id="4"  name="B4"/>
            <Buttons id="5"  name="B5"/>
            <Buttons id="6"  name="B6"/>

            </container>

        </div>
    )
}
}

export default Hostel