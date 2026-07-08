import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Avatar from "./pages/Avatar";
import Spending from "./pages/Spending";
import Investment from "./pages/Investment";
import FinancialHealth from "./pages/FinancialHealth";
import Goals from "./pages/Goals";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/spending" element={<Spending />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/financial-health" element={<FinancialHealth />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;