import { FaExternalLinkAlt } from "react-icons/fa";

// [
//   {
//     "Title": "type-ioc",
//     "Description": "A TypeScript library for dependency injection and inversion of control.",
//     "Tech": ["TypeScript"],
//     "Link": "https://github.com/wormchenli/type-ioc"
//   },
//   {
//     "Title": "lichen",
//     "Description": "A modern, fast, and flexible web framework for building web applications.",
//     "Tech": ["TypeScript"],
//     "Link": "https://github.com/wormchenli/type-ioc"
//   }
// ]

export default function Page({ project }: any) {
  return (
    <div className="h-32 flex flex-col justify-center p-2 ">
      <div className="flex items-center space-x-2">
        <p className="font-bold">{project.Title}</p>
        <a href={project.Link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="mt-2">{project.Description}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.Tech?.map((tech: string) => (
          <span
            key={tech}
            className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
