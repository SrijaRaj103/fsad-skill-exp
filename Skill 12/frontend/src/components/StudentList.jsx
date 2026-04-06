import React, { useState } from 'react';
import { deleteStudent } from '../api';

function StudentList({ students, onDelete, onEdit }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setLoading(true);
      try {
        await deleteStudent(id);
        alert('Student deleted successfully!');
        onDelete();
      } catch (error) {
        console.error('Error deleting student:', error);
        alert('Error deleting student. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpdate = (student) => {
    onEdit(student);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="student-list">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p className="no-students">No students found. Add one to get started!</p>
      ) : (
        <table className="students-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td className="actions">
                  <button 
                    className="btn-update" 
                    onClick={() => handleUpdate(student)}
                    disabled={loading}
                  >
                    Update
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => handleDelete(student.id)}
                    disabled={loading}
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
  );
}

export default StudentList;
