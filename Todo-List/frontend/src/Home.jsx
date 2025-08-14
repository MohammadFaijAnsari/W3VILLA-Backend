import React, { useState } from 'react';
import Create from './Create';
import { BsFillTrashFill } from "react-icons/bs";

import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
      axios.get('https://todo-7uyz.onrender.com/get')
      .then(result=>setTodos(result.data))
      .catch(err=>{console.log(err)});
  },[])

  

  // Delete Record for Todo
  const handleDelete =(id)=>{
     axios.delete('https://todo-7uyz.onrender.com/delete/'+id)
      .then(result=>{
        location.reload();
      });

  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">
      <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-3">
        Todo List
      </h2>
      <div className="w-full max-w-lg mb-8">
        <Create />
      </div>
      <div className="w-full max-w-lg bg-white  p-6">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500 italic">No Record Found</p>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo, index) => (
              <li 
                key={index} 
                className="bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg shadow-sm flex justify-between items-center"
              >
                <span className="text-gray-700 text-2xl">{todo.task}</span>
                <div>
                  <span>
                    <BsFillTrashFill className='icon' onClick={()=>{handleDelete(todo._id)}}/>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
