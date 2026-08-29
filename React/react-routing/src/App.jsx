import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Course from "./pages/Course";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseStudent from "./pages/CourseStudent";
import ProtectedRoute from "./components/ProtectedRoute";
import Counter from "./pages/Counter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseName" element={<CourseDetailPage />} />
        <Route path="/course/:courseName/student" element={<CourseStudent />} />
        <Route path="/counter" element={<Counter />} />


        {/* nested routing start  */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          <Route path="users" element={<Users />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* nested routing end  */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;



// React App mein React Router DOM ki need kyun pari?
// SPA kya hoti hai?
// Routing kya hoti hai?


// React Router DOM installation -->  npm install react-router-dom

// <Routes>
// <Route path={"/login"} element={<Login />} />
// <Route path={"/signup"} element={<Signup />} />
//  </Routes>


// BrowserRouter kya hai?
// Routes kya hai?
// Route kya hai?
// Link kya hai?


// Nested Routing --> 
// Nested routing ki need kyun?
// Outlet kya hai?
// Ye internally kaise work karta hai?


// Dynamic Routing -->
// Dynamic Route mein :id
// Dynamic parameter kaise receive karenge?


// Protected Routing -->
// Dynamic Nested Routing -->


