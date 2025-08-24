import { auth } from "../firebase";
import { signOut } from "firebase/auth";



export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light px-3">
      <span className="navbar-brand">Student CRM</span>
      <button className="btn btn-outline-danger" onClick={() => signOut(auth)}>Logout</button>
    </nav>
  );
}
