import React from "react";
 import {Link} from "react-router-dom";
function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100  rounded-xl">
      <div className="flex flex-1 rounded-xl">
        <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block rounded-xl" >
          <h2 className="text-lg font-semibold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/viewalltask" className="hover:text-indigo-400">
                 View Tasks
              </Link>
            </li>
            <li>
              <Link to="/add-task" className="hover:text-indigo-400">
                 Add Task
              </Link>
            </li>
            <li>
              <Link to="/userprofile" className="hover:text-indigo-400">
                 Profile
              </Link>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-lg font-semibold text-indigo-600">Total Tasks</h3>
              <p className="text-3xl font-bold mt-2">5</p>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-lg font-semibold text-green-600">Completed</h3>
              <p className="text-3xl font-bold mt-2">8</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="text-lg font-semibold text-red-600">Pending</h3>
              <p className="text-3xl font-bold mt-2">1</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Recent Tasks</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-5" colSpan={2}>Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 text-center">
                  <tr>
                    <td className="px-4 py-3">1</td>
                    <td className="px-4 py-3">Build Dashboard UI</td>
                    <td className="px-4 py-3 text-green-600">Completed</td>
                    <td>
                      <button className="bg-amber-300 px-3 py-1 rounded">Edit</button>
                    </td>
                    <td>
                      <button className="bg-red-500 px-3 py-1 rounded ">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">2</td>
                    <td className="px-4 py-3">Build Dashboard UI</td>
                    <td className="px-4 py-3 text-red-500">Pending</td>
                    <td>
                      <button className="bg-amber-300 px-3 py-1 rounded">Edit</button>
                    </td>
                    <td>
                      <button className="bg-red-500 px-3 py-1 rounded ">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
