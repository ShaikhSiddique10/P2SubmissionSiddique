import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import PostAuction from './components/PostAuction';
import WelcomePage from './components/WelcomePage';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/signin" />;
};

const App = () => {
  const location = useLocation(); // Get the current location (path)
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if the user is authenticated

  const isWelcomePage = location.pathname === '/';  // Check if on the WelcomePage

  return (
    <>
      {/* Only render the Navbar if not on the WelcomePage, Signin, or Signup */}
      {!isWelcomePage && !location.pathname.includes("/signin") && !location.pathname.includes("/signup") && <Navbar />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protect Dashboard route: Only accessible if authenticated */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
        />

        {/* Protect Post Auction route: Only accessible if authenticated */}
        <Route
          path="/post-auction"
          element={<ProtectedRoute element={<PostAuction />} isAuthenticated={isAuthenticated} />}
        />

        {/* Handle unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
