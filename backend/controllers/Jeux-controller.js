import { Jeux } from "../models/Jeux.js";
import mongoose from "mongoose";

const getJeux = async (req, res, next) => {
  try {
    const jeux = await Jeux.find();
    res.json(jeux);
  } catch (err) {
    return next(err);
  }
};

const getJeuxById = async (req, res, next) => {
  const jeuxId = req.params.id;

  let jeu;
  try {
    jeu = await Jeux.findById(jeuxId);
  } catch (err) {
    console.log(err);
    return next(err);
  }

  if (!jeu) {
    return res.status(404).json({ message: "Jeu non trouvé" });
  }

  res.json({ jeu: jeu.toObject({ getters: true }) });
};

const postJeux = async (req, res, next) => {
  try {
    const jeu = await Jeux.create(req.body);
    res.status(201).json(jeu);
  } catch (err) {
    return next(err);
  }
};

const updateJeux = async (req, res, next) => {
  const jeuId = req.params.id;
  const jeuUpdates = req.body;

  try {
    const updatedJeu = await Jeux.findByIdAndUpdate(jeuId, jeuUpdates, {
      new: true,
    });
    
    if (!updatedJeu) {
      return res.status(404).json({ message: 'Jeu non trouvée...' });
    }

    res.status(200).json({ jeu: updatedJeu.toObject({ getters: true }) });
  } catch (err) {
    return next(err);
  }
};

const deleteJeux = async (req, res, next) => {
  const jeuId = req.params.id;

  try {
    const jeu = await Jeux.findById(jeuId);
    if (!jeu) {
      return res.status(404).json({ message: 'Jeu non trouvée.'});
    }
    await jeu.deleteOne();


    res.status(200).json({ message: "Jeu supprimer" });
  } catch (err) {
    return next(err);
  }
};

export default { getJeux, postJeux, getJeuxById, updateJeux, deleteJeux };
