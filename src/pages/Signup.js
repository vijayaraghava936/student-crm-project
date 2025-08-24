import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setErr(e.code || "Signup failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <div className="card p-4" style={{ width: 360 }}>
        <h4 className="mb-3 text-center">Sign up</h4>
        <form onSubmit={onSubmit}>
          <input className="form-control mb-2" type="email" placeholder="Email" value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <input className="form-control mb-3" type="password" placeholder="Password" value={password}
                 onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-success w-100">Create Account</button>
        </form>
        {err && <div className="text-danger mt-2 small">{err}</div>}
        <div className="mt-3 text-center">
          <span className="small">Already have an account? </span>
          <Link to="/login" className="small">Login</Link>
        </div>
      </div>
    </div>
  );
}
