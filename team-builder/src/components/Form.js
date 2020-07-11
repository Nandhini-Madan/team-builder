import React, { useState } from 'react';

const Form =props=>{
    const [name, setName]=useState("");
    const [email,SetEmail]=useState("");
    const[job,Setjob]=useState("");
    const handleName= event =>setName(event.target.value);
    const handlesubmit=event=>
    props.SetTeamList([...props.SetTeamList,{name}]);
    console.log("set",props.SetTeamList);
    return(
        <div>
            <form onSubmit={handlesubmit}>

            <input 
                onChange={handleName}
                type="text"
                name="name"
                value={name} >
                </input>
            </form>

        </div>
    );
};
export default Form;