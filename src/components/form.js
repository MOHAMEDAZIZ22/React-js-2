import React, {useState} from "react";
function Forms(){
const [username, setuserName] = useState('');
const [password, setuserPassword] = useState('');

const userHandler = (event)=>{
    console.log(event.target.value);
    setuserName(event.target.value)
    
}
const passwordHandler = (event)=>{
    console.log(event.target.value);
    setuserPassword(event.target.value)

}

const submitHandler = (event)=>{
    console.log(username, password);
    event.preventDefault();

}

return(




<div className='forms'>
<form onSubmit={submitHandler}>
    <h2>FORM</h2>
    <label>UserName:</label>
    <input type="text" placeholder="enter the name" value={username} onChange={userHandler}/><br></br><br></br>
    <label >Password:</label>
    <input type= "number" placeholder="Enter ur Password" value={password} onChange={passwordHandler} /><br></br><br></br>
    <input type="submit" />
</form>
</div>
);
}
export default Forms;
