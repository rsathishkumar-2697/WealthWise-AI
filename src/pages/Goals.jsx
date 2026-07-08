import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

const goals = [
  {
    name: "🏠 Buy Dream House",
    target: "₹50,00,000",
    progress: 58,
  },
  {
    name: "🚗 Buy New Car",
    target: "₹12,00,000",
    progress: 42,
  },
  {
    name: "✈️ Europe Vacation",
    target: "₹5,00,000",
    progress: 80,
  },
  {
    name: "👴 Retirement Fund",
    target: "₹1,00,00,000",
    progress: 35,
  },
];

export default function Goals() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2 style={{ marginBottom: "25px" }}>
          🎯 Financial Goals
        </h2>

        {goals.map((goal, index) => (
          <div className="aiBox" key={index}>
            <h3>{goal.name}</h3>

            <p>Target Amount : {goal.target}</p>

            <div
              style={{
                background: "#ddd",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  width: `${goal.progress}%`,
                  background: "#0d47a1",
                  color: "white",
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                {goal.progress}%
              </div>
            </div>
          </div>
        ))}

        <div className="aiBox">

          <h2>🤖 AI Goal Planner</h2>

          <br />

          <p>
            If you increase your monthly investment by
            <b> ₹5,000</b>,
            you can achieve your retirement goal
            <b> 4 years earlier.</b>
          </p>

          <br />

          <p>
            Your Europe Vacation goal is on track and expected
            to be completed within
            <b> 8 months.</b>
          </p>

        </div>

      </div>

    </div>
  );
}