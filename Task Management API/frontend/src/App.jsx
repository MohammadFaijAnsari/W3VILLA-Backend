import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Home from "./components/Home.jsx";
import Addtask from "./components/Addtask.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          {/* Protected Home Route */}
          <Route path="/" element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/dashboard" element={ <ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/viewalltask" element={ <ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/add-task" element={ <ProtectedRoute><Addtask/></ProtectedRoute>}/>
          <Route path="/userprofile" element={ <ProtectedRoute><Profile/></ProtectedRoute>}/>
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
