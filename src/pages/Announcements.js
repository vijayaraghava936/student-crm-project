import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function Announcements() {
  const [title, setTitle] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "announcements"), (snapshot) => {
      setAnnouncements(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addDoc(collection(db, "announcements"), {
      title,
      createdAt: serverTimestamp(),
    });
    setTitle("");
  };

  return (
    <div className="container mt-3">
      <h2 className="fw-bold mb-3">Announcements</h2>

      {/* Add Announcement Form */}
      <form onSubmit={handleAdd} className="mb-3 d-flex gap-2">
        <input
          type="text"
          placeholder="Enter announcement..."
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Add</button>
      </form>

      {/* List Announcements */}
      <ul className="list-group">
        {announcements.map((a) => (
          <li key={a.id} className="list-group-item d-flex justify-content-between">
            {a.title}
            <small className="text-muted">{a.createdAt?.toDate?.().toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
