import express from "express";
import { form } from "../controllers/formController.js";

const router = express.Router();

// POST route for form submission
router.post("/contact", form);

export default router;
