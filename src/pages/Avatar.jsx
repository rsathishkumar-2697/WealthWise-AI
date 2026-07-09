import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactAvatar from "react-avatar";
import { Send, Mic, VolumeUp } from "@mui/icons-material";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatBox from "../components/ChatBox";
import "../styles/dashboard.css";

export default function Avatar() {
  const location = useLocation();

  useEffect(() => {
    window.speechSynthesis.cancel();
  }, [location]);
  const [question, setQuestion] = useState("");
  const [analysis, setAnalysis] = useState(`
👋 Hello Sathish,

I analyzed your spending behaviour, investments, income pattern and financial goals.

Recommended Actions

✅ Increase SIP by ₹2,000 every month.
✅ Reduce shopping expenses by ₹3,500/month.
✅ Maintain emergency fund for 5 months.
✅ Invest idle balance into Balanced Mutual Funds.
✅ Continue long-term investment strategy.
`);

  const speak = (text) => {
    window.speechSynthesis.cancel();

    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = "en-IN";
      speech.rate = 1;
      speech.pitch = 1;
      speech.volume = 1;
      window.speechSynthesis.speak(speech);
    }
  };

  // Talk Button
  const handleTalk = () => {
    speak(
      "Hello Sathish. I am WealthWise AI. I analyzed your financial profile. Your financial health score is 92. I recommend increasing your SIP by two thousand rupees every month."
    );
  };

  // Listen Button
  const handleListen = () => {
    speak(analysis);
  };

  // Stop Voice
  const stopVoice = () => {
    window.speechSynthesis.cancel();
  };

  // AI Quick Actions
  const analyzeSpending = () => {
    const text = `
Spending Analysis

Monthly Income : ₹60,000

Food : ₹8,000
Shopping : ₹9,500
Entertainment : ₹5,000

Recommendation:
Reduce shopping expenses by ₹3,500.
`;

    setAnalysis(text);
    speak(text);
  };

  const investmentAdvice = () => {
    const text = `
Investment Advice

Current SIP : ₹5,000

Recommended SIP : ₹7,000

Balanced Mutual Funds are recommended.

Expected long term growth is good.
`;

    setAnalysis(text);
    speak(text);
  };

  const retirementPlanning = () => {
    const text = `
Retirement Planning

Target Retirement Age : 60 Years

Recommended Monthly Investment :
₹10,000

Current retirement readiness is 76%.
`;

    setAnalysis(text);
    speak(text);
  };

  const financialHealth = () => {
    const text = `
Financial Health Score

Overall Score : 92 out of 100

Savings : Excellent

Investments : Good

Emergency Fund : Strong

Credit Utilization : Healthy
`;

    setAnalysis(text);
    speak(text);
  };

  // Search Box
  const handleSend = () => {
    if (!question.trim()) return;

    let answer = "";

    const q = question.toLowerCase();

    if (q.includes("sip")) {
      answer =
        "Recommended SIP is ₹7,000 every month based on your current income.";
    } else if (q.includes("loan")) {
      answer =
        "Try to close high-interest loans first before making new investments.";
    } else if (q.includes("mutual")) {
      answer =
        "Balanced Mutual Funds are recommended for medium-risk investors.";
    } else if (q.includes("score")) {
      answer =
        "Your Financial Health Score is 92 out of 100.";
    } else {
      answer =
        "Thank you for your question. WealthWise AI recommends maintaining disciplined savings and investments.";
    }

    setAnalysis(answer);
    speak(answer);
    setQuestion("");
  };

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar />

        <div className="aiBox">

          <div style={{ textAlign: "center" }}>
            <ReactAvatar
              name="WealthWise AI"
              size="130"
              round
              color="#0d47a1"
              textSizeRatio={2}
            />

            <h2 style={{ marginTop: 20, color: "#0d47a1" }}>
              WealthWise AI Avatar
            </h2>

            <p>Your Personal AI Financial Advisor</p>

            <div
              style={{
                background: "#e8f5e9",
                padding: 15,
                marginTop: 20,
                borderRadius: 10,
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
              gap: 15,
              marginTop: 30,
              flexWrap: "wrap",
            }}
          >
            <button className="actionBtn" onClick={handleTalk}>
              <Mic /> Talk to AI
            </button>

            <button className="actionBtn" onClick={handleListen}>
              <VolumeUp /> Listen
            </button>

            <button className="actionBtn" onClick={stopVoice}>
              Stop
            </button>
          </div>

          {/* Analysis */}

          <div
            style={{
              background: "#eef3f8",
              padding: 25,
              marginTop: 30,
              borderRadius: 12,
              whiteSpace: "pre-line",
            }}
          >
            <h3>Today's AI Financial Analysis</h3>

            <p>{analysis}</p>
          </div>

          {/* Quick Actions */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
              marginTop: 30,
            }}
          >
            <button className="actionBtn" onClick={analyzeSpending}>
              📊 Analyze Spending
            </button>

            <button className="actionBtn" onClick={investmentAdvice}>
              📈 Investment Advice
            </button>

            <button className="actionBtn" onClick={retirementPlanning}>
              🏦 Retirement Planning
            </button>

            <button className="actionBtn" onClick={financialHealth}>
              ❤️ Financial Health
            </button>
          </div>

          {/* Search */}

          <div
            style={{
              display: "flex",
              marginTop: 35,
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask your AI Financial Advisor..."
              style={{
                flex: 1,
                padding: 15,
                borderRadius: 10,
                border: "1px solid #ccc",
              }}
            />

            <button
              className="actionBtn"
              onClick={handleSend}
              style={{
                marginLeft: 10,
                width: 60,
              }}
            >
              <Send />
            </button>
          </div>

          <ChatBox />
        </div>
      </div>
    </div>
  );
}