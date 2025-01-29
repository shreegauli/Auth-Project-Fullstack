import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/forgotPassword";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <Routes>
          <Route path="/" element={<div>Welcome to Home Page</div>} />
          <Route path="/about" element={<div>About Us</div>} />
          <Route path="/contact" element={<div>Contact Us</div>} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
