import React, { useState } from "react";
import Swal from "sweetalert2";

export const FileUploads = () => {
  const [image, setImage] = useState(null);
  const handleUploadsFile = async (e) => {
    e.preventDefault();

    if (!image) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please select an image first!",
      });
      return;
    }
    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost:8000/uploads", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Server Response:", data);

      // ✅ SweetAlert Success Popup
      Swal.fire({
        icon: "success",
        title: "Uploaded!",
        text: data.message, 
        confirmButtonColor: "#3085d6",
      });
    } catch (error) {
      console.error("Error uploading file:", error);

      // ❌ SweetAlert Error Popup
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: "Something went wrong while uploading.",
      });
    }
  };

  return (
    <div className="bg-gray-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl p-10 w-full max-w-lg">
        <h1 className="text-center text-3xl font-extrabold text-black mb-8">
          File Uploads
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Select Image
            </label>

            <input
              type="file"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="block w-full text-sm text-gray-700 
                file:mr-4 file:py-2 file:px-4 
                file:rounded-xl file:border-0 
                file:text-sm file:font-semibold 
                file:bg-red-400 file:text-white 
                hover:file:bg-red-500
                cursor-pointer border rounded-lg p-2"
            />
          </div>

          <button
            type="button"
            className="text-center w-full font-bold bg-green-500 h-10 rounded text-white"
            onClick={handleUploadsFile}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};
