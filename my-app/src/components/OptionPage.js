// import React from 'react';
// import '../App.css'; // Ensure the CSS file is linked properly

// function OptionPage() {
//   return (
//     <div>

//       {/* Main Content with Options */}
//       <div className="content">
//         <div className="page-title">Manage Exams</div>
//         <div className="options-layout">
//           {/* First Row of Options */}
//           <button className="option-button">Create Exam</button>
//           <button className="option-button">Schedule Exam</button>
//           <button className="option-button">Update Exam</button>

//           {/* Second Row: Full width option for Student Result */}
//           <button className="option-button full-width">Student Result</button>

//           {/* Third Row of Options */}
//           <button className="option-button">Add Student</button>
//           <button className="option-button">Update Student</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OptionPage;

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../App.css'; // Ensure the CSS file is linked properly

function OptionPage() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateExamClick = () => {
    navigate('/create-exam'); // Redirect to /create-exam route
  };

  return (
    <div>
      {/* Main Content with Options */}
      <div className="content">
        <div className="page-title">Manage Exams</div>
        <div className="options-layout">
          {/* First Row of Options */}
          <button className="option-button" onClick={handleCreateExamClick}>
            Create Exam
          </button>
          <button className="option-button">Schedule Exam</button>
          <button className="option-button">Update Exam</button>

          {/* Second Row: Full width option for Student Result */}
          <button className="option-button full-width">Student Result</button>

          {/* Third Row of Options */}
          <button className="option-button">Add Student</button>
          <button className="option-button">Update Student</button>
        </div>
      </div>
    </div>
  );
}

export default OptionPage;
