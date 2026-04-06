import React, { useState } from 'react';
import './StudentManager.css';

const StudentManager = () => {
  // Initial students array
  const initialStudents = [
    { id: 1, name: 'Alice Johnson', course: 'React' },
    { id: 2, name: 'Bob Smith', course: 'JavaScript' },
    { id: 3, name: 'Charlie Brown', course: 'HTML/CSS' },
    { id: 4, name: 'Diana Prince', course: 'Node.js' },
    { id: 5, name: 'Eve Williams', course: 'Python' }
  ];

  // State management
  const [students, setStudents] = useState(initialStudents);
  const [newStudent, setNewStudent] = useState({
    id: '',
    name: '',
    course: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({
      ...newStudent,
      [name]: name === 'id' ? parseInt(value) || '' : value
    });
  };

  // Add student function
  const handleAddStudent = () => {
    // Validation
    if (!newStudent.id || !newStudent.name || !newStudent.course) {
      alert('Please fill in all fields');
      return;
    }

    // Check if ID already exists
    if (students.some(student => student.id === newStudent.id)) {
      alert('Student ID already exists');
      return;
    }

    // Add student to array
    setStudents([...students, newStudent]);

    // Clear input fields
    setNewStudent({
      id: '',
      name: '',
      course: ''
    });
  };

  // Delete student function
  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="student-manager-container">
      <h1>Student Manager</h1>

      {/* Input Section */}
      <div className="input-section">
        <h2>Add New Student</h2>
        <div className="form-group">
          <label htmlFor="id">Student ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={newStudent.id}
            onChange={handleInputChange}
            placeholder="Enter student ID"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newStudent.name}
            onChange={handleInputChange}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={newStudent.course}
            onChange={handleInputChange}
            placeholder="Enter course name"
          />
        </div>

        <button className="add-btn" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>

      {/* Display Section */}
      <div className="display-section">
        <h2>Students List</h2>
        {students.length === 0 ? (
          <p className="no-students">No students available</p>
        ) : (
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentManager;
