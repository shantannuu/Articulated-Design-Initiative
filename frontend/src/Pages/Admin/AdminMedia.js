import React, { useEffect, useState } from 'react'
import { createMedia } from '../../Apicalls/MediaApi';
import { GetAllProjects } from '../../Apicalls/ProjectApi';

function AdminMedia() {

    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        try {
            const response = await GetAllProjects();
            console.log(response.data)
            if (response.success) {
                setProjects(response.data);
            } else {
                console.log(response.message)
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const [formData, setFormData] = useState({
        title: '',
        mediaImage: null,
        publishDate: '',
        link:'',
        projectName: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, mediaImage: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.title);
        // Use FormData to handle file uploads
        const formDataWithFile = new FormData();
        formDataWithFile.append('title', formData.title);
        formDataWithFile.append('mediaImage', formData.mediaImage);
        formDataWithFile.append('publishDate', formData.publishDate);
        formDataWithFile.append('link', formData.link);
        formDataWithFile.append('projectName', formData.projectName);
        for (var key of formDataWithFile.entries()) {
            console.log(key[0] + ', ' + key[1])
        }
        try {
            // Send data to Node.js/Express backend
            const response = await createMedia(formDataWithFile);
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
        getProjects();
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
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
                            Project 
                        </label>
                        <select
                            id="projectName"
                            name="projectName"
                            className="mt-1 p-2 w-full border rounded-lg"
                            onChange={handleInputChange}
                        >
                            <option value="">Select a project</option>
                            {projects.map((project) => (
                                <option key={project._id} value={project._id}>
                                    {project.title}
                                </option>
                            ))}
                        </select>
                    </div>



                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Image URL</label>
                        <input type="file" id="image" name="mediaImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageChange} />
                    </div>


                    <div>
                        <label for="publishDate" class="block text-sm font-medium text-gray-700">Publish Date</label>
                        <input type="date" id="publishDate" name="publishDate" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    <div>
                        <label for="link" class="block text-sm font-medium text-gray-700">Link</label>
                        <input type="text" id="link" name="link" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>


                    <div>
                        <button type="submit" class="animate-pulse bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                            Add Article
                        </button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default AdminMedia