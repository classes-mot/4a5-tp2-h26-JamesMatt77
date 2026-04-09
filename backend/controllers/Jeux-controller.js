import { Jeux } from "../models/Jeux.js";
import mongoose from "mongoose";

const getJeux = async (req, res, next) => {
  try {
    const jeux = await Jeux.find();
    res.json(jeux);
  } catch (err) {
    return next(new Error("erreur"));
  }
};

const getJeuxById = async (req, res, next) => {
  const jeuxId = req.params.tid; // /api/jeux/t1

  let jeu;
  try {
    jeu = await Jeux.findById(jeuxId);
  } catch (err) {
    console.log(err);
    return next(new Error("erreur"));
  }
  res.json({ jeu: jeu.toObject({getters: true}) });
};

const postJeux = async (req, res, next) => {
  try {
    const jeu = await Jeux.create(req.body);
    res.json(jeu);
  } catch (err) {
    return next(new Error("erreur"));
  }
};

const updateJeux = async (req, res, next) => {
  try {
    const jeu = await Jeux.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(jeu);
  } catch (err) {
    return next(new Error("erreur"));
  }
  res.json(prof);
};

const deleteJeux = async (req, res, next) => {
  try {
    const jeu = await Jeux.findByIdAndDelete(req.params.id);
    res.json({ message: "Jeu supprimer" });
  } catch (err) {
    return next(new Error("erreur"));
  }
};

export default { getJeux, postJeux, getJeuxById, updateJeux, deleteJeux };
