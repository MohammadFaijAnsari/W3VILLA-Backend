import React, { useState } from "react";

function AddTask() {
   const [formData,setFormData]=useState({
     title:"",
     desc:""
   });
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
           Add New Task
        </h2>

        <form  action='#' className="space-y-5" method="post">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Task Description
            </label>
            <textarea
              placeholder="Enter task description"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Add Task
          </button>
          <button
            type="reset"
            className="w-full bg-red-500  text-white font-semibold py-2 rounded-lg transition"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
