import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/PostList.css';

function FakePostList() {
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [uniqueUserIds, setUniqueUserIds] = useState([]);

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get('https://dummyjson.com/posts')
      .then((response) => {
        setPost(response.data.posts);
        // Extract unique user IDs
        const userIds = [...new Set(response.data.posts.map(post => post.userId))].sort((a, b) => a - b);
        setUniqueUserIds(userIds);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts =
    selectedUserId === null
      ? posts
      : posts.filter((post) => post.userId === selectedUserId);

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="post-list-container">
      <h2>Posts from DummyJSON API</h2>
      
      <div className="controls">
        <label htmlFor="userFilter">Filter by User ID: </label>
        <select
          id="userFilter"
          value={selectedUserId || ''}
          onChange={(e) => setSelectedUserId(e.target.value ? parseInt(e.target.value) : null)}
        >
          <option value="">All Users</option>
          {uniqueUserIds.map((userId) => (
            <option key={userId} value={userId}>
              User {userId}
            </option>
          ))}
        </select>
        <button className="refresh-button" onClick={fetchPosts}>
          Refresh Posts
        </button>
      </div>

      <div className="posts-grid">
        {filteredPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p className="post-body">{post.body}</p>
            <p className="post-user">User ID: {post.userId}</p>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="no-posts">No posts found for the selected user.</p>
      )}
    </div>
  );
}

export default FakePostList;
