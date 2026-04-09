import express from "express";

const router = express.Router();

router.post("/inscription", userController.registerUser);

router.post("/Connexion", userController.loginUser);

export default router;
