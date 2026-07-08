import ReactAvatar from "react-avatar";
import { Send, Mic, VolumeUp } from "@mui/icons-material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import "../styles/dashboard.css";

export default function Avatar() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="aiBox">

          {/* Avatar Section */}
          <div style={{ textAlign: "center" }}>

            <ReactAvatar
              name="WealthWise AI"
              size="130"
              round={true}
              color="#0d47a1"
              textSizeRatio={2}
            />

            <h2
              style={{
                marginTop: "20px",
                color: "#0d47a1",
              }}
            >
              WealthWise AI Avatar
            </h2>

            <p
              style={{
                color: "#666",
                marginTop: "8px",
              }}
            >
              Your Personal AI Financial Advisor
            </p>

            <div
              style={{
                marginTop: "25px",
                background: "#e8f5e9",
                padding: "15px",
                borderRadius: "10px",
                color: "#2e7d32",
                fontWeight: "bold",
              }}
            >
              ✅ AI Connected • Personalized Financial Analysis Ready
            </div>

          </div>

          {/* Voice Buttons */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
              flexWrap: "wrap",
            }}
          >

            <button className="actionBtn">
              <Mic style={{ marginRight: "8px" }} />
              Talk to AI
            </button>

            <button className="actionBtn">
              <VolumeUp style={{ marginRight: "8px" }} />
              Listen
            </button>

          </div>

          {/* AI Recommendation */}

          <div
            style={{
              background: "#eef3f8",
              padding: "25px",
              borderRadius: "15px",
              marginTop: "35px",
            }}
          >
            <h3 style={{ color: "#0d47a1" }}>
              Today's AI Financial Analysis
            </h3>

            <p style={{ marginTop: "20px" }}>
              👋 Hello <b>Sathish</b>,
            </p>

            <p style={{ marginTop: "12px" }}>
              I analyzed your spending behaviour, investments, income pattern,
              and financial goals.
            </p>

            <br />

            <h4>Recommended Actions</h4>

            <ul
              style={{
                marginTop: "18px",
                lineHeight: "34px",
              }}
            >
              <li>✅ Increase SIP by ₹2,000 every month.</li>

              <li>✅ Reduce shopping expenses by ₹3,500/month.</li>

              <li>✅ Maintain emergency fund for 5 months.</li>

              <li>✅ Invest idle balance into Balanced Mutual Funds.</li>

              <li>✅ Continue long-term investment strategy.</li>
            </ul>
          </div>

          {/* Quick Actions */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "35px",
            }}
          >
            <button className="actionBtn">
              📊 Analyze Spending
            </button>

            <button className="actionBtn">
              📈 Investment Advice
            </button>

            <button className="actionBtn">
              🏦 Retirement Planning
            </button>

            <button className="actionBtn">
              ❤️ Financial Health
            </button>
          </div>

          {/* AI Search */}

          <div
            style={{
              display: "flex",
              marginTop: "35px",
            }}
          >
            <input
              placeholder="Ask your AI Financial Advisor..."
              style={{
                flex: 1,
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "15px",
              }}
            />

            <button
              className="actionBtn"
              style={{
                marginLeft: "12px",
                width: "65px",
              }}
            >
              <Send />
            </button>
          </div>

          {/* Chat */}

          <ChatBox />

        </div>
      </div>
    </div>
  );
}