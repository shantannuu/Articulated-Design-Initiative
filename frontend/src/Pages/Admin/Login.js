import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginAdmin } from '../../Apicalls/AdminApi';

function Login() {
    const navigate = useNavigate();
    const [loginformData, setLoginFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setLoginFormData({ ...loginformData, [e.target.name]: e.target.value });
    };

    const onFinish = async (e) => {
        e.preventDefault();
        try {
            console.log(loginformData)
            const response = await LoginAdmin(loginformData);
            if (response.success) {
                console.log(response.message);
                localStorage.setItem("token", response.data);
                window.location.href = '/AdminContact';
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token){
            navigate("/")
        }
    },[])

  return (
    <div class="bg-gray-200 font-sans">
       
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
           
            <h1 class="text-3xl font-semibold text-center mb-6">Login</h1>
            
           
            <form class="space-y-4">
                
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" onChange={handleInputChange} name="email" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>

              
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" onChange={handleInputChange} name="password" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>

               
                <div>
                    <button type="submit" onClick={onFinish} class="animate-pulse bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login