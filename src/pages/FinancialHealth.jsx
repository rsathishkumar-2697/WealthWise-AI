import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function FinancialHealth() {
  const score = 92;

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2 style={{ marginBottom: "25px" }}>
          ❤️ Financial Health Score
        </h2>

        <div className="cards">

          <div className="card">
            <h4>Overall Score</h4>
            <h1 style={{ color: "#0d47a1" }}>{score}/100</h1>
          </div>

          <div className="card">
            <h4>Emergency Fund</h4>
            <h2>Excellent</h2>
          </div>

          <div className="card">
            <h4>Savings Ratio</h4>
            <h2>28%</h2>
          </div>

          <div className="card">
            <h4>Investment Risk</h4>
            <h2>Moderate</h2>
          </div>

        </div>

        <div className="aiBox">

          <h2>📊 Financial Summary</h2>

          <br/>

          <table style={{width:"100%",borderCollapse:"collapse"}}>

            <tbody>

              <tr>
                <td>Total Income</td>
                <td>₹80,000</td>
              </tr>

              <tr>
                <td>Monthly Expenses</td>
                <td>₹45,000</td>
              </tr>

              <tr>
                <td>Monthly Savings</td>
                <td>₹35,000</td>
              </tr>

              <tr>
                <td>Net Worth</td>
                <td>₹8,45,000</td>
              </tr>

            </tbody>

          </table>

        </div>

        <div className="aiBox">

          <h2>🤖 AI Financial Suggestions</h2>

          <ul style={{marginTop:"20px"}}>

            <li>✅ Your financial health is Excellent.</li>

            <li>✅ Increase SIP investment by ₹2,000/month.</li>

            <li>✅ Emergency fund is sufficient for 5 months.</li>

            <li>✅ Diversify investments with Gold ETF.</li>

            <li>✅ Continue maintaining a savings ratio above 25%.</li>

          </ul>

        </div>

      </div>

    </div>
  );
}