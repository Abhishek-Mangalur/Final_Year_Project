import React from "react";
import StudentForm from "./components/StudentForm";
import TitleCheck from "./components/TitleCheck"; 

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Transforming Student Evaluation</h1>
      {/* Render both components */}
      <TitleCheck />
      {/* <StudentForm /> */}
    </div>
  );
}

export default App;
