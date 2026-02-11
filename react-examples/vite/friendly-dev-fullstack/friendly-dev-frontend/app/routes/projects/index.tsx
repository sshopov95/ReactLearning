import type { Project, StrapiProject, StrapiResponse } from "~/types";
import type { Route } from "./+types/index";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Projects" },
    { name: "description", content: "Custom website dev" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?populate=*`);
  const json :StrapiResponse<StrapiProject> = await res.json();

  const projects = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL}${item.image.url}` : '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured
  }))

  return { projects };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  //console.log(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const { projects } = loaderData as { projects: Project[] };

  //Get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  //Filter projects based on category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate total pages
  const projectsPerPage = 5;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Get current page projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;

  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

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
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm cursor-pointer ${selectedCategory === category ? 'bg-blue-600 text-white':'bg-gray-700 text-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.div key={project.id}>
              <ProjectCard project={project}/>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {/*totalPages > 1 && renderPagination()*/}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
