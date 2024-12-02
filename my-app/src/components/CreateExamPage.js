import React, { useState } from 'react';

function CreateExamPage() {
  const [examTitle, setExamTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleTitleChange = (event) => {
    setExamTitle(event.target.value);  // Update exam title
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);  // Update selected file
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send to backend)
    console.log('Exam Title:', examTitle);
    console.log('Uploaded File:', file);
  };

  return (
    <div style={{ backgroundColor: 'transparent', height: '100vh', color: 'white' }}>
      <form onSubmit={handleSubmit} style={{ marginTop: '20%' }}>
        <div>
          <label htmlFor="examTitle" style={{ display: 'block' }}>Exam Title:</label>
          <input
            id="examTitle"
            type="text"
            value={examTitle}
            onChange={handleTitleChange}
            placeholder="Enter exam title"
            style={{
              padding: '10px',
              margin: '10px 0',
              width: '100%',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        
        <div>
          <label htmlFor="fileInput" style={{ display: 'block' }}>Upload File:</label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            style={{
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Create Exam
        </button>
      </form>
    </div>
  );
}

export default CreateExamPage;
