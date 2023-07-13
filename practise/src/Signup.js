import './App.css';
import {useState} from 'react'
import { Link } from "react-router-dom";
export default function Signup(){
    const [data , setData] = useState({
        fullName : '',
        email : '',
        create_password : '',
        confirm_password:''
    })
    const changeHandle = (e) =>{
       const{name , value} = e.target;
    //    console.log(name,value);
       const newValue = data;
       data[name] = value;
    //    console.log(data[name]);
       setData(newValue);
       
    }
    const handleSubmit =(e)=>{
       e.preventDefault();
       console.log(data);
       localStorage.setItem('signup_data' , JSON.stringify(data));
    }
    return(
        <div className="container">
             <form  className='form' onSubmit={handleSubmit}>
                <h2>Register Form</h2>
                <div className="row">
                    <div className="col-25">
                    <label for="fullname">Full Name</label>
                    </div>
                    <div className="col-75">
                    <input
                    type='text'
                    placeholder='Enter your name'
                    name='fullName'
                    value={data.fullName.value}
                    onChange={changeHandle}
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="email"
                        placeholder='Enter your email'
                        name='email'
                        value={data.email.value}
                        onChange={changeHandle}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="number">Create Password</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="password"
                        placeholder='Enter new password'
                        name='create_password'
                        value={data.create_password.value}
                        onChange={changeHandle}
                        
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label for="password">Confirm Password</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="password"
                        placeholder='Enter your password'
                        name='confirm_password'
                        value={data.confirm_password.value}
                        onChange={changeHandle}
                        
                        />
                    </div>
                </div>
                <div className="row">
                <input type="submit" value="Sign up"/>
                </div>
                <div className="row text">
                <p >If you have account <Link to={'/signin'} className='link' >Sign In</Link> here</p>
                </div>
              
            </form>

        </div>
    )
}