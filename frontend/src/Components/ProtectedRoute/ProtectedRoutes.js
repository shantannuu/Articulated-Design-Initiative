import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { GetLoggedInUserDetails } from '../../Apicalls/AdminApi';
import { SetUser } from '../../redux/userSlice';

function ProtectedRoutes({ children }) {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const validateUserToken = async () => {
        try {

            const response = await GetLoggedInUserDetails();

            if (response.success) {
                dispatch(SetUser(response.data));
            } else {
                localStorage.removeItem("token");
                navigate("/LoginAdmin");
                console.log(response.message)
            }
        } catch (error) {
            localStorage.removeItem("token");
            navigate("/LoginAdmin");
            console.log(error.message)

        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/LoginAdmin');
        } else {
            validateUserToken();
        }
    }, []);


    return (
        <div>{user && <>
            <div class="bg-gray-200 font-sans">
                <div class="sidebar text-white w-64 h-screen fixed overflow-y-auto">
                    <div class="p-4 mt-5">
                        <h1 class="text-2xl font-semibold">Admin Dashboard</h1>
                    </div>
                    <nav class="mt-6">
                        <ul>
                            <li class="mb-2">
                                <Link to="/AdminStat" class="flex items-center p-4">
                                    Statistic Report
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/AdminContact" class="flex items-center p-4">
                                    Users Contact Details
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/AdminProject" class="flex items-center p-4">
                                    Project create Form
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/DetailProject" class="flex items-center p-4">
                                    Project Detail Form
                                </Link>
                            </li>
                            <li class="mb-2">
                                <Link to="/CategoryProject" class="flex items-center p-4">
                                    Project Category Form
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div class="ml-64 p-4">

                    <div class="topnav p-4 flex justify-between items-center mb-6  rounded-md">
                        <header class="text-3xl font-semibold">Contact Table</header>
                        <div>

                            <button style={{ marginRight: '10px' }} class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                                {user.name.toUpperCase()}
                            </button>


                            <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200" onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/LoginAdmin")
                            }}>Logout</button>
                        </div>

                    </div>
                    <div class="overflow-x-auto">{children}</div>

                </div>
            </div>
        </>


        }</div>
    )
}

export default ProtectedRoutes