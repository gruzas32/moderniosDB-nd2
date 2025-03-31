import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Pasirink failą!");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch("http://localhost:3001/api/upload", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error("Nepavyko įkelti failo!");
      }
  
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Įkėlimo klaida:", error);
      setMessage(error.message); 
    }
  };
  

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Įkelk failą į Snowflake</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        disabled={loading}
      >
        {loading ? "Įkeliama..." : "Įkelti"}
      </button>
      {message && <p className="mt-4 text-lg text-gray-700">{message}</p>}
    </div>
  );
};

export default FileUpload;
