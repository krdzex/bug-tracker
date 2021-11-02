import express from "express";
import bugController from "../controller/user.controller";

const router = express.Router()

router.route("/api/users").post(userController.createUser)

export default router;