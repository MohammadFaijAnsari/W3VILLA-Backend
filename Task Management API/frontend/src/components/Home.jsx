import React, { useEffect, useState } from "react";
import { API } from "../api/api";
import { CheckCircle, XCircle } from "lucide-react";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${API}/api/tasks`);
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);


  const handleStatusChange = async (taskId, newStatus) => {
    try {
      const res = await fetch(`${API}/api/tasks/${taskId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) {
        throw new Error("Failed to update status");
      }

      const data = await res.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task
        )
      );

      alert(data.message || "Status updated successfully ");
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Error updating status ");
    }
  };

  return (
    <div className="min-h-screen text-white p-6 rounded-xl">
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
              <th className="px-4 py-3">Task Status</th>
              <th className="px-4 py-3">Status Icon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-black bg-white/90">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <tr key={task.id} className="hover:bg-gray-200 transition">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium">{task.title}</td>
                  <td className="px-4 py-3">{task.desc}</td>
                  <td className="px-4 py-3">
                    <select
                      value={task.status}
                      onChange={(e) =>
                        handleStatusChange(task.id, e.target.value)
                      }
                      className={`border rounded-lg px-2 py-1 ${task.status === "Completed"
                          ? "text-green-600"
                          : "text-red-600"
                        }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {task.status === "Completed" ? (
                      <CheckCircle className="text-green-500 w-6 h-6 mx-auto" />
                    ) : (
                      <XCircle className="text-red-500 w-6 h-6 mx-auto" />
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-6 text-gray-500">
                  No tasks available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
