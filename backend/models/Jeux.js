import mongoose from "mongoose";

const jeuxSchema = mongoose.Schema({
  title: { type: String },
  genre: { type: String },
  player: { type: Number },
  gameId: [{ type: mongoose.Types.ObjectId, ref: "Id" }],
});

export const Jeux = mongoose.model("Jeux", jeuxSchema);
