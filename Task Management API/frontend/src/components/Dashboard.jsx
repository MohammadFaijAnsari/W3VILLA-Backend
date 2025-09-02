import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 rounded-xl">
      <div className="flex flex-col md:flex-row flex-1 rounded-xl">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-gray-900 text-white p-6 rounded-xl md:rounded-r-none md:rounded-l-xl mb-6 md:mb-0">
          <h2 className="text-lg font-semibold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/viewalltask" className="hover:text-indigo-400 block">
                View Tasks
              </Link>
            </li>
            <li>
              <Link to="/add-task" className="hover:text-indigo-400 block">
                Add Task
              </Link>
            </li>
            <li>
              <Link to="/userprofile" className="hover:text-indigo-400 block">
                Profile
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">Dashboard Overview</h2>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

          {/* Recent Tasks Table */}
          <div className="mt-10 overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Recent Tasks</h3>
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden text-center">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3" colSpan={2}>Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {/* Example Row */}
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">Build Dashboard UI</td>
                  <td className="px-4 py-3 text-green-600">Completed</td>
                  <td className="px-2 py-2">
                    <button className="w-full sm:w-auto mb-1 sm:mb-0 bg-amber-300 px-3 py-1 rounded block sm:inline-block">
                      Edit
                    </button>
                  </td>
                  <td className="px-2 py-2">
                    <button className="w-full sm:w-auto bg-red-500 px-3 py-1 rounded text-white block sm:inline-block">
                      Delete
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">Build Dashboard UI</td>
                  <td className="px-4 py-3 text-red-500">Pending</td>
                  <td className="px-2 py-2">
                    <button className="w-full sm:w-auto mb-1 sm:mb-0 bg-amber-300 px-3 py-1 rounded block sm:inline-block">
                      Edit
                    </button>
                  </td>
                  <td className="px-2 py-2">
                    <button className="w-full sm:w-auto bg-red-500 px-3 py-1 rounded text-white block sm:inline-block">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
