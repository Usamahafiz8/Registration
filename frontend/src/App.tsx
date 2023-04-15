import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Registration from "./pages/registeration";
import Login from "./pages/login";
import Customers from "./pages/customersDashboard";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/dashboard" element={<Customers/>} />
        
        {/* <Route path="/Home" element={<ProtectedRoute> <Home /> </ProtectedRoute>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
