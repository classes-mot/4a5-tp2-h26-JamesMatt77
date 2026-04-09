import express from "express";

const router = express.Router();

router.get("/", jeuxController.getJeux);

router.get("/:id", jeuxController.getJeuxById);

router.post("/", jeuxController.createJeux);

router.put("/:id", jeuxController.updateJeux);

router.delete("/:id", jeuxController.deleteJeux);

export default router;
