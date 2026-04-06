import React, { useState } from 'react';
import LocalUserList from './LocalUserList';
import UserList from './UserList';
import FakePostList from './FakePostList';
import '../styles/Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('local');

  return (
    <div className="dashboard">
      <div className="navigation">
        <button
          className={`nav-button ${activeTab === 'local' ? 'active' : ''}`}
          onClick={() => setActiveTab('local')}
        >
          Local Users
        </button>
        <button
          className={`nav-button ${activeTab === 'api' ? 'active' : ''}`}
          onClick={() => setActiveTab('api')}
        >
          Users API
        </button>
        <button
          className={`nav-button ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Fake API Posts
        </button>
      </div>

      <div className="content">
        {activeTab === 'local' && <LocalUserList />}
        {activeTab === 'api' && <UserList />}
        {activeTab === 'posts' && <FakePostList />}
      </div>
    </div>
  );
}

export default Dashboard;
