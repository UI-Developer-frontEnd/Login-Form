import { useState } from "react";
const Form=()=>{
    const [userName,setUserName] =useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(userName===""||userName==="undefined"){
            alert("User name is mandatory")
        }else if(email ===""||email==="undefined"){
            alert("Password is mandatory")
        }
        const profileObj = {
            UserName:userName,
            Email:email,
            password:password,
        }
        console.log(profileObj);
        if(userName  && password && email){
            setEmail("");
            setUserName("");
            setPassword("");
        }
    }
    return(
        <section className="container">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <h1>FORM</h1>
                <div className="form-content">
                <input 
                    type={"text"} 
                    id={"userName"} 
                    placeholder={"enter your name"}
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                <div className="form-content">
                <input 
                    type={"email"} 
                    id={"email"} 
                    placeholder={"enter your email"}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="form-content">
                <input 
                    type={"password"} 
                    id={"password"} 
                    placeholder={"enter your password"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className="submit-button">
                <button type="submit">submit</button>
                </div>
            </form>
        </section>
    )
}

export default Form;