import React, { useState } from 'react'

const Employee = (props) => {

    const [name,setName] = useState('');

    const handleChange = (e)=>{
       setName(e.target.value)
        console.log(name)
    }

    return (
        <div>
            <p>
                Employee component
           </p>
            <p> Emplyee Name: {name}</p>
            <input type='text' name='firstName' value={name} onChange={handleChange}></input>

        </div>

    )
}

export default Employee