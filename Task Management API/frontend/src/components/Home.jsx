import React from "react";

function Home() {
  const tasks = [
    { id: 1, title: "Finish React Project", description: "Complete the task management UI", status: "In Progress" },
    { id: 2, title: "Learn Tailwind CSS", description: "Practice utility-first design", status: "Pending" },
  ];

  return (
    <div className="min-h-screen  text-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-amber-400">All Tasks</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-xl shadow-lg overflow-hidden text-center">
          <thead className="bg-gray-800 text-gray-200">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-black bg-white/90">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-200 transition">
                <td className="px-4 py-3">{task.id}</td>
                <td className="px-4 py-3 font-medium">{task.title}</td>
                <td className="px-4 py-3">{task.description}</td>
                <td
                  className={`px-4 py-3 font-semibold ${
                    task.status === "Pending"
                      ? "text-red-600"
                      : "text-yellow-400"
                  }`}
                >
                  {task.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
