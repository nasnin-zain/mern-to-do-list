import React, { useState } from 'react';
import './signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';

const Signin = () => {

    const dispatch = useDispatch();


    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
        role: "",
      });

      const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    };

    const submit = async (e) => {
      e.preventDefault();
      const response = await axios
      .post("http://localhost:1000/api/v1/signin", Inputs)
      
      const responseData= response.data;
      if(responseData && responseData.others && responseData.others._id){
        sessionStorage.setItem("id", response.data.others._id);
        dispatch(authActions.login());
        if (Inputs.role === "admin"){
          history('/admin-dashboard');
        }
        else {
          history("/todo");
        }
      }
 
    };

    return (
        <><div className='signin'>
              <br /><br />
              <div className='container d-flex justify-content-center align-items-center'><br />
                  <br /><br /><br /><br /><br /><br /><br /><br />
                  <div className='d-flex flex-column align-items-center' style={{ backgroundColor: 'rgb(114, 71, 71)', width:'30%', height: '375px'}}>
                    <br />
                  <h1 style={ {color: 'rgb(48, 0, 0)'}}><b>SIGN-IN</b></h1>
                  <input className='p-2 my-3' type="email" name='email' placeholder='Enter your email' value={Inputs.email} onChange={change}/>
                  <input className='p-2 my-3' type="password" name='password' placeholder='Enter your password' value={Inputs.password} onChange={change}/>
                  <select className='p-2 my-3' name='role' value={Inputs.role} onChange={change}>
                      <option value="">Select Role</option>
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                  </select>
                 
                  <div className='align-items-center d-flex flex-column justify-content-center'>
                  <button className='btn-signup p-2' onClick={submit}>SIGN-IN</button>
                  </div>
                  </div>
                     
                  </div>
              </div>
          </>
        
      )
    }
export default Signin