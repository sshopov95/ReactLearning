import type { Project } from "~/types";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";
import LatestPosts from "~/components/LatestPost";
import type { PostMeta } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Wellcome" },
    { name: "description", content: "Custom website dev" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] ; posts:PostMeta[]}> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL('/posts-meta.json',url))
  ]);
  if (!projectRes.ok || !postRes.ok){
    throw new Error('Failed to fetch projects/posts');
  }

  const [projects,posts] = await Promise.all([projectRes.json(), postRes.json()])
  
  return {projects,posts};
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
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview/>
      <LatestPosts posts={posts}/>
    </>
  );
};

export default HomePage;
