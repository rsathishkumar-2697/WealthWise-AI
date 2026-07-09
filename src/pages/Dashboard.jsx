import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import "../styles/dashboard.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
export default function Dashboard() {
  const handleGenerateReport = () => {
  alert(`🤖 AI Wealth Report

Financial Health Score: 92/100

Summary:
• Net Worth: ₹8,45,000
• Monthly Savings: ₹52,000
• Investments: ₹5,10,000

AI Recommendations:
• Increase SIP by ₹2,000/month.
• Reduce dining expenses by 20%.
• Maintain an emergency fund for 5 months.
• Invest idle savings into balanced mutual funds.

This is a Proof of Concept (PoC). In the production version, a detailed AI-generated wealth report would be available.`);
};
    const pieData = [
  { name: "Mutual Funds", value: 45 },
  { name: "FD", value: 25 },
  { name: "Gold", value: 15 },
  { name: "Stocks", value: 15 },
];

const barData = [
  { month: "Jan", saving: 18000 },
  { month: "Feb", saving: 22000 },
  { month: "Mar", saving: 27000 },
  { month: "Apr", saving: 31000 },
  { month: "May", saving: 34000 },
  { month: "Jun", saving: 38000 },
];

const COLORS = ["#0d47a1", "#1976d2", "#42a5f5", "#90caf9"];
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />
        <div
  style={{
    background: "linear-gradient(90deg,#0d47a1,#1976d2)",
    color: "white",
    padding: "25px",
    borderRadius: "16px",
    marginBottom: "25px",
  }}
>
  <h2>Welcome back 👋</h2>

  <p style={{ marginTop: "10px" }}>
    Your financial health is excellent. AI has generated new investment recommendations for today.
  </p>
</div>

        <div className="cards">
          <StatCard title="Net Worth" value="₹8,45,000" />
          <StatCard title="Monthly Savings" value="₹52,000" />
          <StatCard title="Investments" value="₹5,10,000" />
          <StatCard title="Financial Score" value="92 / 100" />
        </div>

        <div className="aiBox">
          <h3>🤖 AI Wealth Advisor</h3>

          <p>
            Good Morning, Sathishkumar 👋
          </p>

          <br />

          <p>
            Based on your spending behaviour and savings pattern, here are my
            recommendations:
          </p>

          <br />

          <ul>
            <li>✅ Increase your SIP by ₹2,000/month.</li>
            <li>✅ You can save nearly ₹48,000 annually by reducing dining expenses by 20%.</li>
            <li>✅ Emergency fund covers approximately 5 months of expenses.</li>
            <li>✅ Consider investing 15% of idle savings into a balanced mutual fund.</li>
          </ul>
        </div>

        <button
  className="actionBtn"
  onClick={handleGenerateReport}
  style={{
    marginTop: "20px",
  }}
>
  📄 Generate AI Report
</button>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "25px",
  }}
>
  <div className="aiBox">
    <h2>📊 Portfolio Allocation</h2>

    <PieChart width={380} height={280}>
      <Pie
        data={pieData}
        dataKey="value"
        outerRadius={100}
        label
      >
        {pieData.map((entry, index) => (
          <Cell key={index} fill={COLORS[index]} />
        ))}
      </Pie>

      <Tooltip />
    </PieChart>
  </div>

  <div className="aiBox">
    <h2>📈 Monthly Savings Trend</h2>

    <BarChart width={420} height={280} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="saving" fill="#0d47a1" />
    </BarChart>
  </div>
</div>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "25px",
  }}
>
  <div className="aiBox">

    <h2>💳 Recent Transactions</h2>

    <table
      style={{
        width: "100%",
        marginTop: "20px",
        lineHeight: "42px",
      }}
    >
      <tbody>
        <tr>
          <td>💼 Salary</td>
          <td style={{ color: "green" }}>+ ₹80,000</td>
        </tr>

        <tr>
          <td>📈 SIP</td>
          <td style={{ color: "red" }}>- ₹5,000</td>
        </tr>

        <tr>
          <td>🛒 Amazon</td>
          <td style={{ color: "red" }}>- ₹2,499</td>
        </tr>

        <tr>
          <td>⚡ EB Bill</td>
          <td style={{ color: "red" }}>- ₹2,100</td>
        </tr>

        <tr>
          <td>🍔 Swiggy</td>
          <td style={{ color: "red" }}>- ₹650</td>
        </tr>

      </tbody>
    </table>

  </div>

  <div className="aiBox">

    <h2>📢 AI Insights</h2>

    <br/>

    <p>✅ Financial Health Score : <b>92/100</b></p>

    <br/>

    <p>✅ Savings Ratio : <b>28%</b></p>

    <br/>

    <p>✅ Portfolio Risk : <b>Moderate</b></p>

    <br/>

    <p>✅ Recommended SIP : <b>₹10,000/month</b></p>

    <br/>

    <p>✅ Goal Achievement Probability : <b>87%</b></p>

  </div>

</div>
       <div className="aiBox">
  <h2>Financial Goals</h2>

  <p>🏠 Home Purchase - 58%</p>
  <progress value="58" max="100" style={{ width: "100%" }} />

  <br /><br />

  <p>✈️ Europe Trip - 73%</p>
  <progress value="73" max="100" style={{ width: "100%" }} />

  <br /><br />

  <p>👴 Retirement Fund - 41%</p>
  <progress value="41" max="100" style={{ width: "100%" }} />
</div>
<div
  style={{
    marginTop: "40px",
    textAlign: "center",
    color: "#777",
    padding: "25px",
  }}
>
  <hr />

  <br />

  <h3>WealthWise AI</h3>

  <p>AI Powered Digital Wealth Management Platform</p>

  <p>
    Developed by <b>Nexora Minds</b>
  </p>

</div> 
      </div>
    </div>
  );
}