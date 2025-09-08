export default function ProjectsPage() {
  // no async, no searchParams
  const projects = [
    { id: 1, name: "Portfolio Website" },
    { id: 2, name: "Drone Mission Planner" },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
