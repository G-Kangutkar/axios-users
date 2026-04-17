import express from "express";
import { todoData } from "../controller/auth.controller.js";

const router = express.Router();


router.get('/todo',todoData)



export default router;