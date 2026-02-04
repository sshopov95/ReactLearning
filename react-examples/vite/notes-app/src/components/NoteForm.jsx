import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";
import TextAreaInput from "./Inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
  //const [title, setTitle] = useState("");
  //const [priority, setPriority] = useState("Medium");
  //const [category, setCategory] = useState("Personal");
  //const [description, setDescription] = useState("");     //Сменено с handleChange и formData

  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Personal",
    description: "",
  });

  const [isFormCollapsed, setIsFormCollapsed] = useState(false);

  const handleChange = (e) => {
    //console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    //Validation goes here
    if (!formData.title || !formData.description) return;

    //Create note object (immutable)
    const newRow = { id: Date.now(), ...formData };

    //Set new state
    setNotes([newRow, ...notes]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Personal",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormCollapsed(!isFormCollapsed)}
        className="w-full bg-gray-100 border border-gray-300 text-blue-800 py-2 rounded-lg cursor-pointer hover:bg-blue-200 hover:border-blue-300 transition mb-4"
      >
        {isFormCollapsed ? "Add new note" : "Hide form"}
      </button>
      {!isFormCollapsed && (
        <form className="mb-6" onSubmit={handleSumbit}>
          {
            //Преместено в компонент
            /*<div className="mb-4">
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            name="title"
            type="text"
            className="w-full p-2 border rounder-lg"
            value={formData.title}
            //onChange={(e) => setTitle(e.target.value)}
            onChange={handleChange}
          />
        </div> */
          }

          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {
            //Преместено в компонент
            /*<div className="mb-4">
          <label htmlFor="priority" className="block font-semibold">
            Priority
          </label>
          <select
            name="priority"
            type="text"
            className="w-full p-2 border rounder-lg"
            value={formData.priority}
            //onChange={(e) => setPriority(e.target.value)}
            onChange={handleChange}
          >
            <option value="High">🔴High</option>
            <option value="Medium">🟠Medium</option>
            <option value="Low">🟢Low</option>
          </select>
        </div>*/
          }
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { label: "🔴High", value: "High" },
              { label: "🟠Medium", value: "Medium" },
              { label: "🟢Low", value: "Low" },
            ]}
          />
          {/*
          //Преместено в компонент
          <div className="mb-4">
            <label htmlFor="category" className="block font-semibold">
              Category
            </label>
            <select
              name="category"
              type="text"
              className="w-full p-2 border rounder-lg"
              value={formData.category}
              //onChange={(e) => setCategory(e.target.value)}
              onChange={handleChange}
            >
              <option value="Work">🏢Work</option>
              <option value="Personal">🌟Personal</option>
              <option value="Ideas">👨‍💻Ideas</option>
            </select>
          </div>*/}
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { label: "🏢Work", value: "Work" },
              { label: "🌟Personal", value: "Personal" },
              { label: "👨‍💻Ideas", value: "Ideas" },
            ]}
          />
          {/* 
           //Преизползван компонент
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full p-2 border rounder-lg"
              value={formData.description}
              //onChange={(e) => setDescription(e.target.value)}
              onChange={handleChange}
            />
          </div> */}
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg cursor-pointer hover: bg-blue-600">
            Add note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
