import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Investment() {

  const investments = [
    {
      title: "Mutual Funds",
      risk: "Medium Risk",
      returnRate: "12% Expected Return",
      recommendation: "Highly Recommended",
    },
    {
      title: "Fixed Deposit",
      risk: "Low Risk",
      returnRate: "7% Expected Return",
      recommendation: "Safe Investment",
    },
    {
      title: "Gold ETF",
      risk: "Low Risk",
      returnRate: "8% Expected Return",
      recommendation: "Good for Diversification",
    },
    {
      title: "Equity Stocks",
      risk: "High Risk",
      returnRate: "15% Expected Return",
      recommendation: "Suitable for Long-term Growth",
    },
  ];

  // Invest Button Action
  const handleInvest = (title) => {
    alert(
      `✅ Investment Request Submitted

Product: ${title}

Thank you for choosing WealthWise AI.

Our AI has recorded your investment preference. In a real banking application, this request would be securely forwarded to the bank for further processing.`
    );
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2 style={{ marginBottom: "25px" }}>
          AI Investment Recommendations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
            marginBottom: "30px",
          }}
        >
          {investments.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>

              <br />

              <p>
                <b>Risk:</b> {item.risk}
              </p>

              <br />

              <p>
                <b>Expected Return:</b> {item.returnRate}
              </p>

              <br />

              <p>
                <b>AI Recommendation:</b> {item.recommendation}
              </p>

              <button
                className="actionBtn"
                style={{
                  marginTop: "25px",
                  width: "100%",
                }}
                onClick={() => handleInvest(item.title)}
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>

        <div className="aiBox">
          <h2>🤖 AI Portfolio Insight</h2>

          <br />

          <p>
            Based on your spending habits, age, income pattern and financial
            goals, your portfolio risk is <b>Moderate</b>.
          </p>

          <br />

          <h3>Recommended Portfolio Allocation</h3>

          <br />

          <ul style={{ lineHeight: "35px" }}>
            <li>✅ 40% Mutual Funds</li>
            <li>✅ 25% Fixed Deposit</li>
            <li>✅ 20% Gold ETF</li>
            <li>✅ 15% Equity Stocks</li>
          </ul>

          <br />

          <p>
            WealthWise AI recommends maintaining a diversified portfolio to
            achieve long-term financial growth while minimizing investment risk.
          </p>
        </div>
      </div>
    </div>
  );
}