import React, { useState } from 'react';
import './signup.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const history = useNavigate();
    const [Inputs, setInputs] = useState({
      email: "",
      username: "",
      password: "",
    });

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    };

    const submit = async (e) => {
      e.preventDefault();
      await axios
      .post("http://localhost:1000/api/v1/register", Inputs)
      .then((response) => {
        if(response.data.message === "User already exists"){
          alert(response.data.message);
        }
        else{
          alert(response.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
          });
          history("/signin");
        }
          
          
      });
    };

  return (
    <><div className='signup'>
      <br /><br />
          <div className='container d-flex justify-content-center align-items-center'>
          <br /><br /><br /><br /><br /><br /><br /><br />
              <div className='d-flex flex-column align-items-center' style={{ backgroundColor: 'rgb(114, 71, 71)', width:'30%', height: '380px'}}>
                <br />
                <h1 style={ {color: 'rgb(48, 0, 0)'}}><b >SIGN-UP</b></h1>
                
              <input className='p-2 my-3' type="email" name='email' placeholder='Enter your email' onChange={change} value={Inputs.email}/>
              <input className='p-2 my-3' type="username" name='username' placeholder='Enter your username' onChange={change} value={Inputs.username}/>
              <input className='p-2 my-3' type="password" name='password' placeholder='Enter your password' onChange={change} value={Inputs.password} />
              <div className='align-items-center d-flex flex-column justify-content-center'>
              <button className='btn-signup p-2' onClick={submit}>SIGN-UP</button>
              </div>
              </div>

              </div>
          </div>
      </>
    
  )
}



export default Signup