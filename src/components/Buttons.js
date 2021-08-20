import React, {useState} from 'react'


 function Buttons(props) {
     const [roomNo,setRoomNo] = useState(props.name);
     const [floorNo, setFloorNo] = useState('');
     const handle =()=>{
         setRoomNo(props.name);
         localStorage.setItem("HostNo", roomNo);
         console.log(localStorage.getItem("HostNo"))
         setRoomNo("testing");
     }
     const click1 = ()=>{
        setFloorNo("1");
        localStorage.setItem("Floor", floorNo)
        
     }

    return (
        <div>
           {localStorage.getItem("HostNo") ===null? <button id={props.id} onClick={handle}>{roomNo}</button>:<><h1>Please select Floor</h1>
           <button onClick={click1}>1</button>
           <button>2</button>
           <button>3</button>
           <button>4</button>
           <button>5</button>
           <button>6</button>
           <button>7</button>
           <button>8</button>
           <button>9</button>
           <button>10</button>
           <button>11</button>

           </>
            }
        </div>
    )
}
export default Buttons