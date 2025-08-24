import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Notices from "./pages/Notices";
import Announcements from "./pages/Announcements";
import Progress from "./pages/Progress";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      {/* public */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private with layout */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <Layout><Students /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <ProtectedRoute>
              <Layout><AddStudent /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/notices"
          element={
            <ProtectedRoute>
              <Layout><Notices /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/announcements"
          element={
            <ProtectedRoute>
              <Layout><Announcements /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/progress"
          element={
            <ProtectedRoute>
              <Layout><Progress /></Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <Layout><About /></Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
