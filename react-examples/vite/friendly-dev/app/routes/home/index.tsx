import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Wellcome" },
    { name: "description", content: "Custom website dev" },
  ];
}

export default function Home() {
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
  return (
    <>
      Homepage
    </>
  );
}
