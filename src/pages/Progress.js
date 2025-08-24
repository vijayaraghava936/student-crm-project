export default function Progress() {
  return (
    <div>
      <h2 className="fw-bold mb-3">Student Progress</h2>
      <table className="table table-striped">
        <thead>
          <tr><th>Name</th><th>Math</th><th>Science</th><th>English</th></tr>
        </thead>
        <tbody>
          <tr><td>Ravi</td><td>80%</td><td>75%</td><td>90%</td></tr>
          <tr><td>Anjali</td><td>95%</td><td>88%</td><td>92%</td></tr>
        </tbody>
      </table>
    </div>
  );
}
