import React, { useEffect, useState } from 'react'
import { GetAllCategories, createProject } from '../../Apicalls/ProjectApi';

function AdminProject() {

    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const response = await GetAllCategories();
            console.log(response.data)
            if (response.success) {
                setCategories(response.data);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const [formData, setFormData] = useState({
        title: '',
        folderName:'projects',
        shortDescription: '',
        category: '',
        projectImage: null,
        publishDate: '',
        
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, projectImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.title);
        // Use FormData to handle file uploads
        const formDataWithFile = new FormData();
        formDataWithFile.append('title', formData.title);
        formDataWithFile.append('folderName', formData.folderName);
        formDataWithFile.append('shortDescription', formData.shortDescription);
        formDataWithFile.append('category', formData.category);
        formDataWithFile.append('projectImage', formData.projectImage);
        formDataWithFile.append('publishDate', formData.publishDate);
        
        for (var key of formDataWithFile.entries()) {
            console.log(key[0] + ', ' + key[1])
        }
        try {
            // Send data to Node.js/Express backend
            const response = await createProject(formDataWithFile);
            if (response.success) {
                console.log(response.message);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <main class="">




            <section class="bg-white p-6 rounded-lg shadow-md">


                <form class="space-y-4" onSubmit={handleSubmit}>

                    <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                        <input type="text" id="title" name="title" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>


                    <div>
                        <label for="shortDescription" class="block text-sm font-medium text-gray-700">Short Description</label>
                        <input type="text" id="shortDescription" name="shortDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>


                    {/* <div>
                        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                        <input type="text" id="category" name="category" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div> */}

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            className="mt-1 p-2 w-full border rounded-lg"
                            onChange={handleInputChange}
                        >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>



                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="file" id="image" name="projectImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageChange} />
                    </div>


                    <div>
                        <label for="publishDate" class="block text-sm font-medium text-gray-700">Publish Date</label>
                        <input type="date" id="publishDate" name="publishDate" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
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

export default AdminProject