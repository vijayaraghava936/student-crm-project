import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "students"), {
      name,
      email,
      course,
    });
    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div>
      <h2 className="mb-3">Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}
