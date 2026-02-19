import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { createIdea } from "@/api/ideas";
import { useMutation } from "@tanstack/react-query";
export const Route = createFileRoute("/ideas/new/")({
  component: NewIdeaPage,
});

function NewIdeaPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: createIdea,
    onSuccess: () => {
      navigate({ to: "/ideas" });
    },
  });

  const handleSubmint = async (e:React.FormEvent) => {
    e.preventDefault();
    if(!title.trim() || !summary.trim() || !description.trim()){
      alert('Please fill all the fields')
      return;
    }
    try{
      await mutateAsync({title,summary,description,tags:tags.split(',').map((tag)=>tag.trim()).filter((tag)=> tag!== '')})
    }catch(error){
      console.error(error);
      alert('Something went wong')      
    }
  }
  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Create idea</h1>
    </div>
      <form onSubmit={handleSubmint} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-1"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter idea title"
          />
        </div>
        <div>
          <label
            htmlFor="summary"
            className="block text-gray-700 font-meduim mb-1"
          >
            Summary
          </label>
          <input
            id="summary"
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter idea summary"
          />
        </div>

        <div>
          <label
            htmlFor="body"
            className="block text-gray-700 font-meduim mb-1"
          >
            Description
          </label>
          <textarea
            id="body"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write out the description of your idea"
          />
        </div>

        <div>
          <label
            htmlFor="tags"
            className="block text-gray-700 font-meduim mb-1"
          >
            Tags
          </label>
          <input
            id="tags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="optional tags, comma separated"
          />
        </div>
        <div>
          <button
            type="submit"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 roundedmd transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isPending}
          >
            {isPending? 'Creating ...' : 'Create Idea'}
            
          </button>
        </div>
      </form>
    </div>
  );
}
