import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../styles/dashboard.css";

export default function Profile() {

  const handleEditProfile = () => {
    alert(
      "✅ Profile Update\n\nThis is a Proof of Concept (PoC).\nIn the production version, users can securely update their personal details, KYC information, and investment preferences."
    );
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <h2 style={{ marginBottom: "25px" }}>👤 User Profile</h2>

        <div className="cards">
          <div className="card">
            <h4>Customer Name</h4>
            <h2>Sathish Kumar</h2>
          </div>

          <div className="card">
            <h4>Risk Profile</h4>
            <h2>Moderate</h2>
          </div>

          <div className="card">
            <h4>Monthly Income</h4>
            <h2>₹80,000</h2>
          </div>

          <div className="card">
            <h4>Occupation</h4>
            <h2>Software Engineer</h2>
          </div>
        </div>

        <div className="aiBox">
          <h2>📄 Personal Information</h2>

          <br />

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              lineHeight: "45px",
            }}
          >
            <tbody>
              <tr>
                <td><b>Email</b></td>
                <td>sathish@example.com</td>
              </tr>

              <tr>
                <td><b>Phone</b></td>
                <td>+91 XXXXX XXXXX</td>
              </tr>

              <tr>
                <td><b>PAN</b></td>
                <td>ABCDE1234X</td>
              </tr>

              <tr>
                <td><b>Investment Preference</b></td>
                <td>Balanced Portfolio</td>
              </tr>

              <tr>
                <td><b>Financial Goal</b></td>
                <td>Long Term Wealth Creation</td>
              </tr>
            </tbody>
          </table>

          <button
            className="actionBtn"
            onClick={handleEditProfile}
            style={{
              marginTop: "25px",
            }}
          >
            Edit Profile
          </button>
        </div>

        <div className="aiBox">
          <h2>🤖 AI Profile Summary</h2>

          <br />

          <ul style={{ lineHeight: "35px" }}>
            <li>✅ Moderate Risk Investor</li>
            <li>✅ Strong Monthly Savings</li>
            <li>✅ Emergency Fund Available</li>
            <li>✅ Eligible for Premium Wealth Advisory</li>
            <li>✅ Recommended Monthly SIP: ₹10,000</li>
          </ul>
        </div>
      </div>
    </div>
  );
}