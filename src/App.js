import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailSettings from './components/EmailSettings';
import WarmupDashboard from './components/WarmupDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmailSettings />} />
          <Route path="/WarmupDashborad" element={<WarmupDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
