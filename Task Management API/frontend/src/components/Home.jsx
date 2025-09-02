import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br    text-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl text-indigo-400"> All Tasks</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-xl shadow-lg overflow-hidden">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left  ">ID</th>
              <th className="px-4 py-3 text-left  ">
                Title
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Description
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-black">
            <tr className="hover:bg-gray-200 transition">
              <td className="px-4 py-3">1</td>
              <td className="px-4 py-3 font-medium">Finish React Project</td>
              <td className="px-4 py-3 ">
                Complete the task management UI
              </td>
              <td className="px-4 py-3 flex justify-center gap-3">
                <button className="bg-blue-600  px-3 py-1.5 rounded-lg text-sm shadow">
                   Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
