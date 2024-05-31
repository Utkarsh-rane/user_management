import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import RegistrationForm from './Components/RegistrationForm';
import UserDashboard from './Components/User';
import AdminDashboard from './Components/Admin';
import { initialUsers } from './Components/UserData';

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setCurrentUser(updatedUser);
  };

  const handleCreateUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm users={users} onLogin={handleLogin} />} />
        <Route path="/register" element={<RegistrationForm users={users} onRegister={handleRegister} />} />
        <Route
          path="/user-dashboard"
          element={currentUser && currentUser.role === 'user' ? (
            <UserDashboard user={currentUser} onLogout={handleLogout} onUpdateUser={handleUpdateUser} />
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route
          path="/admin-dashboard"
          element={currentUser && currentUser.role === 'admin' ? (
            <AdminDashboard
            user={currentUser}
              users={users}
              setUsers={setUsers} // Pass setUsers here
              onLogout={handleLogout}
              onCreateUser={handleCreateUser}
              onUpdateUser={handleUpdateUser}
              onDeleteUser={handleDeleteUser}
            />
          ) : (
            <Navigate to="/login" />
          )}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
