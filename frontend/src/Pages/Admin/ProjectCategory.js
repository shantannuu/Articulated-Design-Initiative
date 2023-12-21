import React, { useState } from 'react'
import { createCategory } from '../../Apicalls/ProjectApi';

function ProjectCategory() {

    const [formData, setFormData] = useState({
        name: '',
        folderName:'category',
        categoryImage: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, categoryImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Use FormData to handle file uploads
        const formDataWithFile =new FormData();
        formDataWithFile.append('name', formData.name);
        formDataWithFile.append('folderName', formData.folderName);
        formDataWithFile.append('categoryImage', formData.categoryImage);
        for (var key of formDataWithFile.entries()) {
			console.log(key[0] + ', ' + key[1])
		}
        try {
            // Send data to Node.js/Express backend
            const response = await createCategory(formDataWithFile);
            if (response.success) {
                console.log(response.message);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

  return (
    <main class="">




            <section class="bg-white p-6 rounded-lg shadow-md">


                <form class="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">name</label>
                        <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>


                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="file" id="image" name="categoryImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageChange} />
                    </div>


                  



                    <div>
                        <button type="submit" class="animate-pulse bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                            Add Project
                        </button>
                    </div>
                </form>
            </section>
        </main>
  )
}

export default ProjectCategory