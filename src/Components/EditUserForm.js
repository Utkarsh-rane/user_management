import React, { useState } from 'react';

const EditUserForm = ({ user, onUpdateUser }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={editedUser.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={editedUser.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Role: </label>
          <select
            name="role"
            value={editedUser.role}
            onChange={handleInputChange}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="button" onClick={handleSave}>Save Changes</button>
      </form>
    </div>
  );
};

export default EditUserForm;
