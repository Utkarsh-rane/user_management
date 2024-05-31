import React, { useState } from 'react';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';

const AdminDashboard = ({ user, users, setUsers, onLogout, onCreateUser, onUpdateUser, onDeleteUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDelete = (userId) => {
    onDeleteUser(userId);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsEditing(false);
    setSelectedUser(null);
  };

  const handleCreateUser = (newUser) => {
    onCreateUser({ ...newUser, id: users.length + 1 });
  };

  return (
    <div>
      <h1>Welcome, Admin {user.firstName}</h1>
      <button onClick={onLogout}>Logout</button>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing ? (
        <EditUserForm user={selectedUser} onUpdateUser={handleUpdateUser} />
      ) : (
        <AddUserForm onCreateUser={handleCreateUser} />
      )}
    </div>
  );
};

export default AdminDashboard;
