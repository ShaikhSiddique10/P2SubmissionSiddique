import React from 'react';
import './dashboard.css'; // Importing the dashboard CSS

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Your Auctions</h3>
          <p>View and manage your posted auctions</p>
          <button>Go to Auctions</button>
        </div>
        <div className="card">
          <h3>Account Settings</h3>
          <p>Manage your account information</p>
          <button>Manage Settings</button>
        </div>
        <div className="card">
          <h3>Messages</h3>
          <p>View your messages from bidders</p>
          <button>View Messages</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;