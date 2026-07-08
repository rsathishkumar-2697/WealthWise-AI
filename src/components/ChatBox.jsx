import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      sender: "AI",
      text: "👋 Hello! I'm WealthWise AI. Ask me about savings, investments or financial planning.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "You",
      text: input,
    };

    setMessages((prev) => [
      ...prev,
      userMsg,
      {
        sender: "AI",
        text: "⏳ Analyzing your financial data...",
      },
    ]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          sender: "AI",
          text:
            "✅ Based on your financial profile, I recommend increasing your SIP by ₹2,000/month, reducing unnecessary expenses by 10%, and maintaining an emergency fund covering at least 6 months of expenses.",
        },
      ]);
    }, 1500);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "25px",
        marginTop: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
      }}
    >
      <h3 style={{ color: "#0d47a1", marginBottom: "15px" }}>
        AI Financial Chat
      </h3>

      <div
        style={{
          height: "280px",
          overflowY: "auto",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "15px",
          background: "#fafafa",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
            }}
          >
            <b
              style={{
                color: msg.sender === "AI" ? "#0d47a1" : "#222",
              }}
            >
              {msg.sender}
            </b>

            <p style={{ marginTop: "5px" }}>{msg.text}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask your AI Wealth Advisor..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <button
          className="actionBtn"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}