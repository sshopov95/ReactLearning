import type { Project } from "~/types";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Wellcome" },
    { name: "description", content: "Custom website dev" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  /*const now = new Date().toISOString();

  if (typeof window == "undefined") //Serverside
  {
    console.log("Server redner at:", now);
  } else {
    console.log("Client Hydration at:", now);
  }*/

  /* return <section>
    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                 My app 
            </h2> </section>;*/
  const { projects } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview/>
    </>
  );
};

export default HomePage;
