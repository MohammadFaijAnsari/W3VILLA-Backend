import React, { useState, useEffect } from "react";
import { baseurl } from "../../axios";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Home = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      city: "",
      code: "",
      date: "",
   });

   const [isEditMode, setIsEditMode] = useState(false); 
   const [editId, setEditId] = useState(null); 

   const handleChangeData = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleFormData = async () => {
      try {
         if (!formData.name || !formData.email || !formData.city || !formData.code || !formData.date) {
            alert("All Fields are Required");
            return;
         }

         let res;
         if (isEditMode) {
            // update request
            res = await baseurl.put("/update", { _id: editId, ...formData });
            if (res.data.Success) {
               alert("Data Updated Successfully");
            }
         } else {
            // add request
            res = await baseurl.post("/add", formData);
            if (res.data.Success) {
               alert("Data Added Successfully");
            }
         }

         getAllData();
         setFormData({ name: "", email: "", city: "", code: "", date: "" });
         setIsEditMode(false);
         setEditId(null);

      } catch (error) {
         alert(error.response?.data?.Message || "Something went wrong!");
      }
   };

   const [data, setData] = useState([]);

   const handleDelete = async (id) => {
      try {
         const confirmDelete = window.confirm("Are you sure you want to delete?");
         if (!confirmDelete) return;
         await baseurl.delete(`/delete/${id}`);
         alert("Data Deleted Successfully");
         setData((prev) => prev.filter((item) => item._id.toString() !== id.toString()));
      } catch (error) {
         console.log(error);
      }
   };

   // Fill form for edit
   const handleEditData = (item) => {
      setFormData({
         name: item.name,
         email: item.email,
         city: item.city,
         code: item.code,
         date: item.date ? new Date(item.date).toISOString().split("T")[0] : "",
      });
      setEditId(item._id);
      setIsEditMode(true);
   };

   const getAllData = async () => {
      try {
         const { data } = await baseurl.get("/alldata");
         setData(data?.Data);
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      getAllData();
   }, []); // fixed infinite loop by adding []

   return (
      <div className="w-full px-4 sm:px-6 md:px-10 min-h-[calc(100vh-60px)]">

         {/* Form Section */}
         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 my-4">
            <div className="flex flex-col gap-1">
               <label className="text-sm font-medium">Name</label>
               <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChangeData}
                  className="w-full border border-gray-500 rounded-sm outline-none px-2 h-9 text-gray-800"
               />
            </div>
            <div className="flex flex-col gap-1">
               <label className="text-sm font-medium">Email</label>
               <input
                  type="email"
                  name="email"
                  placeholder="abc123@gmail.com"
                  value={formData.email}
                  onChange={handleChangeData}
                  className="w-full border border-gray-500 rounded-sm outline-none px-2 h-9 text-gray-800"
               />
            </div>
            <div className="flex flex-col gap-1">
               <label className="text-sm font-medium">City</label>
               <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  value={formData.city}
                  onChange={handleChangeData}
                  className="w-full border border-gray-500 rounded-sm outline-none px-2 h-9 text-gray-800"
               />
            </div>
            <div className="flex flex-col gap-1">
               <label className="text-sm font-medium">Pin Code</label>
               <input
                  type="number"
                  name="code"
                  placeholder="Enter Pin Code"
                  value={formData.code}
                  onChange={handleChangeData}
                  className="w-full border border-gray-500 rounded-sm outline-none px-2 h-9 text-gray-800"
               />
            </div>
            <div className="flex flex-col gap-1">
               <label className="text-sm font-medium">Date</label>
               <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChangeData}
                  className="w-full border border-gray-500 rounded-sm outline-none px-2 h-9 text-gray-800"
               />
            </div>
         </div>

         {/* Submit Button */}
         <div className="w-full flex justify-end">
            <button
               type="submit"
               className={`px-4 py-2 rounded-md cursor-pointer transition ${isEditMode ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"} text-white`}
               onClick={handleFormData}
            >
               {isEditMode ? "Update" : "Submit"}
            </button>
         </div>

         {/* Table Section */}
         <div className="w-full mt-8 overflow-x-auto">
            <table className="min-w-full bg-white divide-y divide-gray-200 ">
               <thead className="bg-blue-200">
                  <tr>
                     <th className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider">Id</th>
                     <th className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider">Name</th>
                     <th className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider">Email</th>
                     <th className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider">City</th>
                     <th className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider">Pin Code</th>
                     <th className="px-6 py-3 text-left text-xl font-bold text-bold uppercase tracking-wider">Date</th>
                     <th colSpan={2} className="px-6 py-3 text-left text-xl font-bold text-black uppercase tracking-wider ">Action</th>
                  </tr>
               </thead>
               <tbody className="bg-white divide-y divide-gray-200">
                  {data?.map((result, index) => (
                     <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-3 whitespace-nowrap">{index+1}</td>
                        <td className="px-6 py-3 whitespace-nowrap">{result.name}</td>
                        <td className="px-6 py-3 whitespace-nowrap">{result.email}</td>
                        <td className="px-6 py-3 whitespace-nowrap">{result.city}</td>
                        <td className="px-6 py-3 whitespace-nowrap">{result.code}</td>
                        <td className="px-6 py-3 whitespace-nowrap">
                           {result.date ? new Date(result.date).toISOString().split("T")[0] : ""}
                        </td>
                        <td>
                           <MdDelete onClick={() => handleDelete(result._id)} className="text-4xl cursor-pointer"/>
                        </td>
                        <td>
                           <FaEdit className="text-3xl cursor-pointer" onClick={() => handleEditData(result)}/>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Home;
