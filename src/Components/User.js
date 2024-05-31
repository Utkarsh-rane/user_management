import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = ({ user, onLogout, onUpdateUser }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSave = () => {
    onUpdateUser(updatedUser);
    setIsEditing(false);
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Cancel' : 'Update Profile'}
      </button>
      <button onClick={handleLogout}>Logout</button>
      {isEditing && (
        <div>
          <h2>Update Profile</h2>
          <form>
            <div>
              <label>First Name: </label>
              <input
                type="text"
                name="firstName"
                value={updatedUser.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Last Name: </label>
              <input
                type="text"
                name="lastName"
                value={updatedUser.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Username: </label>
              <input
                type="text"
                name="username"
                value={updatedUser.username}
                onChange={handleInputChange}
              />
            </div>
            <button type="button" onClick={handleSave}>Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
