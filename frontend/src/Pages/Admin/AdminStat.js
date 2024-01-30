import React, { useState, useEffect } from 'react'
import { GetAllUsers } from '../../Apicalls/UsersApi';

const countUniqueObjects = (arr) => {
    return arr.reduce((acc, obj) => {
        const key = obj.ip + obj.browser + obj.deviceType;
        console.log(key)
        // Check if the key exists in the accumulator
        if (acc[key]) {
            // If yes, increment the count
            acc[key].count += 1;

        } else {
            // If not, add a new entry with count 1
            acc[key] = { ...obj, count: 1 };
        }

        return acc;
    }, {});
};

function AdminStat() {
    const [users, setUsers] = useState([])
    const getuserDetails = async () => {
        try {

            const response = await GetAllUsers();

            if (response.success) {
                setUsers(response.data);
            } else {
                console.log(response.message)
            }
        } catch (error) {

            console.log(error.message);
        }
    }


    const uniqueUser = countUniqueObjects(users);

    useEffect(() => {

        getuserDetails();
    }, [])
    
    return (
        <>
            <div className='stat-user'>
                <h3>Number of views : </h3>
                <h3>{users.length}</h3>
                <h3>Number of Users : </h3>
                <h3>{Object.values(uniqueUser).length}</h3>
            </div>
        </>
    )
}

export default AdminStat