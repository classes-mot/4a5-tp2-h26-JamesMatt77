import express from "express";
import jeuxController from "../controllers/Jeux-controller.js";
import { check } from 'express-validator';
import checkAuth from '../middleware/check-auth.js'

const router = express.Router();

router.get("/", jeuxController.getJeux);

router.get("/:id", jeuxController.getJeuxById);

router.post("/", 
    [
        check('title').not().isEmpty(),
        check('genre').not().isEmpty(),
        check('player').isNumeric(),
        checkAuth
    ], jeuxController.postJeux);


router.patch("/:id", [checkAuth], jeuxController.updateJeux);

router.delete("/:id", [checkAuth], jeuxController.deleteJeux);

export default router;
