import { FaLinkedin, FaGithub, FaArchive } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/wormchenli"
          >
            <FaGithub />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/li-chen-89a48622/"
          >
            <FaLinkedin />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://vercel.com/templates/next.js/portfolio-starter-kit"
          >
            <FaArchive />
            <p className="ml-2 h-7">resume</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-xs text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} Li Chen
      </p>
    </footer>
  );
}
