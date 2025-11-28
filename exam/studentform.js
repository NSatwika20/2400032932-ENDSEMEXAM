import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentForm from './StudentForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/studentform" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
