import express from "express";
import bugController from "../controller/bug.controller";

const router = express.Router()

router.route("/api/bug").post(bugController.createBug).get(bugController.listBugs)
router.route("/api/bug/:id").post(bugController.createBug).get(bugController.listBugs)

export default router;