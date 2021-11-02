import express from "express";
import bugController from "../controller/bug.controller";

const router = express.Router()

router.route("/api/bug").post(bugController.createBug)

export default router;