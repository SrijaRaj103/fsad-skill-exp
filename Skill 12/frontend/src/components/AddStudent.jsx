import React, { useState, useEffect } from 'react';
import { addStudent, updateStudent } from '../api';

function AddStudent({ selectedStudent, onSuccess, onClear }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedStudent) {
      setFormData({
        name: selectedStudent.name,
        email: selectedStudent.email,
        course: selectedStudent.course,
      });
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.course.trim()) {
      setError('All fields are required');
      setLoading(false);
      return;
    }

    try {
      if (selectedStudent) {
        // Update existing student
        await updateStudent(selectedStudent.id, formData);
        alert('Student updated successfully!');
      } else {
        // Add new student
        await addStudent(formData);
        alert('Student added successfully!');
      }

      // Clear form
      setFormData({
        name: '',
        email: '',
        course: '',
      });
      onClear();
      onSuccess();
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      course: '',
    });
    setError('');
    onClear();
  };

  return (
    <div className="add-student">
      <h2>{selectedStudent ? 'Update Student' : 'Add New Student'}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter student email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
        </div>

        <div className="button-group">
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : selectedStudent ? 'Update Student' : 'Add Student'}
          </button>
          <button type="button" onClick={handleClear} className="clear-btn">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
