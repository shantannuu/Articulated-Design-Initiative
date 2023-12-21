import React, { useState } from 'react'
import { createDetailProject } from '../../Apicalls/ProjectApi';

function ProjectDetail() {
    const [formData, setFormData] = useState({
        projectId : '',
        title:'',
        folderName:'projects',
        wideImage: null,
        wideImageDescription: '',
        largeImage: null,
        largeImageDescription: '',
        medium1Image: null,
        medium1ImageDescription:'',
        medium2Image: null,
        medium2ImageDescription: '',
        tallImage: null,
        tallImageDescription: '',
        description1:'',
        description2:'',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageWide = (e) => {
        console.log(e)
        setFormData({ ...formData, wideImage: e.target.files[0] });
    };

    const handleImageLarge = (e) => {
        console.log(e)
        setFormData({ ...formData, largeImage: e.target.files[0] });
    };

    const handleImageMedium1 = (e) => {
        console.log(e)
        setFormData({ ...formData, medium1Image: e.target.files[0] });
    };

    const handleImageMedium2 = (e) => {
        console.log(e)
        setFormData({ ...formData, medium2Image: e.target.files[0] });
    };

    const handleImageTall = (e) => {
        console.log(e)
        setFormData({ ...formData, tallImage: e.target.files[0] });
    };

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // Use FormData to handle file uploads
        const formDataWithFile = new FormData();
        formDataWithFile.append('projectId', formData.projectId);
        formDataWithFile.append('title', formData.title);
        formDataWithFile.append('folderName', formData.folderName);
        formDataWithFile.append('wideImage', formData.wideImage);
        formDataWithFile.append('wideImageDescription', formData.wideImageDescription);
        formDataWithFile.append('largeImage', formData.largeImage);
        formDataWithFile.append('largeImageDescription', formData.largeImageDescription);
        formDataWithFile.append('medium1Image', formData.medium1Image);
        formDataWithFile.append('medium1ImageDescription', formData.medium1ImageDescription);
        formDataWithFile.append('medium2Image', formData.medium2Image);
        formDataWithFile.append('medium2ImageDescription', formData.medium2ImageDescription);
        formDataWithFile.append('tallImage', formData.tallImage);
        formDataWithFile.append('tallImageDescription', formData.tallImageDescription);
        formDataWithFile.append('description1', formData.description1);
        formDataWithFile.append('description2', formData.description2);

        for (var key of formDataWithFile.entries()) {
            console.log(key[0] + ' , ' + key[1])
        }
        try {
            // Send data to Node.js/Express backend
            const response = await createDetailProject(formDataWithFile);
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
                        <label for="title" class="block text-sm font-medium text-gray-700">Project title</label>
                        <input type="text" id="title" name="title" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    {/* wide image */}
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Wide Image</label>
                        <input type="file" id="image" name="wideImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageWide} />
                    </div>

                    <div>
                        <label for="wideImageDescription" class="block text-sm font-medium text-gray-700">Wide Image Description</label>
                        <input type="text" id="wideImageDescription" name="wideImageDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    {/* Large image */}
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Large Image</label>
                        <input type="file" id="image" name="largeImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageLarge} />
                    </div>

                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Large Image Description</label>
                        <input type="text" id="largeImageDescription" name="largeImageDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    {/* Medium1 image */}
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Medium 1 Image</label>
                        <input type="file" id="image" name="medium1Image" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageMedium1} />
                    </div>

                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Medium 1 Image Description</label>
                        <input type="text" id="medium1ImageDescription" name="medium1ImageDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    {/* Medium2 image */}
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Medium 2 Image</label>
                        <input type="file" id="image" name="medium2Image" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageMedium2} />
                    </div>

                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Medium Image 2 Description</label>
                        <input type="text" id="medium2ImageDescription" name="medium2ImageDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>

                    {/* tall image */}
                    <div>
                        <label for="image" class="block text-sm font-medium text-gray-700">Tall Image</label>
                        <input type="file" id="image" name="tallImage" class="mt-1 p-2 w-full border rounded-lg" onChange={handleImageTall} />
                    </div>

                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Tall Image Description</label>
                        <input type="text" id="medium2ImageDescription" name="tallImageDescription" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>
{/* desc 1 */}
                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Description 1</label>
                        <input type="text" id="medium2ImageDescription" name="description1" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
                    </div>
{/* desc 2 */}
                    <div>
                        <label for="largeImageDescription" class="block text-sm font-medium text-gray-700">Description 2</label>
                        <input type="text" id="medium2ImageDescription" name="description2" class="mt-1 p-2 w-full border rounded-lg" onChange={handleInputChange} />
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

export default ProjectDetail