import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
