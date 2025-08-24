import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const linkClass = ({ isActive }) =>
  "nav-link text-white" + (isActive ? " fw-bold" : "");

export default function Sidebar() {
return (
    <aside
        className="bg-dark text-white p-3 d-flex flex-column"
        style={{ width: 220, minHeight: "100vh", position: "fixed", left: 0, top: 0 }}
    >
        <h4 className="mb-4 text-center">Student CRM</h4>
        <ul className="nav flex-column gap-1">
            <li className="nav-item"><NavLink to="/" className={linkClass} end>Dashboard</NavLink></li>
            <li className="nav-item"><NavLink to="/students" className={linkClass}>Students</NavLink></li>
            <li className="nav-item"><NavLink to="/add-student" className={linkClass}>Add Student</NavLink></li>
            <li className="nav-item"><NavLink to="/notices" className={linkClass}>Notices</NavLink></li>
            <li className="nav-item"><NavLink to="/announcements" className={linkClass}>Announcements</NavLink></li>
            <li className="nav-item"><NavLink to="/progress" className={linkClass}>Progress</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className={linkClass}>About</NavLink></li>
        </ul>
        <p className="mt-auto mb-0 text-center small" style={{ fontSize: "0.85rem" }}>
            Developed by Vijaya Raghava
        </p>
    </aside>
);
}
