import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import  toast  from 'react-hot-toast'
import { useAuth } from '../../context/auth'



const Login = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth();
    
    const navigate = useNavigate();
    const location = useLocation();

    //form function to submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('api/v1/auth/login', { email, password}
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth ({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem("auth", JSON.stringify(res.data)); 
                navigate(location.state || "/home");
            }else {
                toast.error(res.data.message)
            }
        }catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };
    

  return (
    <Layout title="Login Ecommerce">
        <div className='login'>
            <h1>Login Here</h1>
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"  placeholder='Enter Your Email' required />
                </div>
                <div className="mb-3">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control"  placeholder='Enter Your Password' required />
                </div>
            
            <div className='mb-3'>
                <button type="button" className="" onClick={() => {navigate("/forgot-password");}}>Forgot Password?</button> 
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>  

    </Layout>
  )
}


export default Login
