import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ users, onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        onLogin(user);
        navigate(user.role === 'admin' ? '/admin-dashboard' : user.role === 'customer' ? '/customer-dashboard' : '/user-dashboard');
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={() => navigate('/register')}>Register</button>
    </form>
  );
};

export default LoginForm;
