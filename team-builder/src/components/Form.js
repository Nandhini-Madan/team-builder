import React, { useState } from 'react';

const Form = props => {
    const [name, setName] = useState("");
    const [email, SetEmail] = useState("");
    const [job, Setjob] = useState("");
    const handleName = event => setName(event.target.value);
    const handleEmail = event => SetEmail(event.target.value);
    const handleJob = event => Setjob(event.target.value);
    const handlesubmit = event => {
        event.preventDefault();
       if(name&&email&&job){
        props.SetTeamList([...props.teamList, { name, email, job }]);
        resetlabel();
       }
    };
    console.log("namw",name,email,job);
    console.log("team",props.teamList);
    
    const resetlabel=()=>{
        setName("");
        SetEmail("");
        Setjob("");
    }
    return (
        <div className="App">
            <form onSubmit={handlesubmit}>
                <label>Name:</label>
                <input
                    onChange={handleName}
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name" >
                </input>
                <label>Email</label>
                <input
                    onChange={handleEmail}
                    type="text"
                    name="Email"
                    value={email}
                    placeholder="Email" >
                </input>
                <label>Job</label>
                <input
                    onChange={handleJob}
                    type="text"
                    name="Job"
                    value={job} 
                    placeholder="Job"
                    >
                </input>
                <button type="submit">Add Note</button>
            </form>

        </div>
    );
};
export default Form;