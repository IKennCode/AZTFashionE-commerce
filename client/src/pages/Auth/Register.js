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
    const navigate = useNavigate()

    //form function to submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('api/v1/auth/register', {name, email, password, phone, address}
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
        <div className='register'>
            <h1>register page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputName1" placeholder='Enter Your Name' required />
                </div>
                <div className="mb-3">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required />
                </div>
                <div className="mb-3">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Password' required />
                </div>
                <div className="mb-3">
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="exampleInputPhone1" placeholder='Enter Your Phone ' required />
                </div>
                <div className="mb-3">
                    <input value={address} onChange={(e) => setAddress(e.target.value)} type="address" className="form-control" id="exampleInputaddress1" placeholder='Enter Your Address' required />
                </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>  

    </Layout>
  )
}


export default Register
