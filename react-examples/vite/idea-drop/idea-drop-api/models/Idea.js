import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  summary: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], //Array of strings
    default: []
  }
},{timestamps: true});


const Idea = mongoose.model("Idea",ideaSchema,"Ideas");

export default Idea;