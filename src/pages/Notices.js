import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function Notices() {
  const [title, setTitle] = useState("");
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "notices"), (snapshot) => {
      setNotices(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addDoc(collection(db, "notices"), {
      title,
      createdAt: serverTimestamp(),
    });
    setTitle("");
  };

  return (
    <div className="container mt-3">
      <h2 className="fw-bold mb-3">Notices</h2>

      {/* Add Notice Form */}
      <form onSubmit={handleAdd} className="mb-3 d-flex gap-2">
        <input
          type="text"
          placeholder="Enter notice..."
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      {/* List Notices */}
      <ul className="list-group">
        {notices.map((n) => (
          <li key={n.id} className="list-group-item d-flex justify-content-between">
            {n.title}
            <small className="text-muted">{n.createdAt?.toDate?.().toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
