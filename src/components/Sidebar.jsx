import { NavLink } from "react-router-dom";
import {
  Dashboard,
  AccountBalanceWallet,
  Savings,
  Flag,
  SmartToy,
  Favorite,
  Person,
} from "@mui/icons-material";

const menu = [
  { name: "Dashboard", icon: <Dashboard />, path: "/dashboard" },
  { name: "Investments", icon: <AccountBalanceWallet />, path:"/investment" },
  { name: "Spending", icon: <Savings />, path:"/spending" },
  { name: "Goals", icon: <Flag />, path:"/goals" },
  { name: "AI Avatar", icon: <SmartToy />, path: "/avatar" },
  { name: "Financial Health", icon: <Favorite />, path:"/financial-health" },
  { name: "Profile", icon: <Person />, path: "/profile" },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>💎 WealthWise AI</h2>

      {menu.map((item, index) => (
        <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
                isActive ? "menuItem activeMenu" : "menuItem"
            }
            >
            {item.icon}
            <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
}