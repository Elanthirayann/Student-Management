import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register"
import Dashboard from "./Dashboard";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/updateStudent/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
