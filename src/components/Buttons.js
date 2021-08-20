import React from 'react'

 function Buttons(props) {
     
    return (
        <div>
            <button id={props.id} avail={props.avail}>{props.name}</button>
        </div>
    )
}
export default Buttons