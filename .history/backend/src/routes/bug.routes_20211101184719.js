import express from "express";
import bugController from "../controller/bug.controller";

const router = express.Router()

router.route("/api/users").post(bugController.createBug)

export default router;