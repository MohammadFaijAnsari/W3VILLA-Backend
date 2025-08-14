import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [add, setAdd] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    axios.post("https://todo-7uyz.onrender.com/add", { task: add })
      .then(result=>{
         location.reload();
      }).catch(err=>{
        console.log(err);
      });
  };

  return (
    <div className="bg-white p-6 shadow-lg flex items-center space-x-4 w-full">
      <input
        type="text"
        onChange={(e) => setAdd(e.target.value)}
        placeholder="Enter name"
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add
      </button>
    </div>
  );
}

export default Create;
