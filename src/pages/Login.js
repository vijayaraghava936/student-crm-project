import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      setErr(e.code || "Login failed");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
      <div className="card p-4" style={{ width: 360 }}>
        <h4 className="mb-3 text-center">Login</h4>
        <form onSubmit={onSubmit}>
          <input className="form-control mb-2" type="email" placeholder="Email" value={email}
                 onChange={(e) => setEmail(e.target.value)} />
          <input className="form-control mb-3" type="password" placeholder="Password" value={password}
                 onChange={(e) => setPassword(e.target.value)} />
          <button className="btn btn-primary w-100">Login</button>
        </form>
        {err && <div className="text-danger mt-2 small">{err}</div>}
        <div className="mt-3 text-center">
          <span className="small">No account? </span>
          <Link to="/signup" className="small">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
