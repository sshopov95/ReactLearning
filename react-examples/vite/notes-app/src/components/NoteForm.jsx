import { useState } from "react";
const NoteForm = () => {
  const [title, setTitle] = useState("");
const [priority, setPriority] = useState("Medium");
const [category, setCategory] = useState("Personal");
const [description, setDescription] = useState("");


  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold"> Title </label>
        <input type="text" className="w-full p-2 border rounder-lg"  value={title} onChange={(e) => setTitle(e.target.value)} />
        
      </div>
    </form>
  );
};

export default NoteForm;
