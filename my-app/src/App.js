// import './App.css';

// function App() {
//   return (
//     <>
//     </>
//   );
// }

// export default App;


import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
// import OptionPage from './components/OptionPage'; // Import OptionPage
import CreateExamPage from './components/CreateExamPage'; // Import the new page component
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes> {/* Set up routing */}
      {/* <Route path="/" element={<OptionPage />} /> */}
      <Route path="/create-exam" element={<CreateExamPage />} /> Define the route for Create Exam
    </Routes>
  );
}

export default App;
