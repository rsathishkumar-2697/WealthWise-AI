import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Spending() {

  const handleAnalyze = () => {
    alert(
      `📊 Spending Analysis Completed

AI Summary:

• Food expenses are higher than your monthly average.
• Shopping expenses can be reduced by approximately ₹3,500 per month.
• Your savings ratio is healthy at 28%.
• Financial discipline is rated as Excellent.

Recommendation:
Increase your monthly SIP by ₹5,000 using the savings from reduced discretionary spending.

This is a Proof of Concept (PoC).`
    );
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="aiBox">
          <h2>📊 Monthly Spending Analysis</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
              lineHeight: "45px",
            }}
          >
            <thead>
              <tr>
                <th align="left">Category</th>
                <th align="left">Amount</th>
                <th align="left">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>🍔 Food</td>
                <td>₹12,500</td>
                <td style={{ color: "red" }}>High</td>
              </tr>

              <tr>
                <td>🛒 Shopping</td>
                <td>₹8,400</td>
                <td style={{ color: "orange" }}>Medium</td>
              </tr>

              <tr>
                <td>🚗 Transport</td>
                <td>₹4,200</td>
                <td style={{ color: "green" }}>Normal</td>
              </tr>

              <tr>
                <td>💡 Bills</td>
                <td>₹6,300</td>
                <td style={{ color: "green" }}>Normal</td>
              </tr>

              <tr>
                <td>🎬 Entertainment</td>
                <td>₹3,000</td>
                <td style={{ color: "green" }}>Normal</td>
              </tr>
            </tbody>
          </table>

          <button
            className="actionBtn"
            onClick={handleAnalyze}
            style={{
              marginTop: "25px",
            }}
          >
            🔄 Analyze Again
          </button>
        </div>

        <div className="aiBox">
          <h2>🤖 AI Insights</h2>

          <ul
            style={{
              marginTop: "20px",
              lineHeight: "35px",
            }}
          >
            <li>✅ Dining expenses increased by 18% this month.</li>
            <li>✅ Save approximately ₹3,500/month by reducing online shopping.</li>
            <li>✅ Your monthly savings ratio is 28%.</li>
            <li>✅ Financial discipline is rated as Excellent.</li>
          </ul>
        </div>

        <div className="aiBox">
          <h2>💰 AI Recommendation</h2>

          <p style={{ marginTop: "20px", lineHeight: "30px" }}>
            Based on your transaction history, if you reduce food and shopping
            expenses by just 10%, you could invest an additional ₹5,000 every
            month into SIPs and accumulate higher long-term wealth.
          </p>
        </div>
      </div>
    </div>
  );
}