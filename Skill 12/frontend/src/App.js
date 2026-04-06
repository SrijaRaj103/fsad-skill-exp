import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [refreshStudents, setRefreshStudents] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fetch students whenever refreshStudents changes
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:8080/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, [refreshStudents]);

  const handleRefresh = () => {
    setRefreshStudents(refreshStudents + 1);
    setSelectedStudent(null);
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      <div className="container">
        <div className="form-section">
          <AddStudent 
            selectedStudent={selectedStudent}
            onSuccess={handleRefresh}
            onClear={() => setSelectedStudent(null)}
          />
        </div>
        <div className="list-section">
          <StudentList 
            students={students}
            onDelete={handleRefresh}
            onEdit={(student) => setSelectedStudent(student)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
