import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (!valid) return;

    if (
      email === "demo@wealthwise.ai" &&
      password === "demo@123"
    ) {
      navigate("/dashboard");
    } else {
      setPasswordError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0d47a1,#42a5f5)",
      }}
    >
      <div
        style={{
          width: "550px",
          background: "#fff",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 15px 35px rgba(0,0,0,.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0d47a1",
            marginBottom: "10px",
          }}
        >
          💎 WealthWise AI
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "30px",
            marginTop: "20px",
          }}
        >
          Secure • Personalized • AI-Powered Wealth Advisory
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              border: emailError ? "1px solid red" : "1px solid #ccc",
            }}
          />

          {emailError && (
            <p
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              {emailError}
            </p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "8px",
              marginTop: "15px",
              border: passwordError ? "1px solid red" : "1px solid #ccc",
            }}
          />

          {passwordError && (
            <p
              style={{
                color: "red",
                fontSize: "13px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              {passwordError}
            </p>
          )}

          <p
            style={{
              fontSize: "13px",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Demo Login:
            <br />
            <b>Email:</b> demo@wealthwise.ai
            <br />
            <b>Password:</b> demo@123
          </p>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#0d47a1",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#666",
          }}
        >
          © 2026 WealthWise AI | Developed by <b>Nexora Minds</b>
        </p>
      </div>
    </div>
  );
}