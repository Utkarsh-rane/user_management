
import React, { useState } from 'react';

const AddUserForm = ({ onCreateUser }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    role: 'user',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = () => {
    onCreateUser(newUser);
    setNewUser({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      role: 'user',
    });
  };

  return (
    <div>
      <h2>Create New User</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={newUser.username} onChange={handleInputChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={newUser.password} onChange={handleInputChange} />
        </div>
        <div>
          <label>Role:</label>
          <select name="role" value={newUser.role} onChange={handleInputChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="button" onClick={handleCreateUser}>Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
