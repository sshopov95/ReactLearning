import { createFileRoute } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { Idea } from "@/types";
import api from "@/lib/axios";


const fetchIdeas = async (): Promise<Idea> => {
  const res = await api.get(`/ideas`);
  return res.data;
};

const ideasQueryOptions = () => queryOptions({queryKey: ['ideas'], queryFn: ()=> fetchIdeas()})

export const Route = createFileRoute("/ideas/")({
  head: () => ({
    meta: [
      {
        title: "IdeaHub - Browse ideas",
      },
    ],
  }),
  component: IdeasPage,
  loader: async({context: {queryClient}}) => {
    return queryClient.ensureQueryData(ideasQueryOptions());
  },
});

function IdeasPage() {
  const {data: ideas } = useSuspenseQuery(ideasQueryOptions())
  return <div>Hello "/ideas/"!</div>;
}
