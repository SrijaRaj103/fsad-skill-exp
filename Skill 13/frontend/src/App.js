import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  const API_URL = '/api';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch welcome message
      const res = await fetch(`${API_URL}/hello`);
      
      if (!res.ok) throw new Error(`API Error: ${res.status}`);
      const data = await res.json();
      setMessage(data.message || data);

      // Fetch users list
      const usersRes = await fetch(`${API_URL}/users`);
      
      if (usersRes.ok) {
        const usersData = await usersRes.json();
        setUsers(Array.isArray(usersData) ? usersData : []);
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Full-Stack Application</h1>
        <p>Spring Boot Backend + React Frontend</p>
        
        <div className="container">
          <div className="api-message">
            {loading && <p>Loading data from API...</p>}
            {error && (
              <div className="error">
                <p>❌ Error: {error}</p>
                <button onClick={fetchData}>Retry</button>
              </div>
            )}
            {!loading && !error && message && (
              <div className="success">
                <p>✅ API Response: <strong>{message}</strong></p>
              </div>
            )}
          </div>

          {users.length > 0 && (
            <div className="users-section">
              <h2>Users from Backend:</h2>
              <ul>
                {users.map((user, idx) => (
                  <li key={idx}>{user.name || user.id || user}</li>
                ))}
              </ul>
            </div>
          )}

          <button onClick={fetchData} className="refresh-btn">
            Refresh Data
          </button>
        </div>

        <p className="info">
          API URL: <code>{API_URL}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
