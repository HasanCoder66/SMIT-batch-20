import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;