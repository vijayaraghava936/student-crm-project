import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

export default function Dashboard() {
  const [latestNotice, setLatestNotice] = useState("No notices yet");
  const [latestAnnouncement, setLatestAnnouncement] = useState("No announcements yet");
  const [studentCount, setStudentCount] = useState(0);

  // 🔹 get latest Notice
  useEffect(() => {
    const q = query(collection(db, "notices"), orderBy("createdAt", "desc"), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setLatestNotice(snapshot.docs[0].data().title); // ✅ use 'title'
      }
    });
    return () => unsubscribe();
  }, []);

  // 🔹 get latest Announcement
  useEffect(() => {
    const q = query(collection(db, "announcements"), orderBy("createdAt", "desc"), limit(1));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setLatestAnnouncement(snapshot.docs[0].data().title); // ✅ use 'title'
      }
    });
    return () => unsubscribe();
  }, []);

  // 🔹 get total students count
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "students"), (snapshot) => {
      setStudentCount(snapshot.size);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2 className="fw-bold mb-3">Welcome to Dashboard</h2>
      <p className="text-muted">This is a simple Student CRM dashboard built with React and Firebase.</p>

      {/* stat cards */}
      <div className="row g-3 mt-1">
        <div className="col-md-4">
          <div className="card p-3">
            <div className="fw-semibold">Total Students</div>
            <div className="display-6">{studentCount}</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="fw-semibold">Latest Notice</div>
            <div className="text-muted">{latestNotice}</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <div className="fw-semibold">Latest Announcement</div>
            <div className="text-muted">{latestAnnouncement}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
