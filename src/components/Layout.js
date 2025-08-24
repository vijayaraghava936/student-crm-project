import Sidebar from "./Sidebar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ marginLeft: 220, minHeight: "100vh", background: "#f8f9fa" }}>
        {/* header */}
        <div className="d-flex justify-content-between align-items-center bg-white border-bottom px-3" style={{ height: 56 }}>
          <div className="fw-semibold">Student CRM</div>
          <button className="btn btn-outline-danger btn-sm" onClick={() => signOut(auth)}>Logout</button>
        </div>

        {/* page container */}
        <div className="container py-4">{children}</div>
      </div>
    </div>
  );
}
