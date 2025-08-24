import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Real-time listener
    const unsub = onSnapshot(collection(db, "students"), (snapshot) => {
      setStudents(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub(); // cleanup
  }, []);

  return (
    <div>
      <h2 className="mb-3">Students</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
