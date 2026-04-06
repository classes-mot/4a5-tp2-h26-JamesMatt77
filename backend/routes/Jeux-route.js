import express from "express";

const router = express.Router();

router.get("/", jeuxController.getJeux);

router.post("/", jeuxController.createJeux);

router.put("/:id", jeuxController.updateJeux);

router.delete("/:id", jeuxController.deleteJeux);

export default router;
