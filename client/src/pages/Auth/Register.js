import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import  toast  from 'react-hot-toast'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    
    const navigate = useNavigate()

    //form function to submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('api/v1/auth/register', {name, email, password, phone, address, answer,}
            );
            if (res && res.data.success) {
                toast.success(res.data && res.data.message);
                navigate("/login");
            }else {
                toast.error(res.data.message)
            }
        }catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };
    

  return (
    <Layout title="Register Ecommerce">
        <div className='row register'>
                <div className="col-md-5 m-5 ">
                    <img
                    src="/image/register.png"
                    alt="contactus"
                    style={{ width: "100%" }}
                    />
                </div>
            <h1 className='registerpage'>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control w-25" id="exampleInputName1" placeholder='Enter Your Name' required />
                </div>
                <div className="mb-3">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control  w-25" id="exampleInputEmail1" placeholder='Enter Your Email' required />
                </div>
                <div className="mb-3">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control  w-25" id="exampleInputEmail1" placeholder='Enter Your Password' required />
                </div>
                <div className="mb-3">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control  w-25" id="exampleInputPhone1" placeholder='Enter Your Phone ' required />
                </div>
                <div className="mb-3">
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" className="form-control  w-25" id="exampleInputaddress1" placeholder='Enter Your Address' required />
                </div>
                <div className="mb-3">
                    <input value={answer} onChange={(e) => setAnswer(e.target.value)} type="address" className="form-control  w-25" id="exampleInputaddress1" placeholder='Favorite Sports' required />
                </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>  

    </Layout>
  )
}


export default Register
