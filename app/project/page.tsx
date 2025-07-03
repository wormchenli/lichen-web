import projects from "resources/projects/projects.json";
import Project from "app/components/project";

export default function Page() {
  // console.log("Projects:", projects);
  return (
    <div className="flex flex-col gap-4">
      {projects.map((p) => (
        <Project key={p.Title} project={p} />
      ))}
    </div>
  );
}
