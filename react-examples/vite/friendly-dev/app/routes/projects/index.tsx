import type { Project } from "~/types";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard"; 
import { useState } from "react";
import Pagination from "~/components/Pagination";

export async function loader({ request }: Route.LoaderArgs): Promise<{projects:Project[]}> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();

  return {projects:data}
}

const ProjectsPage = ({loaderData}:Route.ComponentProps) => {
  const {projects} = loaderData as {projects: Project[]};
  //console.log(projects);
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const projectsPerPage = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Get current page projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = projects.slice(indexOfFirst, indexOfLast);

  //Button for next page - pagination button render
  /*const renderPagination = () => ( 
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({length: totalPages}, (_,index)=> (
        <button
        key={index+1}
        className={`px-3 py-1 cursor-pointer rounded ${
          currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'
        }`}
        
        onClick={ () => setCurrentPage(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  )*/
 
  return (
    <>
      <h2 className="text-3xl text-white font-bold mb-8"> Projects </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {currentProjects.map((project)=> (
          <ProjectCard project={project} key={project.id}/>
        ))}
      </div>
      {/*totalPages > 1 && renderPagination()*/}
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
};

export default ProjectsPage;
