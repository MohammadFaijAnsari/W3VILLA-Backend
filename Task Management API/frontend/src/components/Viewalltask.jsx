import React from "react";
import { useNavigate } from "react-router-dom";

function ViewAllTask() {
  const navigate = useNavigate();

  const tasks = [
    { id: 1, title: "Finish React Project", description: "Complete the task management UI" },
    { id: 2, title: "Learn Tailwind CSS", description: "Practice utility-first design" },
    { id: 3, title: "Database Setup", description: "Setup MySQL tables for tasks" },
  ];

  return (
    <div className="min-h-screen p-8 text-white rounded-xl ">
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amber-300">All Tasks</h2>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
           Back to Dashboard
        </button>
      </div>

      {/* Task Table */}
      <div className="overflow-x-auto rounded-2xl border border-gray-700">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-800 text-gray-200 uppercase text-sm">
            <tr className="text-center">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-center">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-400 text-black">
                <td className="px-4 py-3">{task.id}</td>
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{task.description}</td>
                <td className="px-4 py-3 flex justify-center gap-3">
                  <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-white rounded">
                    Edit
                  </button>
                  <button className="flex items-center gap-1 bg-red-600 hover:bg-red-500 px-3 py-1.5 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllTask;
