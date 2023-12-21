import React, { useEffect, useState } from 'react'
import './AdminContactDetail.css'
import { GetAllContacts } from '../../Apicalls/ContactApi';


function AdminContactDetail() {
    const [contacts,setContacts] = useState([])

    const getContactDetails = async () =>{
        try{
          
          const response = await GetAllContacts();
          
          if(response.success){
              setContacts(response.data);
          }else{
              console.log(response.message)
          }
      }catch(error){
          
          console.log(error.message);
      }
      }

      useEffect(() => {
        getContactDetails();
      }, [])

    return (
        <>
        { contacts.length > 0 ? (
            <table class="min-w-full bg-white shadow-md border-collapse rounded-md">
                <thead>
                    <tr>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    </tr>

                </thead>
                <tbody>
        {contacts.map(contact =>(
            

                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">{ contact.name }</td>
                        <td class="px-6 py-4 whitespace-nowrap">{ contact.email }</td>
                        <td class="px-6 py-4 whitespace-nowrap">{ contact.number }</td>
                        <td class="px-6 py-4 whitespace-nowrap">{ contact.message }</td>
                    </tr>

                
        ))}
            </tbody>
            </table>
        ) : (
            <p>No Contacts Yet</p>
        )}
        
        

            </>

    )
}

export default AdminContactDetail