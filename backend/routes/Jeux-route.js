import express from "express";
import jeuxController from "../controllers/Jeux-controller.js";

const router = express.Router();

router.get("/", jeuxController.getJeux);

router.get("/:id", jeuxController.getJeuxById);

router.post("/", jeuxController.postJeux);

router.patch("/:id", jeuxController.updateJeux);

router.delete("/:id", jeuxController.deleteJeux);

export default router;
