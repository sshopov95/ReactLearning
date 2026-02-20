import exress from "express";
import Idea from "../models/Idea.js";
import mongoose from "mongoose";

import { protect } from "../middleware/authMiddleware.js";

const router = exress.Router();

//@route        GET /api/ideas
//@description  Get all ideas
//@access       Public
//@query        _limit (optional limit for ideas return)
router.get("/", async (req, res, next) => {
  try {
    const limit = parseInt(req.query._limit);
    const query = Idea.find().sort({ createdAt: -1 }); //Sort desc

    if (!isNaN(limit)) {
      query.limit(limit);
    }

    const ideas = await query.exec();
    res.json(ideas);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    next(error);
  }
});

//@route        GET /api/ideas/id
//@description  Get idea by id
//@access       Public
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Idea not found");
    }
    const idea = await Idea.findById(id);
    if (!idea) {
      res.status(404);
      throw new Error("Idea not found");
    } else {
      console.log("Found it");
    }
    res.json(idea);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    next(error);
  }
});

//@route        POST /api/ideas
//@description  Create new ideas
//@access       Private
// [Authorize] Добавя се като втори аргумент middleware-a
router.post("/", protect, async (req, res, next) => {
  try {
    const { title, summary, description, tags } = req.body || {};

    if (!title?.trim() || !summary?.trim() || !description?.trim()) {
      res.status(400);
      throw new Error("Title, summary and description are required");
    }

    const newIdea = new Idea({
      title,
      summary,
      description,
      tags:
        typeof tags === "string"
          ? tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
          : Array.isArray(tags)
            ? tags
            : [],
      user: req.user.id,
    });

    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

//@route        DELETE /api/ideas/:id
//@description  Delete idea
//@access       Private
router.delete("/:id", protect, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Idea not found");
    }
    //const idea = await Idea.findByIdAndDelete(id);

    const idea = await Idea.findById(id);

    if (!idea) {
      res.status(404);
      throw new Error("Idea not found");
    } else {
      console.log("Found it");
    }

    //Chec if user owns idea
    if (idea.user.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("Not authorized to delete this idea");
    }

    await idea.deleteOne();

    res.json({ message: "Idea deleted" });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    next(error);
  }
});

//@route        PUT /api/ideas/:id
//@description  Update idea
//@access       Private
router.put("/:id", protect, async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(404);
      throw new Error("Idea not found");
    }

    const idea = await Idea.findById(id);

    if (!idea) {
      res.status(404);
      throw new Error("Idea not found");
    }

    //Chec if user owns idea
    if (idea.user.toString() !== req.user._id.toString()) {
      res.status(403);
      throw new Error("Not authorized to update this idea");
    }

    const { title, summary, description, tags } = req.body || {};

    if (!title?.trim() || !summary?.trim() || !description?.trim()) {
      res.status(400);
      throw new Error("Title, summary and description are required");
    }
    /*const updatedIdea = await Idea.findByIdAndUpdate(
      id,
      {
        title,
        summary,
        description,
        tags: Array.isArray
          ? tags
          : tags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean),
      },
      { new: true, runValidators: true },
    );

    if (!updatedIdea) {
      res.status(404);
      throw new Error("Idea not found");
    }*/

    idea.title = title;
    idea.summary = summary;
    idea.description = description;
    idea.tags = Array.isArray(tags)
      ? tags
      : typeof tags === "string"
        ? tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [];
    const updatedIdea = await idea.save();
    res.json(updatedIdea);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
