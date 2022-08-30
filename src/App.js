import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard";

import { AdminRegister } from "./pages/register/AdminRegister";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />{" "}
          <Route path="/register" element={<AdminRegister />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
