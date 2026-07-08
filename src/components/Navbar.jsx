import {
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="navbar">
      <h2>Digital Wealth Management</h2>

      <div
        className="navIcons"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >
        {/* Notification */}
        <div
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => {
              setNotificationOpen(!notificationOpen);
              setProfileOpen(false);
            }}
          >
            <Notifications fontSize="large" />

            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "#e53935",
                color: "#fff",
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                fontSize: "11px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
              }}
            >
              3
            </span>
          </div>

          {notificationOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: "0",
                width: "330px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,.15)",
                zIndex: 1000,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "15px",
                  fontWeight: "bold",
                  background: "#f5f7fb",
                }}
              >
                Notifications
              </div>

              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                📈 SIP investment of ₹5,000 completed successfully.
              </div>

              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                💰 Salary of ₹80,000 credited to your account.
              </div>

              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                🤖 AI recommends increasing your SIP by ₹2,000/month.
              </div>

              <div
                style={{
                  padding: "15px",
                }}
              >
                🎯 You are 73% closer to achieving your Europe Trip goal.
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          style={{
            position: "relative",
          }}
        >
          <AccountCircle
            fontSize="large"
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              setProfileOpen(!profileOpen);
              setNotificationOpen(false);
            }}
          />

          {profileOpen && (
            <div
              style={{
                position: "absolute",
                top: "45px",
                right: "0",
                width: "220px",
                background: "#fff",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,.15)",
                overflow: "hidden",
                zIndex: 1000,
              }}
            >
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid #eee",
                }}
              >
                <b>Sathish Kumar</b>

                <br />

                <small>demo@wealthwise.ai</small>
              </div>

              {/* <div
                style={{
                  padding: "14px 15px",
                  cursor: "pointer",
                }}
              >
                👤 My Profile
              </div>

              <div
                style={{
                  padding: "14px 15px",
                  cursor: "pointer",
                }}
              >
                ⚙️ Settings
              </div> */}

              <div
                onClick={handleLogout}
                style={{
                  padding: "14px 15px",
                  cursor: "pointer",
                  color: "#e53935",
                  borderTop: "1px solid #eee",
                  fontWeight: "bold",
                }}
              >
                🚪 Logout
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}