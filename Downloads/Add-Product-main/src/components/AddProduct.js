import React from 'react';

export default function AddProduct() {
  return (
    <div className="p-5  ">
      <nav className="bg-white p-4 flex justify-between items-center pl-20 ">
        <div  className=' pl-20'>
          <div className="text-gray-800 text-lg font-semibold">Product Add</div>
          <div className="text-gray-600 text-sm">Create new product</div>
        </div>
      </nav>
      <div className='shadow-xl pl-20 overflow-visible'> {/* Updated margin-right here */}
        <div className="flex flex-row">
          <div className="flex flex-col mb-4 mr-10  pl-20">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Product Name</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Category</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Sub Category</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Brand</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col mb-4 mr-10  pl-20">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Unit</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">SKU</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Minimum Qty</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Quantity</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          
        </div>
        <dev>
        <div className="flex flex-col mb-4 mr-10 pl-20 pr-36">
  <label htmlFor="productName" className="text-sm font-medium text-gray-700">Description</label>
  <input type="text" id="productName" name="productName" className="p-2 w-70 h-36 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
</div>
          </dev>
          <div className="flex flex-row">
          <div className="flex flex-col mb-4 mr-10  pl-20">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Tax</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Discount Type</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Price</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          <div className="flex flex-col mb-4 mr-10">
            <label htmlFor="productName" className="text-sm font-medium text-gray-700">Status</label>
            <input type="text" id="productName" name="productName" className="p-2 w-70 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1" />
          </div>
          
        </div>
        <div className="flex flex-col mb-4 mr-10 pl-20 pr-36">
  <label htmlFor="productName" className="text-sm font-medium text-gray-700">Product Image</label>
  <label htmlFor="file-upload" className="cursor-pointer relative border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm mt-1 hover:bg-gray-100">
    <input type="file" id="file-upload" name="file-upload" className="hidden" />
    <span className="p-2 w-70 h-36 flex justify-center items-center">
      Drag and drop a file to upload
    </span>
  </label>
</div>

      
<dev>
<div className="flex flex-row pl-20 pb-10 pt-10">
  {/* Submit Button */}
  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-2">
    Submit
  </button>
  {/* Cancel Button */}
  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
    Cancel
  </button>
</div>
</dev>

      </div>
    </div>
  );
}
