import React,{useState,useEffect} from 'react'
import { RegisterAdmin } from '../../Apicalls/AdminApi';
import { Link, useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const [registerformData, setRegisterFormData] = useState({
        name: '',
        email: '',
        number: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setRegisterFormData({ ...registerformData, [e.target.name]: e.target.value });
    };

    const onFinish = async (e) => {
        e.preventDefault();
        try {
            console.log(registerformData)
            const response = await RegisterAdmin(registerformData);
            
            if (response.success) {
                console.log(response.message);
                navigate('/LoginAdmin');
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
          
            <h1 class="text-3xl font-semibold text-center mb-6">Registration</h1>
            
            
            <form class="space-y-4">
                
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" onChange={handleInputChange} id="name" name="name" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>


                
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" onChange={handleInputChange} id="phone" name="phone" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>

               
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" onChange={handleInputChange} id="email" name="email" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>

                
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" onChange={handleInputChange} id="password" name="password" class="mt-1 p-2 w-full border rounded-lg"/>
                </div>

               
                
                <div>
                    <button type="submit" onClick={onFinish} class="animate-pulse bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full">
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register