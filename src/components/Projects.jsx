import { projects } from "./data";

export default function Projects({ setActiveProject }) {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="relative mix-blend-difference text-white z-10 h-fit mb-20 w-full">
      <ul
        onMouseLeave={() => {
          setActiveProject(null);
        }}
        className="border-b"
      >
        {projects.map((project, i) => {
          return (
            <li
              onMouseOver={() => {
                setActiveProject(i);
              }}
              onClick={() => handleClick(project.url)}
              key={i}
              className="text-[4vw] p-5 border-t cursor-pointer hover:opacity-80"
            >
              <p>{project.title}</p>
            </li>
          );
        })}
        <li
          onClick={() =>
            handleClick("https://www.hunterssss.in/summary/pastevents.html")
          }
          className="text-[4vw] p-5 border-t cursor-pointer hover:opacity-80"
        >
          <p>See All</p>
        </li>
      </ul>
    </div>
  );
}
