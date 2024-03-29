import express from "express";
import userController from "../controller/user.controller";

const router = express.Router()

router.route("/api/users").post(userController.createUser).get(userController.listUsers)

export default router;