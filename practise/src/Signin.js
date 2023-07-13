import { useState } from "react"

export default function Signin(){
    const[inputData , setInputData] = useState({
        email: '',
        password:''
    })
    const handleChange =(e)=>
    {
     const{name , value} =e.target;
     const newInputData = inputData;
     inputData[name] =value;
     setInputData(newInputData);
     console.log(newInputData);
    }
    const handlerSubmit = (e)=>{
        e.preventDefault();
        console.log(inputData);
        localStorage.setItem('login_data',JSON.stringify(inputData));
    }

    return(
        <div className="container">
            <fotm className="form">
                <h2>Login Form</h2>
                <div className="row">
                    <div className="col-25">
                        <label>Email</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={inputData.email.value}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Password</label>
                    </div>
                    <div className="col-75">
                        <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={inputData.password.value}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row">
                <input type="submit" value="Sign In" onClick={handlerSubmit}/>
                </div>

            </fotm>

        </div>
    )
}