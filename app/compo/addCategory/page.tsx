'use client';
import React, { useState, useCallback, ChangeEvent, FormEvent, DragEvent } from 'react';

import {FileRejection, useDropzone} from 'react-dropzone'
import { useRouter } from 'next/navigation';
import styles from  './AddCategory.module.css';

type FormState = {
  categoryName: string;
  categoryCode: string;
  description: string;
  productImage: File | null;
};

const AddCategoryPage = () => {
  const router = useRouter();


  const [formData, setFormData] = useState<FormState>({
    categoryName: '',
    categoryCode: '',
    description: '',
    productImage: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [preview,setPreview] = useState<string | ArrayBuffer | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[]) => {
    // Do something with the accepted files
    // Do something with the files
    const file = new FileReader;
     file.onload = function() {
        setPreview(file.result);
     }

     file.readAsDataURL(acceptedFiles[0])
  }, [])
  const {acceptedFiles,getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFormData({ ...formData, productImage: e.target.files[0] });
  //   }

     
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    // Check if all fields are filled
    if (!formData.categoryName || !formData.categoryCode || !formData.description || !formData.productImage) {
      setErrorMessage("Please fill all fields");
      return;
    }
    

    // Simulate form submission
    try {
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage('Category Submitted Successfully');
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Render only the success message if it's available
  if (successMessage) {
    return (
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-xl font-bold mb-4">Success</h1>
        <div><h1>{successMessage}</h1></div>
        <button onClick={() => router.back()} className="border border-blue-300 rounded px-4 py-2 hover:bg-gray-100">Go back</button>
      </div>
    );
  }

  // Render the form if the success message is not available
  return (
    // <div className="bg-gray-100 px-4 py-4 w-3/4 mx-auto mt-8">
    <div className={styles.pageWrapper}>
  <div className={styles.content}>
    <div className={`flex flex-col ${styles.pageHeader}`}>
    {errorMessage && <div><h1 className='text-red-700 text-center text-2xl'>{errorMessage}</h1></div>}
      <div className={styles.pageTitle}>
        <h4 className="text-xl font-bold mb-4">Product Add Category</h4>
        <h6>Create new product Category</h6>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`${styles.card} `}>
          <div className='flex space-x-4'>
            <div className="w-1/2">
              <label htmlFor='categoryName' className="mb-1 ">Category Name</label>
              <input id='categoryName' type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
              
            </div>
            <div className="mb-4 w-1/2">
              <label htmlFor='categoryCode' className="block ">Category Code</label>
              <input id='categoryCode' type="text" name="categoryCode" value={formData.categoryCode} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </div>

          <div>
            <label htmlFor='description' className="block mb-1">Description</label>
            <textarea id='description' name="description" value={formData.description} onChange={handleChange} className="w-full h-64 border border-gray-300 rounded px-3 py-2"></textarea>
          </div>
            <label htmlFor='productImge' className="block mb-1 mt-3">Product Image</label>
            <div className="border mb-5 hover:bg-gray-300 cursor-pointer border-gray-300 rounded w-full h-36 px-3 py-2" {...getRootProps()}>
                      <input {...getInputProps()} />
                          {
                                  isDragActive ?
                         <p>Drop the files here ...</p> :
                         <div className='mt-10 flex items-center justify-center'>
                         <img src="../assets/upload-1.svg" alt="Upload icon" />
                         <h4 className=''>Drag and drop a file to upload,or click to select</h4>
                       </div>
                                              }
              </div>

            {preview && <img src={preview as string} alt="Product Preview" />}
              

          
          <div className='px-5'>
            <button type="submit" className="mr-10 bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600">Submit</button>
            <button type="button" onClick={() => router.push('/categories')} className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-blue-600">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>


        
       
  );
};

export default AddCategoryPage;
