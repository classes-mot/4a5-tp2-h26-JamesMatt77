import mongoose from "mongoose";

const jeuxSchema = mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  player: { type: Number },
});

export const Jeux = mongoose.model("Jeux", jeuxSchema);
